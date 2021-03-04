import { navEditOptions } from "../../helpers/navs.js";

class NavEditOptions extends HTMLElement {
    constructor() {
        super()
    }

    handleEvent(event) {
        if(event.type === "click") {
            this.goTo(event)
        }
    }

    goTo(event) {
        if(event.target.dataset.component) {
            document.getElementById("root").innerHTML = event.target.dataset.component
        }
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="is-flex is-justify-between align-center bg-color-light is-py-1">
            <button class="a-btn a-btn--secondary" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x text-color-base" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
            <ul class="o-ui-list o-ui-list--horizontal">
                ${
                    navEditOptions.map(item => {
                        return (
                            `<li class="a-btn a-btn--secondary" title="${item.text}" id="${item.id}" data-component="${item.component}">${item.icon}</li>`
                        )
                    }
                    ).join("")
                }
                <li class="a-btn a-btn--secondary" title="Color de fondo">
                    <input type="color" />
                </li>
            </ul>
        </nav>`

        navEditOptions.map(element => {
            return this[element.id] = document.querySelector(`#${element.id}`),
            this[element.id].addEventListener("click", this)
        })
    }
}

customElements.define("nav-edit-options", NavEditOptions)

// onClick="${this.goTo(item.component)}"