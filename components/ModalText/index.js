class ModalText extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <aside>
                <form>
                    <header>
                        <nav>
                        </nav>
                        <button class="a-btn a-btn--secondary a-btn--medium" type="submit">Listo</button>
                    </header>
                    <div>
                        <textarea></textarea>
                    </div>
                    <footer>
                        Footer
                    </footer>
                </form>
            </aside>
        `
    }
}

customElements.define("modal-text", ModalText)