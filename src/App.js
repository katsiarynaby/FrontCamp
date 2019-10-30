import { ChannelsComponent } from './ChannelsComponent.js';
export class App {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.parentSelector = 'root';
        this.parentElement = document.getElementById(`${this.parentSelector}`);
    }
    init() {
        new ChannelsComponent(this.apiKey, this.parentElement).init();

    }
}