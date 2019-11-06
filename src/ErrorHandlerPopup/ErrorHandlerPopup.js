import { createTag } from '../utils/createTag.js';
import "./style.css";

export class ErrorHandlePopup {
    constructor() {
        if (typeof ErrorHandlePopup.instance === 'undefined') {
            ErrorHandlePopup.instance = this;
        }
        return ErrorHandlePopup.instance;
    }

    errorMessage(message) {
        if (!document.querySelector('.error-message')) {
            this.popup = createTag('div', 'error-message');
            document.body.appendChild(this.popup);
            this.popup.setAttribute("id", "error-message");
            this.addCancelEventListener(this.popup);
        }
             this.popup.innerHTML = `${message}`;

    }

    addCancelEventListener(element) {
        element.addEventListener("click", (event) => {
            const targetID = event.target.id;
            if (targetID === "error-message") {
                element.remove()
            }
        });
    }
}
