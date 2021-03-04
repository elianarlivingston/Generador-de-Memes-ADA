let isUp = null

export const handleMouseDown = (event, imageSettings, canvas) => {
    if(
        event.pageX >= (imageSettings.w + imageSettings.x - 10)
        && 
        event.pageX <= (imageSettings.w + imageSettings.x + 10)
        && 
        event.pageY >= ( canvas.offsetTop + imageSettings.y + 20) 
        && 
        event.pageY <= (canvas.offsetTop + imageSettings.h + imageSettings.y - 20)
    ) {
        isUp = "right"
    } else if(
        event.pageX >=  (imageSettings.x - 10) 
        && 
        event.pageX <= (imageSettings.x + 10) 
        &&
        event.pageY >= ( canvas.offsetTop + imageSettings.y + 20) 
        &&
        event.pageY <= (canvas.offsetTop + imageSettings.h + imageSettings.y - 20)
        ) {
        isUp = "left"
    } else if(
        event.pageY >= (canvas.offsetTop + imageSettings.y - 10) 
        && 
        event.pageY <= (canvas.offsetTop + imageSettings.y + 10) 
        && event.pageX >= (imageSettings.x + 20 )
        && event.pageX <= (imageSettings.w + imageSettings.x - 20)
        ) {
        isUp = "top"
    } else if(
        event.pageY >= (canvas.offsetTop + imageSettings.h + imageSettings.y - 10)
        &&
        event.pageY <= (canvas.offsetTop + imageSettings.h + imageSettings.y + 10)
        && 
        event.pageX >= (imageSettings.x + 20) 
        && 
        event.pageX <= (imageSettings.w + imageSettings.x - 20)
        ) {
        isUp = "bottom"
    }  else if(
        event.pageY >= (canvas.offsetTop + imageSettings.y - 20)
        &&
        event.pageY <= (canvas.offsetTop + imageSettings.y + 20 )
        &&
        event.pageX >= (imageSettings.x - 20)
        && 
        event.pageX <= (imageSettings.x + 20)
        ) {
        isUp = "top-left"
    } 
    else if(
        event.pageY >= (canvas.offsetTop + imageSettings.y - 20) 
        && 
        event.pageY <= (canvas.offsetTop + imageSettings.y + 20) 
        &&
        event.pageX >=  (imageSettings.x + imageSettings.w - 20 )
        && 
        event.pageX <= (imageSettings.x + imageSettings.w + 20)
        ) {
        isUp = "top-right"
    } else if(
        event.pageY >= (canvas.offsetTop + imageSettings.h +imageSettings.y - 20)
        && 
        event.pageY <= (canvas.offsetTop + imageSettings.h +imageSettings.y + 20)
        && 
        event.clientX >= (imageSettings.w + imageSettings.x - 20) 
        && 
        event.clientX <= (imageSettings.w + imageSettings.x + 20)
        ) {
        isUp = "bottom-right"
    } else if(
        event.pageY >= (canvas.offsetTop + imageSettings.h + imageSettings.y - 20)
        && 
        event.pageY <= (canvas.offsetTop + imageSettings.h + imageSettings.y + 20)
        && 
        event.pageX >=  (imageSettings.x - 20)
        && 
        event.pageX <= (imageSettings.x + 20)
        ) {
        isUp = "bottom-left"
    }
}

