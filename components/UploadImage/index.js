import { SetLocalStorage, LocalStorage} from "../../observer/observerLocalStorage.js"
import { toggleModal, render } from "../../helpers/DOM.js" 

const setImage = new SetLocalStorage()
const image = new LocalStorage("image", () => {
    const $image = new Image()
    $image.setAttribute("src", window.localStorage.getItem("image"))

    $image.addEventListener("load", () => {
        document.getElementById("root").innerHTML = "<nav-edit-options></nav-edit-options>"
        // render(`<div>Hola!</div>`, document.getElementById("root"))
    })

    $image.addEventListener("error", () => {
        toggleModal(document.querySelector("ui-modal"))
    })
})

setImage.subscribe(image)

class UploadImage extends HTMLElement {
    constructor() {
        super()
    }

    handleEvent(event) {
        if(event.type === "change") {
            this.handlerChange(event)
        }
    }

    handlerChange(event) {
        if(event.target.type === "file") {
            return this.uploadImage(URL.createObjectURL(event.target.files[0]))
        }

        this.uploadImage(event.target.value)
    }

    uploadImage(url) {
        setImage.notify(url)
    }


    connectedCallback() {
        this.innerHTML = `
        <div class="card is-mb-4 text-center">
            <h2>Sube una imagen para comenzar!</h2>
            <figure class="is-flex is-justify-center" id="container-image">
                <img src="" id="image" />
            </figure>
            <p>Arrastra o has click en el botón para agragar una imagen.</p>
            <input type="file" class="a-btn a-btn--primary a-btn--large" id="input-file" accept="image/png, image/jpeg">
        </div>
        <div class="is-p-2 is-flex is-align-center bg-color-light">
            <label class="is-pr-2">URL</label>
            <input type="url" placeholder="Agraga una URL" id="input-url">
        </div>
        `
        this.inputFile = this.querySelector("#input-file")
        this.inputURL = this.querySelector("#input-url")
        this.image = this.querySelector("#image")


        this.inputFile.addEventListener("change", this)
        this.inputURL.addEventListener("change", this)
    }

    static get observedAttributes() {
        return ["dark"]
    }

    attributeChangedCallback(name,old,now) {
        if(name === "dark") {
            this.image.setAttribute("src", `./assets/Upload${JSON.parse(now) ? "Dark" : "Light"}.svg`)
        }
    }
 

    disconnectedCallback() {
        this.inputFile.removeEventListener("change", this)
        this.inputURL.removeEventListener("change", this)
    }
}

customElements.define("upload-image", UploadImage)
