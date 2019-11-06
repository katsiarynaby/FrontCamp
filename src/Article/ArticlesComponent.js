import { Article } from './Arcticle.js';
import { createTag } from '../utils/createTag.js';
import { Request } from '../RequestFactory/Request.js';
import './style.css'

export class ArticlesComponent {
    constructor(apiKey, selectClass, parentElement, articlesContainerClass) {
        this.apiKey = apiKey;
        this.parentElement = parentElement;
        this.selectClass = selectClass;
        this.articlesContainer = document.querySelector(`.${articlesContainerClass}`);
    }

    init() {
        let channel = document.querySelector(`.${this.selectClass}`).value;
        Request.getArticles(channel, this.apiKey).then(data => this.render(data.articles))
    }

    render(sources) {
        this.articlesContainer.innerHTML = '';
        this.articles = sources.map(article => new Article(article.author, article.title, article.description, article.publishedAt, article.url, article.urlToImage));

        this.articles.map(source => {
            let articleBody = createTag('div', 'article-body')
            let details = `
            ${source.title ? `<h3 class="article-title"><a class="article-title-link" target="_blank" href="${source.url}">${source.title}</a></h3>` : ``}
          ${source.author ? `<span class="article-author">by ${source.author}</span>` : ``}
          ${source.description ? `<p class="article-content">${source.description}</p>` : ``}
          ${source.urlToImage ? `<div class="article-image"><img src="${source.urlToImage}"/></div>` : ''}`
            articleBody.innerHTML = details;
            this.articlesContainer.appendChild(articleBody);
        });
    }
};