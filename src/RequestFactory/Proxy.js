import RequestFactory from './RequestFactory';

export default async function RequestProxy(type, url) {
    const requestFactory = new RequestFactory();
    let request = requestFactory.createRequest(type, url);
    request = new Proxy(request, {
        get: function (target, prop) {
            return target[prop];
        }
    });
    const response = await request.getRequest();
    return await response.json();
} 