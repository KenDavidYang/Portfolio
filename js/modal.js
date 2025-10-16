let closeModal = (modalName) => {
    let modal = document.querySelector(modalName);
    if (modal == null) return;
    modal.style.display = "none";
}