class RequestGet {
    constructor(url) {
        this.url = url;
    }
    getRequest() {
        return fetch(this.url, {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        });
    }
}

class RequestPost {
    constructor(url, data) {
        this.url = url;
        this.data = data;
    }
    getRequest() {
        return fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data),
            mode: 'cors',
            cache: 'no-cache',
        });
    }
}

class RequestPut {
    constructor(url, data) {
        this.url = url;
        this.data = data;
    }
    getRequest() {
        return fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data),
            mode: 'cors',
            cache: 'no-cache',
        });
    }
}

class RequestDelete {
    constructor(url) {
        this.url = url;
    }
    getRequest() {
        return fetch(this.url, {
            method: 'DELETE',
        });
    }
}

export default class RequestFactory {
    createRequest(type, url, data) {
        switch (type) {
            case 'GET':
                return new RequestGet(url);
            case 'POST':
                return new RequestPost(url, data);
            case 'PUT':
                return new RequestPut(url, data);
            case 'DELETE':
                return new RequestDelete(url);
        }
    }
}