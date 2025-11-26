let closeModal = (modalName) => {
    let modal = document.querySelector(modalName);
    if (modal == null) return;
    modal.style.display = "none";
}

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const project = item.getAttribute("project");

        const modal_image = document.querySelector("#modal_menu_image");
        const modal_text = document.querySelector("#modal_menu_text");
        
        modal_image.style.display = "flex";
        modal_text.style.display = "flex";

        openProject(project);
    });
});

const projects = {
    "avcommerce_3d": {
        header: "AVCommerce 3D",
        body: [
            `My college capstone project. It is a website for a book printing company with 3D Models you can view. The 3D Models used for the site was created in Blender.`,
            `This was made ALONG with, not only our thesis, but also a presentation and an exhibition of the project. Needless to say, it was a rough set of circumstances that made this developer stressed. Just the word "revision" is enough to make me shudder.`
        ],
        footerLeft: [
            { href: "https://github.com/KenDavidYang/AVC", icon: "./img/os.svg" },
            { href: "https://github.com/KenDavidYang/AVC", icon: "./img/os.svg" }
        ],
        footerRight: "HTML, CSS, JS, PHP, MYSQL, PYTHON, AWS, DOCKER, GIT, BLENDER, PHOTOSHOP",
        image: "./img/this_pc.svg"
    }
};

const openProject = (project) => {
    const projectData = projects[project];
    const projectModal = document.querySelector("#modal_menu_text");
    const modalHeader = projectModal.querySelector(".menu-text-header");
    const modalBody = projectModal.querySelector(".menu-text-body");
    const modalLeftFooter = projectModal.querySelector(".menu-text-footer-left");
    const modalRightFooter = projectModal.querySelector(".menu-text-footer-right");

    const modalImage = document.querySelector(".menu-image-content img");
    modalImage.src = projectData["image"];

    modalHeader.innerHTML = projectData["header"];
    modalBody.innerHTML = "";
    projectData["body"].forEach(paragraph => {
        modalBody.innerHTML += `<p>&nbsp;&nbsp;&nbsp;&nbsp;${paragraph}</p>`;
    });

    modalLeftFooter.innerHTML = "";
    projectData["footerLeft"].forEach(item => {
        // tbf
        modalLeftFooter.innerHTML +=
        `
            <a href="${item["href"]}" target="_blank" style="text-decoration: none;">
                <img src="${item["icon"]}" alt="">
            </a>
        `
    });
    modalRightFooter.innerHTML = projectData["footerRight"];
}