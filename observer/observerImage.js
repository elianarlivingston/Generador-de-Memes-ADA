import { SetLocalStorage, LocalStorage} from "./observerLocalStorage.js"

export const setImage = new SetLocalStorage()

export const image = new LocalStorage("image", () => {
    // console.log(window.localStorage.getItem("image"))
})

setImage.subscribe(image)

