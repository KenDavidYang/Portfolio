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
            `My college capstone project, leaded by me. It is a website for a book printing company with 3D Models you can view. The 3D Models used for the site was created in Blender.`,
            `This was made ALONG with, not only our thesis, but also a presentation and an exhibition of the project. Needless to say, it was a rough set of circumstances that made this developer stressed.`
        ],
        footerLeft: [
            { href: "https://github.com/KenDavidYang/AVC", icon: "./img/layout/github.svg" }
        ],
        footerRight: "HTML, CSS, JS, PHP, MYSQL, PYTHON, AWS, DOCKER, GIT, BLENDER, PHOTOSHOP",
        image: "./img/layout/this_pc.svg"
    },

    "casessory": {
        header: "Tech Accessory Store",
        body: [
            `Casessory is a simple tech accessory webstore made in weebly. This was a college group project that I lead, so that we can learn about weebly. It was mostly about designs and which direction to take the store in.`,
            `I remember one night in particular where I had to teach one of the team members how to use photoshop to design the logo I made. Not particularly a "fun" experience but I look back at those times fondly`
        ],
        footerLeft: [
            { href: "https://recyclableaccessories.weebly.com/", icon: "./img/layout/web-link.svg" }
        ],
        footerRight: "WEEBLY, PHOTOSHOP",
        image: "./img/menu/casessory/static.webp"
    },

    "mock_clothing": {
        header: "Mock Clothing Store",
        body: [
            `Just a Simple Mock Clothing Storefront that I used to test my stock vanilla frontend knowledge`,
        ],
        footerLeft: [
            { href: "https://github.com/KenDavidYang/MockClothingStore", icon: "./img/layout/github.svg" },
            { href: "https://kendavidyang.github.io/MockClothingStore/", icon: "./img/layout/web-link.svg" }
        ],
        footerRight: "HTML, CSS, JS",
        image: "./img/menu/mock_clothing/static.webp"
    },

    "bet_maker": {
        header: "Bet Maker",
        body: [
            `Gotta be honest. Terrible name. The inspiration from this project came from my new year's resolution at the time: "Bets". I would bet from something as simple as "Can I ride the bus on time" to "Can I finish this project before this date"`,
            `This was my way of learning about react and windows applications. I wanted to be able to make windows applications at the time and this was a fun project to learn about.`
        ],
        footerLeft: [
            { href: "https://github.com/KenDavidYang/Bet-Maker", icon: "./img/layout/github.svg" }
        ],
        footerRight: "HTML, CSS, TS, VITE, REACT, ELECTRON",
        image: "./img/layout/this_pc.svg"
    },

    "office_discord_bot": {
        header: "Office Discord Bot",
        body: [
            `Since I had some free time around the office, and my section of the office were communicating with discord. I thought it would be fun to create a bot to show to them and play with.`,
            `Had a bit of difficulty to find a good resource other than the discord api documentation. So I had to scrape the old forms and random sources from the internet to build the bot.`,
        ],
        footerLeft: [
            { href: "https://github.com/KenDavidYang/discord-bot-office", icon: "./img/layout/github.svg" }
        ],
        footerRight: "PYTHON",
        image: "./img/menu/office_discord_bot/slide1.webp"
    },

    "auto_anki": {
        header: "Auto Anki",
        body: [
            `Learning Japanese with Anki inspired me to make something that would help people like me who didn't understand how to make custom Anki decks.`,
            `The project is a simple script that allows user to give custom inputs that will convert it to an excel file that can be imported to Anki.`
        ],
        footerLeft: [
            { href: "https://github.com/KenDavidYang/Auto-Anki", icon: "./img/layout/github.svg" }
        ],
        footerRight: "PYTHON, PYINSTALLER",
        image: "./img/menu/auto_anki/static.png"
    },

    "school_attendance_system": {
        header: "School Attendance System",
        body: [
            `A group project where I was the lead developer and was responsible for pretty much everything except documentation`,
            `This was my first project in college where I was responsible for coordinating the team along with creating the bulk of the system.`
        ],
        footerLeft: [
            { href: "https://github.com/KenDavidYang/AttendanceSystem", icon: "./img/layout/github.svg" }
        ],
        footerRight: "JAVA, MYSQL",
        image: "./img/layout/this_pc.svg"
    }
};

const openProject = (project) => {
    const projectData = projects[project];
    const menuText = document.querySelector("#modal_menu_text");
    const textMenuHeader = menuText.querySelector(".menu-text-header");
    const textMenuBody = menuText.querySelector(".menu-text-body");
    const textMenuLeftFooter = menuText.querySelector(".menu-text-footer-left");
    const textMenuRightFooter = menuText.querySelector(".menu-text-footer-right");

    const modalImage = document.querySelector(".menu-image-content img");
    modalImage.src = projectData["image"];

    textMenuHeader.innerHTML = projectData["header"];
    textMenuBody.innerHTML = "";
    projectData["body"].forEach(paragraph => {
        textMenuBody.innerHTML += `<p>&nbsp;&nbsp;&nbsp;&nbsp;${paragraph}</p>`;
    });

    textMenuLeftFooter.innerHTML = "";
    projectData["footerLeft"].forEach(item => {
        // tbf
        textMenuLeftFooter.innerHTML +=
        `
            <a href="${item["href"]}" target="_blank" style="text-decoration: none;">
                <img src="${item["icon"]}" alt="">
            </a>
        `
    });
    textMenuRightFooter.innerHTML = projectData["footerRight"];
}