const draggable = document.querySelectorAll('.draggable');

let viewportWidth = window.innerWidth;
function pxToVw(px) {
    return (px / viewportWidth) * 100;
}

draggable.forEach(draggable => {
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    const dragHandle = draggable.querySelector(".drag-handle");
    const dragInitiator = dragHandle || draggable;


    document.addEventListener("mousemove", (event) => {
        
        if (isDragging) {
            leftpx = event.clientX - offsetX;
            toppx = event.clientY - offsetY;

            draggable.style.left = `${pxToVw(leftpx)}vw`;
            draggable.style.top = `${pxToVw(toppx)}vw`;
        }
    });  

    dragInitiator.addEventListener("mousedown", (event) => {
        event.preventDefault(); 

        isDragging = true;
        offsetX = event.clientX - draggable.offsetLeft;
        offsetY = event.clientY - draggable.offsetTop;

        if (dragHandle == dragInitiator) {
            draggable.style.cursor = "move";
        }
        console.log(isDragging);
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;

        draggable.style.cursor = "auto";
        console.log(isDragging);
    });

    draggable.addEventListener("dblclick", () => {
        const link = draggable.getAttribute("link");
        if(link) {
            const modal = document.querySelector(link);
            modal.style.display = "block";
        }
    });

    window.addEventListener('resize', () => {
        viewportWidth = window.innerWidth;
    });
})

document.addEventListener("contextmenu", function(e){
    if (e.target.nodeName === "IMG") {
        e.preventDefault();
    }
}, false);
