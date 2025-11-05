let closeModal = (modalName) => {
    let modal = document.querySelector(modalName);
    if (modal == null) return;
    modal.style.display = "none";
}

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        let image = item.getAttribute("image");
        let text = item.getAttribute("text");
        if (image == null && text == null) return;
        let modal_image = document.querySelector(image);
        let modal_text = document.querySelector(text);
        modal_image.style.display = "flex";
        modal_text.style.display = "flex";
    });
});