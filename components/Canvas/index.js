import { imageResize } from "../../Modules/resizeImage.js"

class UICanvas extends HTMLElement {
    constructor() {
        super()
        this.isUp = null
    }

    handleEvent(event) {
        switch (event.type) {
            case 'mousedown':
                this.resizeImage.handleMouseDown(event)
                break;
            case 'mousemove':
                this.resizeImage.handleMouseMove(event)
                break
            case 'mouseup':
                this.resizeImage.handleMouseUp(event)
                break;
            default:
                break;
        }

    }

    connectedCallback() {
        this.innerHTML = `
            <canvas id="canvas">Uppps tu navegador no soporta canvas :c</canvas>
        `
        this.canvas = document.querySelector("#canvas")

        /* Responsive */
        this.canvas.setAttribute("width", this.canvas.parentNode.offsetWidth)
        this.canvas.setAttribute("height", this.canvas.parentNode.offsetHeight)

        this.resizeImage = imageResize(this.canvas, window.localStorage.getItem("image"), {
            x: 100,
            y: 50,
            w: 300,
            h: 300
        })

        this.canvas.addEventListener("mousedown", this)
        this.canvas.addEventListener("mousemove", this)
        this.canvas.addEventListener("mouseup", this)
    }
    
    disconnectedCallback() {
        this.canvas.addEventListener("mousedown", this)
        this.canvas.addEventListener("mousemove", this)
        this.canvas.addEventListener("mouseup", this)
    }
}

customElements.define("ui-canvas", UICanvas)