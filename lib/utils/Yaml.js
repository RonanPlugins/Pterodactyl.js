"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Yaml {
    static getSpaces(amount) {
        let spaces = '';
        for (let index = 0; index < amount; index++)
            spaces += ' ';
        return spaces;
    }
    ;
    static stringify(object, tier = 0, indent = 2) {
        let yaml = '';
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                const element = object[key];
                if (typeof element === 'object') {
                    yaml += `${this.getSpaces(tier * indent)}${key}:`;
                    yaml += '\n';
                    yaml += this.stringify(element, tier + 1, indent);
                    yaml += '\n';
                }
                else {
                    if (typeof element === 'string' && element.includes(':')) {
                        yaml += `${this.getSpaces(tier * indent)}${key}: '${element}'`;
                    }
                    else {
                        yaml += `${this.getSpaces(tier * indent)}${key}: ${element}`;
                    }
                    yaml += '\n';
                }
            }
        }
        let array = yaml.split('\n');
        array = array.filter(value => value != '');
        return array.join('\n');
    }
}
exports.default = Yaml;
