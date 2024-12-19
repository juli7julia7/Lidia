'use string'

document.addEventListener('click', documentClick);


function documentClick(e){
    const targetItem = e.target;

    if(targetItem.closest('.icon-menu')){
        document.documentElement.classList.toggle('menu-open');
        document.querySelector('html').classList.toggle('scroll-off');
    }
}