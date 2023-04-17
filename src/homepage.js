function homePage() {
    const container = document.createElement('div');

    const description = document.createElement('div');
    description.classList.add('desc');
    description.innerHTML = 
    `
    This Italian Restaurant is a parade for the senses you will not want to miss. From our delicious wines created at our partner vineyard to the
    savory dishes we will make fresh for you. ` + `<br>` + `<br>` + `Stop in to This Italian Restaurant today and see what you've been missing!
    `
    
    container.classList.add('homepage-container');
    container.append(description);
    
    return container;
};

export default homePage;