export const handleMouseMove = (event, imageSettings, canvas, image) => {
    if(
        event.pageX >= (imageSettings.w + imageSettings.x - 10)
        && 
        event.pageX <= (imageSettings.w + imageSettings.x + 10)
        && 
        event.pageY >= ( canvas.offsetTop + imageSettings.y + 20) 
        && 
        event.pageY <= (canvas.offsetTop + imageSettings.h + imageSettings.y - 20)
        || 
        event.pageX >=  (imageSettings.x - 10) 
        && 
        event.pageX <= (imageSettings.x + 10) 
        &&
        event.pageY >= ( canvas.offsetTop + imageSettings.y + 20) 
        &&
        event.pageY <= (canvas.offsetTop + imageSettings.h + imageSettings.y - 20)
    ) {
        // right and left
        canvas.style.cursor = 'ew-resize'
    } 
    else if(
        event.pageY >= (canvas.offsetTop + imageSettings.y - 10) 
        && 
        event.pageY <= (canvas.offsetTop + imageSettings.y + 10) 
        && 
        event.pageX >= (imageSettings.x + 20 )
        && 
        event.pageX <= (imageSettings.w + imageSettings.x - 20)
        || 
        event.pageY >= (canvas.offsetTop + imageSettings.h + imageSettings.y - 10)
        &&
        event.pageY <= (canvas.offsetTop + imageSettings.h + imageSettings.y + 10)
        && 
        event.pageX >= (imageSettings.x + 20) 
        && 
        event.pageX <= (imageSettings.w + imageSettings.x - 20)
    ) {
        // top and bottom
        canvas.style.cursor = 'n-resize'
    } 
    else if(
        event.pageY >= (canvas.offsetTop + imageSettings.y - 20)
        &&
        event.pageY <= (canvas.offsetTop + imageSettings.y + 20 )
        &&
        event.pageX >= (imageSettings.x - 20)
        && 
        event.pageX <= (imageSettings.x + 20)
        || 
        event.pageY >= (canvas.offsetTop + imageSettings.h +imageSettings.y - 20)
        && 
        event.pageY <= (canvas.offsetTop + imageSettings.h +imageSettings.y + 20)
        && 
        event.clientX >= (imageSettings.w + imageSettings.x - 20) 
        && 
        event.clientX <= (imageSettings.w + imageSettings.x + 20)
    ) {
        // top-left and bottom-right
        canvas.style.cursor = 'nw-resize'   
    } 
    else if(
        event.pageY >= (canvas.offsetTop + imageSettings.y - 20) 
        && 
        event.pageY <= (canvas.offsetTop + imageSettings.y + 20) 
        &&
        event.pageX >=  (imageSettings.x + imageSettings.w - 20 )
        && 
        event.pageX <= (imageSettings.x + imageSettings.w + 20)
        || 
        event.pageY >= (canvas.offsetTop + imageSettings.h + imageSettings.y - 20)
        && 
        event.pageY <= (canvas.offsetTop + imageSettings.h + imageSettings.y + 20)
        && 
        event.pageX >=  (imageSettings.x - 20)
        && 
        event.pageX <= (imageSettings.x + 20)
    ) {
        // top-right and bottom-left
        canvas.style.cursor = 'ne-resize'
    } else {
        canvas.style.cursor = "auto"
    }

    switch (isUp) {
        case "right":
            imageSettings.w += event.pageX - (imageSettings.w + imageSettings.x)

            console.log(imageSettings)

            canvas.getContext("2d").clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

            canvas.getContext("2d").drawImage(image, imageSettings.x, imageSettings.y, imageSettings.w, imageSettings.h)

            break;
        case "left":
            imageSettings.w += imageSettings.x - event.pageX
            imageSettings.x = event.pageX

            canvas.getContext("2d").clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

            canvas.getContext("2d").drawImage(image, imageSettings.x, imageSettings.y, imageSettings.w, imageSettings.h)
            break;
        case "bottom":
            imageSettings.h = event.pageY - (imageSettings.y + canvas.offsetTop)

            canvas.getContext("2d").clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

            canvas.getContext("2d").drawImage(image, imageSettings.x, imageSettings.y, imageSettings.w, imageSettings.h)
            break;
        case "top":
            imageSettings.h += (canvas.offsetTop + imageSettings.y) - event.pageY
            imageSettings.y -= (canvas.offsetTop + imageSettings.y) - event.pageY

            canvas.getContext("2d").clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

            canvas.getContext("2d").drawImage(image, imageSettings.x, imageSettings.y, imageSettings.w, imageSettings.h)
            break;
        case "top-left":
            imageSettings.h += (canvas.offsetTop + imageSettings.y) - event.pageY
            imageSettings.y -= (canvas.offsetTop + imageSettings.y) - event.pageY

            imageSettings.w += imageSettings.x - event.clientX
            imageSettings.x = event.pageX

            canvas.getContext("2d").clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

            canvas.getContext("2d").drawImage(image, imageSettings.x, imageSettings.y, imageSettings.w, imageSettings.h)
            break;
        case "top-right":
            imageSettings.h += (canvas.offsetTop + imageSettings.y) - event.pageY
            imageSettings.y -= (canvas.offsetTop + imageSettings.y) - event.pageY

            imageSettings.w += event.pageX - (imageSettings.w + imageSettings.x)

            canvas.getContext("2d").clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

            canvas.getContext("2d").drawImage(image, imageSettings.x, imageSettings.y, imageSettings.w, imageSettings.h)
            break;
        case "bottom-right":
            imageSettings.h = event.pageY - (imageSettings.y + canvas.offsetTop)
            imageSettings.w += event.pageX - (imageSettings.w + imageSettings.x)

            canvas.getContext("2d").clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

            canvas.getContext("2d").drawImage(image, imageSettings.x, imageSettings.y, imageSettings.w, imageSettings.h)
            break;
        case "bottom-left":
            imageSettings.h = event.pageY - (imageSettings.y + canvas.offsetTop)

            imageSettings.w += imageSettings.x - event.pageX
            imageSettings.x = event.pageX

            canvas.getContext("2d").clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

            canvas.getContext("2d").drawImage(image, imageSettings.x, imageSettings.y, imageSettings.w, imageSettings.h)
            break;
        default:
            break;
    }
}

export const handleMouseUp = () => {
    console.log("mouseup")
    isUp = null
}

export const drawImageFunc = (canvas, image, x, y, w, h) => {
    canvas.getContext("2d")
    .drawImage(image, x, y, w, h)
}