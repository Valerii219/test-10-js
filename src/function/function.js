export  default class UIHandler {
    hideElement(element) {
        element.style.display = 'none';
    }

    showElement(element) {
        element.style.display = 'block';
    }
}