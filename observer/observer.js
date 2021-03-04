export class Subject {
    constructor() {
        this.observers = []
    }

    subscribe(obj) {
        this.observers.push(obj)
    }

    unsubscribe(obj) {
        this.observers = this.observers.filter(object => object != obj)
    }
    
    notify(model) {
        this.observers.forEach(observer => {
            observer.notify(model)
        })
    }
}