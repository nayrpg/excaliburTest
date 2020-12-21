var Greeter = /** @class */ (function () {
    function Greeter(el) {
        this.element = el;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { _this.span.innerText = new Date().toUTCString(); }, 500);
        var excal = new ex.Engine({
            width: 800,
            height: 600
        });
        excal.start();
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById("content");
    var greeter = new Greeter(el);
    greeter.start();
};
