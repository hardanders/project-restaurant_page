import Parm from '../imgs/parm.png';
import Scampi from '../imgs/scampi.jpeg';
import Spaghetti from '../imgs/spaghetti.jpg';
import Pizza from '../imgs/pizza.jpg';


function menu() {
    const container = document.createElement('div');
    container.classList.add('menu-container');

    const menuItems = [
        {
            name: 'Chicken Parmigiano',
            description: 
                'An Italian classic - spaghetti noodles topped with our finest cut of chicken breast, then drenched in our house-made red sauce and covered with parmigiano cheese.',
            price: 14.99,
            pic: Parm,
        },
        {
            name: 'Spicy Shrimp Scampi',
            description:
                'Traditional with a bit of a kick. Our cooks have taken this meal to the next level by adding a nice spicy finish. Topped on full plate of linguini noodles.',
            price: 19.99,
            pic: Scampi,
        },
        {
            name: 'Spaghetti and Meatballs',
            description:
                'A staple for any Italian Restaurant, this is not to be missed. Our meatballs are so flavorful, and the combination with our red sauce will have you screaming "SPAGHET!!"',
            price: 13.99,
            pic: Spaghetti,
        },
        {
            name: 'Pizza',
            description:
                'Who can hate on a good ol\' pizza. Ask your server for a toppings menu - our pies come in 12", 16", and 20" sizes.',
            price: {
                small: 9.99, 
                medium: 12.99, 
                large: 16.99
            },
            pic: Pizza,
        },
    ];

    menuItems.forEach(item => {
        let itemHeader = document.createElement('div');
        itemHeader.classList.add('item-header');
        itemHeader.textContent = item.name;

        let itemPic = new Image();
        itemPic.classList.add('item-pic');
        itemPic.src = item.pic;
        itemPic.alt = item.name;

        let itemDesc = document.createElement('div');
        itemDesc.classList.add('item-desc');
        itemDesc.textContent = item.description;

        let itemPrice = document.createElement('div');
        itemPrice.classList.add('item-price');
        if (item.name === "Pizza") {
            itemPrice.textContent = `Small: ${item.price.small} / Medium: ${item.price.medium} / Large: ${item.price.large}`
        } else {
            itemPrice.textContent = item.price.toString();
        };

        let menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.append(itemHeader, itemPic, itemDesc, itemPrice);

        container.append(menuItem);
    });

    return container;
};

export default menu;