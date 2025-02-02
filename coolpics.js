const menuItems = document.querySelector('.menu-items');
const menuButton = document.getElementById('menu-button');

handleResize()
menuButton.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(menuItems.classList.contains('hide')){
        menuItems.classList.remove('hide');
    }else{
        menuItems.classList.add('hide');
    }
}

window.addEventListener('resize', handleResize)

function handleResize(){
    if (window.innerWidth > 1000){
        menuItems.classList.remove('hide')
    }
}

const images = document.querySelectorAll('img');
images.forEach((image) => {
    image.addEventListener('click', viewHandler)
});

function viewerTemplate(pic, alt){
    return `<div class="viewer">
                <button class="close-viewer">X</button>
                <img src="${pic}" alt="${alt}">
            </div>`;
}

function viewHandler(event) {
    const galleryItem = event.target;

    let srcName = galleryItem.src.split("-")[0];
    srcName = srcName + "-full.jpeg"
    console.log(srcName)
	document.body.insertAdjacentHTML("afterbegin", viewerTemplate(srcName, galleryItem.alt))

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    const closeButton = document.querySelector('.close-viewer');
    closeButton.addEventListener('click', closeViewer);
}

function closeViewer(){
    const modal= document.querySelector('.viewer');
    modal.remove();
}