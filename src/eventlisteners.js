import menu from "./menu";
import homePage from "./homepage";

function addEventListeners() {
    const addMenu = document.querySelector('.menu-btn');
    const addAbout = document.querySelector('.about-btn');
    addMenu.addEventListener('click', () => {
        let mainContainer = document.querySelector('.main-con');
        mainContainer.removeChild(mainContainer.firstChild);
        mainContainer.append(menu());
    });

    addAbout.addEventListener('click', () => {
        let mainContainer = document.querySelector('.main-con');
        mainContainer.removeChild(mainContainer.firstChild);
        mainContainer.append(homePage());
    })
};

export default addEventListeners;