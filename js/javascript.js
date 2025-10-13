const draggable = document.querySelectorAll('.draggable');

let viewportWidth = window.innerWidth;
function pxToVw(px) {
    return (px / viewportWidth) * 100;
}

draggable.forEach(draggable => {
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    document.addEventListener("mousemove", (event) => {
        
        if (isDragging) {
            leftpx = event.clientX - offsetX;
            toppx = event.clientY - offsetY;

            draggable.style.left = `${pxToVw(leftpx)}vw`;
            draggable.style.top = `${pxToVw(toppx)}vw`;
        }
    });  

    draggable.addEventListener("mousedown", (event) => {
        event.preventDefault(); 

        isDragging = true;
        offsetX = event.clientX - draggable.offsetLeft;
        offsetY = event.clientY - draggable.offsetTop;
        console.log(isDragging);
    })

    document.addEventListener("mouseup", () => {
        isDragging = false;
        console.log(isDragging);
    })

    draggable.addEventListener("dblclick", () => {
        const link = draggable.getAttribute("link");
        if(link) {
            window.location.href = link;
        }
    })

    window.addEventListener('resize', () => {
        viewportWidth = window.innerWidth;
    })
})
