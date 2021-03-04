import { SetLocalStorage, LocalStorage} from "./observerLocalStorage.js"
import { setTheme } from "../helpers/DOM.js"
// Guardamos en localStorage
// 1) Inicializamos el observable
export const setDark = new SetLocalStorage()
// 2) Inicializamos el objeto que se va a subsctibir, en este caso como argumento toma: la key del local storage, y un callback que va a ejecutar cada vez que cambie
const dark = new LocalStorage("dark", () => {
    setTheme(JSON.parse(window.localStorage.getItem("dark")))
})

// Nos subscribimos al sujeto
setDark.subscribe(dark)

// Lo inicializamos, ya que, no se notifica con los valores por defecto
setDark.notify(JSON.parse(window.localStorage.getItem("dark")) || window.matchMedia("(prefers-color-scheme: dark)").matches)