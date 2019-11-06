import { Request } from '../RequestFactory/Request.js';
import { Channel } from './Channel.js';
import { ArticlesComponent } from '../Article/ArticlesComponent.js';
import { createTag } from '../utils/createTag.js';

import './style.css'

export class ChannelsComponent {
    constructor(apiKey, parentElement) {
        this.apiKey = apiKey;
        this.parentElement = parentElement;
        this.selectClass = 'sourceSelectList';
        this.buttonClass = 'loadingNews';
        this.articlesContainerClass = 'articles-container';
    }

    init() {
        Request.getSources(this.apiKey).then(data => this.render(data.sources));
    }

    render(sources) {
        let selectList = createTag('select', this.selectClass);
        selectList.id = this.selectId;
        this.parentElement.appendChild(selectList);

        this.channels = sources.map(channel => new Channel(channel.id, channel.name, channel.description, channel.category, channel.language, channel.country))

        this.channels.map(source => {
            let option = createTag('option');
            option.value = source.id;
            option.innerHTML = source.name;
            selectList.appendChild(option);
        });

        let button = createTag('button', this.buttonClass);
        button.innerHTML = 'Loading News';
        this.parentElement.appendChild(button);

        let articlesContainer = createTag('div', this.articlesContainerClass);
        this.parentElement.appendChild(articlesContainer);

        let btnLoadingNews = document.querySelector(`.${this.buttonClass}`);
        btnLoadingNews.onclick = () => new ArticlesComponent(this.apiKey, this.selectClass, this.parentElement, this.articlesContainerClass).init();
    }
}