import PterodactylAPI from '../index';

import ClientServerModel, { ServerOptionsRaw, } from '../models/ClientServer';
import Pagination, { PaginationOptionsRaw, } from '../models/Pagination';

interface UtilizationData {
    used: number;
    total: number;
}

class ClientServer extends ClientServerModel {
    private api: PterodactylAPI;
    public pagination?: Pagination;

    constructor(api: PterodactylAPI, data: ServerOptionsRaw, paginationOptions?: PaginationOptionsRaw) {
        super(data);
        this.api = api;
        if (paginationOptions) this.pagination = new Pagination(paginationOptions);
    }

    public static getAll(api: PterodactylAPI, page: number = 1): Promise<ClientServer[]> {
        return new Promise(async (resolve, reject) => {
            try {
                let res = await api.call(`/client?page=${page}`);
                resolve(res.data.data.map((value: any) => new ClientServer(api, value.attributes, res.data.meta)));
            } catch (error) {
                reject(error);
            }
        });
    }

    public static getById(api: PterodactylAPI, id: string): Promise<ClientServer> {
        return new Promise(async (resolve, reject) => {
            try {
                let res = await api.call(`/client/servers/${id}`);
                resolve(new ClientServer(api, res.data.attributes));
            } catch (error) {
                reject(error);
            }
        });
    }

    public cpuUsage(): Promise<UtilizationData> {
        return new Promise((resolve, reject) => {
            this.api.call(`/client/servers/${this.identifier}/utilization`).then(res => resolve({ used: res.data.attributes.cpu.current, total: res.data.attributes.cpu.limit })).catch(error => reject(error));
        });
    }

    public diskUsage(): Promise<UtilizationData> {
        return new Promise((resolve, reject) => {
            this.api.call(`/client/servers/${this.identifier}/utilization`).then(res => resolve({ used: res.data.attributes.disk.current, total: res.data.attributes.disk.limit })).catch(error => reject(error));
        });
    }

    public memoryUsage(): Promise<UtilizationData> {
        return new Promise((resolve, reject) => {
            this.api.call(`/client/servers/${this.identifier}/utilization`).then(res => resolve({ used: res.data.attributes.memory.current, total: res.data.attributes.memory.limit })).catch(error => reject(error));
        });
    }

    public powerState(): Promise<string> {
        return new Promise((resolve, reject) => {
            this.api.call(`/client/servers/${this.identifier}/utilization`).then(res => resolve(res.data.attributes.state)).catch(error => reject(error));
        });
    }

    public powerAction(signal: 'start' | 'stop' | 'restart' | 'kill'): Promise<void> {
        return new Promise((resolve, reject) => {
            this.api.call(`/client/servers/${this.identifier}/power`, 'POST', { signal }).then(res => resolve()).catch(error => reject(error));
        });
    }

    public start(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.api.call(`/client/servers/${this.identifier}/power`, 'POST', { signal: 'start' }).then(res => resolve()).catch(error => reject(error));
        });
    }

    public stop(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.api.call(`/client/servers/${this.identifier}/power`, 'POST', { signal: 'stop' }).then(res => resolve()).catch(error => reject(error));
        });
    }

    public restart(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.api.call(`/client/servers/${this.identifier}/power`, 'POST', { signal: 'restart' }).then(res => resolve()).catch(error => reject(error));
        });
    }

    public kill(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.api.call(`/client/servers/${this.identifier}/power`, 'POST', { signal: 'kill' }).then(res => resolve()).catch(error => reject(error));
        });
    }

    public databases(): Promise<number> {
        return Promise.resolve(this.featureLimits.databases);
    }

    public allocations(): Promise<number> {
        return Promise.resolve(this.featureLimits.allocations);
    }

    public sendCommand(command: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.api.call(`/client/servers/${this.identifier}/command`, 'POST', { command }).then(res => resolve()).catch(error => reject(error));
        });
    }
}

export default ClientServer;