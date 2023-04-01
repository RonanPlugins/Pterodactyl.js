const Pterodactyl = require( '../index' );

const client = new Pterodactyl.Builder( 'https://panel.mineshaft.me/', 'ZI9jQA93VxHvo5uPaBfazeTn7rEqh83ipbKekJMZfizqQEaW' ).asAdmin();

console.log( client );

client.getServer( '30' ).then( server => {
    server.setName( 'Api Testing' ).then( data => {
        console.log( data
        );

    } )
} )