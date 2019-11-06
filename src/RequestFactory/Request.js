import RequestProxy from './Proxy.js';

export class Request {
    static async getSources(apiKey) {
        try {
            return await RequestProxy('GET', `https://newsapi.org/v2/sources?apiKey=${apiKey}`)
        } catch (error) {
            this.showPopup(error)
        }
    }

    static async getArticles(source, apiKey) {
        try {
            return await RequestProxy('GET', `https://newsapi.org/v2/top-headlines?sourceS=${source}&apiKey=${apiKey}`);
        } catch (error) {
            this.showPopup(error)
        }
    }

    static showPopup(message) {
        import(/* webpackChunkName: "ErrorHandlePopup" */ '../ErrorHandlerPopup/ErrorHandlerPopup').then((module) => {
            const { ErrorHandlePopup } = module;
            new ErrorHandlePopup().errorMessage(message);
        }
        )
    }
}
