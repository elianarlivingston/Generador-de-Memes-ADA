import { LitElement, html, css } from 'https://unpkg.com/lit-element@2.3.1?module';
// import { classMap } from "https://unpkg.com/lit-html@1.2.1/directives/class-map?module"

class MyAlert extends LitElement {

constructor () {
    super()
    this.opened = false
}

static get properties () {
    return {
        opened: {type: Boolean},
        title: { type: String },
        text: { type: String },
        type: { type: String },
        image: { type: String },
        button: { type: String },
        close: { type: Boolean }
    }
}

render () {
    return html`
    <link rel="stylesheet" href="./index.css">

    <div class="m-container-modal ${this.opened ? "" : 'hidden'}">
        <aside class="m-modal text-center">
        <header>
            <h3>${this.title}</h3>
        </header>
        ${this.image ? 
            html`<figure>
                    <img src="../../assets/${this.image}" alt="Modal image" class="modal__image" />
                </figure>` : 
                ""
        }
        ${
            this.text ? html`<p>${this.text}</p>` : ""
        }
        ${
            this.button ? html`<button 
            class="a-btn a-btn--large a-btn--primary"
            @click="${() => this.dispatchEvent(new CustomEvent('dialog.accept'))}"
            >${this.button}</button>` : ""
        }
        </aside>
    </div>
    `
}

}

customElements.define('my-alert', MyAlert)


// class MyApp extends LitElement {
//     constructor () {
//         super()
//         this.dialogVisible = false
//     }

//     static get properties () {
//         return {
//         dialogVisible: {type: Boolean}
//         }
//     }

//     render () {
//         console.log('Dialog visible:', this.dialogVisible)
//         return html`
//         <div>
//             <button @click="${this.toggleDialog}">Toggle dialog</button>
//             <my-alert ?opened="${this.dialogVisible}" 
//             @dialog.accept="${this.closeDialog}"</my-alert>
//         </div>`
//     }

//     toggleDialog (e) {
//         this.dialogVisible = !this.dialogVisible
//         console.log(this.dialogVisible)
//     }

//     closeDialog (e) {
//         console.log(e)
//         this.toggleDialog()
//         this.dialogVisible = false
//     }
    
// }

// customElements.define('my-app', MyApp)

