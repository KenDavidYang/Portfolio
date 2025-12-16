const draggable = document.querySelectorAll('.draggable');
const dblClick = document.querySelectorAll('.dbl-click');

let viewportWidth = window.innerWidth;
let itemWidth       = document.querySelector(".item-modal").offsetWidth;
console.log(itemWidth);



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
        // tbf dragging outside
        isDragging = true;
        if(event.clientX >= itemWidth) {
            console.log("outside");
            console.log(itemWidth);
        }
        offsetX = event.clientX - draggable.offsetLeft;
        offsetY = event.clientY - draggable.offsetTop;

        if (dragHandle == dragInitiator) {
            draggable.style.cursor = "move";
        }
        draggable.style.cursor = "move";
        console.log(isDragging);
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;

        draggable.style.cursor = "pointer";
        console.log(isDragging);
    });


    // remove?
    draggable.addEventListener("dblclick", () => {
        const link = draggable.getAttribute("link");
        if(link && link.startsWith("#")) {
            const modal = document.querySelector(link);
            modal.style.display = "block";
        }
    });

    window.addEventListener('resize', () => {
        viewportWidth = window.innerWidth;
    });
})

document.addEventListener("contextmenu", (e) => {
    if (e.target.nodeName === "IMG") {
        e.preventDefault();
    }
}, false);

dblClick.forEach(anchor => {
    anchor.addEventListener("dblclick", (event) => {
        event.preventDefault();

        const link = anchor.getAttribute("link");
        window.open(link, "_blank");
    });
});
