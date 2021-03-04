import { Subject } from "./observer.js"

export class SetLocalStorage extends Subject {
    constructor(){
        super()
        this.localStorage
    }

    notify(newValue) {
        this.localStorage = newValue
        super.notify(this)
    }
}

export class LocalStorage {
    constructor(item, callback) {
        this.item = item
        this.callback = callback
    }

    notify(subject) {
        window.localStorage.setItem(this.item, subject.localStorage)
        this.callback()
    }
}