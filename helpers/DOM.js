export const setTheme = (bool) => {
    if(bool) {
        document.body.classList.add("dark-theme")
    } else {
        document.body.classList.remove("dark-theme")
    }
}

export const render = (html, element) => {
    if(typeof html === "string") {
        return element.insertAdjacentHTML("beforeend", html)
    }

    if(typeof html === "object") {
        return element.appendChild(html)
    }
}

export const toggleModal = (ref) => {
    ref.classList.toggle("hidden")
}

export const convertImageToBase64 = async (file) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    
    return new Promise((resolve, reject) => {
        reader.addEventListener("load", () => {
            return resolve(reader.result)
        })
    })
}