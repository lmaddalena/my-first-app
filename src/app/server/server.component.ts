import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    serverID = 10;
    serverStatus = 'offline';

    constructor() {
        this.serverStatus = Math.random() >= .5 ? 'offline' : 'online';
    }
    getServerStatus() {
        return this.serverStatus;
    }
    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
