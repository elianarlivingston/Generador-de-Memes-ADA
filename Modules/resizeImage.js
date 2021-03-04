export const imageResize = (canvas, $image, {x, y, w, h}) => {
    const ctx = canvas.getContext("2d")
    const imageSettings = {
        x: x,
        y: y,
        w: w,
        h: h,
    }
    
    let isUp = null


    const drawImageFunc = (image, x, y, w, h) => {
        ctx.drawImage(image, x, y, w, h)
    }

    const clearDraw = () => {
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
    }

    $image.addEventListener("load", () => {
        drawImageFunc($image, imageSettings.x, imageSettings.y, imageSettings.w, imageSettings.h)
    })

    const handleMouseDown = (event) => {
        if(event.clientX >= imageSettings.w + imageSettings.x - 5 && event.clientX <= imageSettings.w + imageSettings.x + 5 && event.pageY >= imageSettings.y + 20 && event.pageY <= imageSettings.y + imageSettings.h - 20) {
            isUp = "right"
        } 
        else if(event.clientX >=  imageSettings.x - 5 && event.clientX <= imageSettings.x + 5 && event.pageY >= imageSettings.y + 20 && event.pageY <= imageSettings.y + imageSettings.h - 20) {
            isUp = "left"
        }
        else if(event.pageY >= imageSettings.y + canvas.offsetTop - 5 && event.pageY <= imageSettings.y + canvas.offsetTop + 5 && event.clientX >= imageSettings.x + 20 && event.clientX <= imageSettings.w + imageSettings.x - 20) {
            isUp = "top"
        }         
        else if(event.pageY >= imageSettings.y + imageSettings.h + canvas.offsetTop - 5 && event.pageY <= imageSettings.y + imageSettings.h + canvas.offsetTop + 5 && event.clientX >= imageSettings.x + 20 && event.clientX <= imageSettings.w + imageSettings.x - 20) {
            isUp = "bottom"
        } 
        else if(event.pageY >= imageSettings.y + canvas.offsetTop - 20 && event.pageY <= imageSettings.y + canvas.offsetTop + 20 && event.clientX >=  imageSettings.x - 20 && event.clientX <= imageSettings.x + 20) {
            isUp = "top-left"
        } else 
        
        if(event.pageY >= imageSettings.y + canvas.offsetTop - 5 && event.pageY <= imageSettings.y + canvas.offsetTop + 5 && event.clientX >=  imageSettings.x + imageSettings.w - 20 && event.clientX <= imageSettings.x + imageSettings.w + 20) {
            isUp = "top-right"
        } 
        else if(event.pageY >= imageSettings.y + canvas.offsetTop + imageSettings.h - 20 && event.pageY <= imageSettings.y + imageSettings.h + canvas.offsetTop + 20 && event.clientX >=  imageSettings.x + imageSettings.w - 20 && event.clientX <= imageSettings.x + imageSettings.w + 20) {
            isUp = "bottom-right"
        }
        else if(event.pageY >= imageSettings.y + imageSettings.h + canvas.offsetTop - 20 && event.pageY <= imageSettings.y + imageSettings.h + canvas.offsetTop + 20 && event.clientX >=  imageSettings.x - 20 && event.clientX <= imageSettings.x + 20) {
            isUp = "bottom-left"
        }
    }

    const handleMouseMove = (event) => {
        if(event.clientX >= imageSettings.w + imageSettings.x - 5 && event.clientX <= imageSettings.w + imageSettings.x + 5 && event.pageY >= imageSettings.y + canvas.offsetTop + 20 && event.pageY <= imageSettings.y + imageSettings.h + canvas.offsetTop - 20) {
            canvas.style.cursor = "w-resize"  
        }
        else 
        if(event.clientX >=  imageSettings.x - 5 && event.clientX <= imageSettings.x + 5 && event.pageY >= imageSettings.y + canvas.offsetTop + 20 && event.pageY <= imageSettings.y + canvas.offsetTop + imageSettings.h - 20) {
            canvas.style.cursor = "w-resize" 
        } else if(event.pageY >= imageSettings.y + canvas.offsetTop - 5 && event.pageY <= imageSettings.y + canvas.offsetTop + 5 && event.clientX >= imageSettings.x + 20 && event.clientX <= imageSettings.w + imageSettings.x - 20) {
            canvas.style.cursor = "n-resize"
        } 
        
        else if(event.pageY >= imageSettings.y + imageSettings.h + canvas.offsetTop - 5 && event.pageY <= imageSettings.y + imageSettings.h + canvas.offsetTop + 5 && event.clientX >= imageSettings.x + 20 && event.clientX <= imageSettings.w + imageSettings.x - 20) {
            canvas.style.cursor = "n-resize" 
        }
        else if(event.pageY >= imageSettings.y + canvas.offsetTop - 20 && event.pageY <= imageSettings.y + canvas.offsetTop + 20 && event.clientX >=  imageSettings.x - 20 && event.clientX <= imageSettings.x + 20) {
            canvas.style.cursor = "nw-resize" 
        } 
        else if(event.pageY >= imageSettings.y + canvas.offsetTop + imageSettings.h - 20 && event.pageY <= imageSettings.y + imageSettings.h + canvas.offsetTop + 20 && event.clientX >=  imageSettings.x + imageSettings.w - 20 && event.clientX <= imageSettings.x + imageSettings.w + 20) {
            canvas.style.cursor = "nw-resize" 
        }
        else if(event.pageY >= imageSettings.y + canvas.offsetTop - 5 && event.pageY <= imageSettings.y + canvas.offsetTop + 5 && event.clientX >=  imageSettings.x + imageSettings.w - 20 && event.clientX <= imageSettings.x + imageSettings.w + 20) {
            canvas.style.cursor = "nesw-resize" 
        } 
        else if(event.pageY >= imageSettings.y + canvas.offsetTop + imageSettings.h - 20 && event.pageY <= imageSettings.y + imageSettings.h + canvas.offsetTop + 20 && event.clientX >=  imageSettings.x - 20 && event.clientX <= imageSettings.x + 20) {
            canvas.style.cursor = "nesw-resize" 
        }
        else {
            canvas.style.cursor = "auto"
        }

        switch (isUp) {
            case "right":
                imageSettings.w += event.clientX - (imageSettings.w + imageSettings.x)

                clearDraw()

                drawImageFunc($image, imageSettings.x, imageSettings.y, imageSettings.w, imageSettings.h)
                break;
            case "left":
                imageSettings.w += imageSettings.x - event.clientX
                imageSettings.x = event.clientX

                clearDraw()

                drawImageFunc($image, imageSettings.x, imageSettings.y, imageSettings.w, imageSettings.h)
                break;
            case "bottom":
                imageSettings.h = event.pageY - (imageSettings.y + canvas.offsetTop)

                clearDraw()

                drawImageFunc($image, imageSettings.x, imageSettings.y, imageSettings.w, imageSettings.h)
                break;
            case "top":
                imageSettings.h += (canvas.offsetTop + imageSettings.y) - event.pageY
                imageSettings.y -= (canvas.offsetTop + imageSettings.y) - event.pageY

                clearDraw()

                ctx.drawImage($image, imageSettings.x, imageSettings.y, imageSettings.w, imageSettings.h)
                break;
            case "top-left":
                imageSettings.h += (canvas.offsetTop + imageSettings.y) - event.pageY
                imageSettings.y -= (canvas.offsetTop + imageSettings.y) - event.pageY

                imageSettings.w += imageSettings.x - event.clientX
                imageSettings.x = event.clientX

                clearDraw()

                drawImageFunc($image, imageSettings.x, imageSettings.y, imageSettings.w, imageSettings.h)
                break;
            case "top-right":
                imageSettings.h += (canvas.offsetTop + imageSettings.y) - event.pageY
                imageSettings.y -= (canvas.offsetTop + imageSettings.y) - event.pageY

                imageSettings.w += event.clientX - (imageSettings.w + imageSettings.x)

                clearDraw()

                drawImageFunc($image, imageSettings.x, imageSettings.y, imageSettings.w, imageSettings.h)
                break;
            case "bottom-right":
                imageSettings.h = event.pageY - imageSettings.y
                imageSettings.w += event.clientX - (imageSettings.w + imageSettings.x)

                clearDraw()

                drawImageFunc($image, imageSettings.x, imageSettings.y, imageSettings.w, imageSettings.h)
                break;
            case "bottom-left":
                imageSettings.h = event.pageY - imageSettings.y
                imageSettings.w += imageSettings.x - event.clientX
                imageSettings.x = event.clientX

                clearDraw()

                drawImageFunc($image, imageSettings.x, imageSettings.y, imageSettings.w, imageSettings.h)
                break;
            default:
                break;
        }
    }

    const handleMouseUp = () => {
        isUp = null
    }

    return {
        handleMouseDown,
        handleMouseMove,
        handleMouseUp
    }
    
}