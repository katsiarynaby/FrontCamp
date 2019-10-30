export function createTag(tag, classname = '') {
    let element = document.createElement(tag);
    element.className = classname;
    return element
}