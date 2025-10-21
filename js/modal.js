let closeModal = (modalName) => {
    let modal = document.querySelector(modalName);
    if (modal == null) return;
    modal.style.display = "none";
}

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        let link = item.getAttribute("link");
        if (link == null) return;
        let modal = document.querySelector(link);
        modal.style.display = "flex";
    });
});