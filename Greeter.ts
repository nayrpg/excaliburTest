class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(el: HTMLElement) {
        this.element = el
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span')
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    start() {
        this.timerToken = setInterval(() => {this.span.innerText = new Date().toUTCString();}, 500);
        const excal: ex.Engine = new ex.Engine({
            width: 800,
            height: 600
        });
        excal.start();
    }
    stop() {
        clearTimeout(this.timerToken);
    }
}

window.onload = () => {
    var el = document.getElementById("content");
    var greeter = new Greeter(el);
    greeter.start();
}