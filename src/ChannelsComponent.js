import { getSources } from './getSources.js';
import { Channel } from './Channel.js';
import { ArticlesComponent } from './ArticlesComponent.js';

export class ChannelsComponent {
    constructor(apiKey, parentElement) {
        this.apiKey = apiKey;
        this.parentElement = parentElement;
        this.selectId = 'sourceSelectList';
    }

    init() {
        getSources(this.apiKey).then(data => this.render(data.sources));
    }

    render(sources) {
        let selectList = document.createElement("select");
        selectList.id = this.selectId;
        this.parentElement.appendChild(selectList);

        this.channels = sources.map(channel => new Channel(channel.id, channel.name, channel.description, channel.category, channel.language, channel.country))

        this.channels.map(source => {
            let option = document.createElement("option");
            option.value = source.id;
            option.innerHTML = source.name;
            selectList.appendChild(option);
        });

        let button = document.createElement("button");
        button.innerHTML = 'Loading News';
        button.id = 'loadingNews';
        this.parentElement.appendChild(button);

        let articlesContainer = document.createElement("div");
        articlesContainer.className = 'articles-container';
        this.parentElement.appendChild(articlesContainer);

        let self = this;
        let btnLoadingNews = document.getElementById("loadingNews");
        btnLoadingNews.onclick = () => new ArticlesComponent(self.apiKey, this.selectId, this.parentElement).init();
    }
}