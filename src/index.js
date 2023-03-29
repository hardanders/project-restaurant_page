import _ from 'lodash';
import './styles.css';
import homePage from './homepage';


const content = document.getElementById('content')

const header = document.createElement('div');
header.classList.add('head');
header.innerHTML = 'Italian Restaurant';

const menu = document.createElement('button');
const about = document.createElement('button');
menu.classList.add('menu-btn');
about.classList.add('about-btn');

const wrapper = document.createElement('div');
wrapper.classList.add('btn-wrapper');
wrapper.append(menu, about);

content.appendChild(header);
content.appendChild(wrapper);

content.appendChild(homePage());