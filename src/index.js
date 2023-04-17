import _ from 'lodash';
import './styles.css';
import homePage from './homepage';
import menu from './menu';
import addEventListeners from './eventlisteners';

function loadPage() {
    const content = document.getElementById('content');

    // Create Header
    const header = document.createElement('div');
    header.classList.add('head');
    header.innerHTML = 'This Italian Restaurant';
    
    const menu = document.createElement('button');
    const about = document.createElement('button');
    menu.classList.add('menu-btn');
    about.classList.add('about-btn');
    menu.textContent = "Menu";
    about.textContent = "About Us";
    
    const buttons = document.createElement('div');
    buttons.classList.add('btn-wrapper');
    buttons.append(menu, about);
    
    const headerWrapper = document.createElement('div');
    headerWrapper.classList.add('head-wrap');
    headerWrapper.append(header, buttons);
    
    content.append(headerWrapper);
    
    
    // Create container
    const container = document.createElement('div');
    container.classList.add('main-con');
    content.appendChild(container);
    
    // Create footer
    const footer = document.createElement('div');
    footer.textContent = "CHECK OUT OUR LINKS BELOW!";

    const linkCon = document.createElement('div');
    linkCon.classList.add('links');
    const links = [
        {
            name: "Google",
            site: "https://www.google.com"
        },
        {
            name: "Apple",
            site: "https://www.apple.com"
        },
        {
            name: "Microsoft",
            site: "https://www.microsoft.com"
        },
        {
            name: "Twitter",
            site: "https://www.twitter.com"
        }
    ];
    links.forEach(link => {
        let thisLink = document.createElement('a');
        thisLink.title = link.name;
        thisLink.textContent = link.name;
        thisLink.href = link.site
        linkCon.appendChild(thisLink);
    });

    const footerWrapper = document.createElement('div');
    footerWrapper.classList.add('foot');
    footerWrapper.append(footer, linkCon)

    // Add header, footer, content to screen
    content.append(footerWrapper);
};

loadPage();
addEventListeners();

const contentCon = document.getElementsByClassName('main-con');
contentCon[0].append(menu());