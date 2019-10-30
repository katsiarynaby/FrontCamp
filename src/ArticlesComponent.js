import { Article } from './Arcticle.js';
import { getArticles } from './getArticles.js';

export class ArticlesComponent {
    constructor(apiKey, selectId, parentElement) {
        this.apiKey = apiKey;
        this.parentElement = parentElement;
        this.selectId = selectId;
        this.currentSelector = 'articles';
        this.documentElement = document.getElementById(`${this.currentSelector}`);
        this.articlesContainer = document.querySelector(".articles-container");
    }

    init() {
        let channel = document.getElementById(this.selectId).value;
        getArticles(channel, this.apiKey).then(data => this.render(data.articles))
    }

    render(sources) {
        this.articlesContainer.innerHTML = '';
        this.articles = sources.map(article => new Article(article.author, article.title, article.description, article.publishedAt, article.url, article.urlToImage));

        this.articles.map(source => {
            let articleBody = document.createElement("div");
            articleBody.className = 'article-body';
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