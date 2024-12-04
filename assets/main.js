const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuButton = document.querySelector('.burger-menu-button');
const burgerMenuIcon = document.querySelector('.burger-menu-button i')

burgerMenuButton.onclick = function(){
    burgerMenu.classList.toggle('open')
    const isOpen = burgerMenu.classList.contains('open');
    burgerMenuIcon.classList = isOpen ? 'fa-solid fa-x' : 'fa-solid fa-bars';
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
}

const handleIntersect = function(entries, observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio > 0.1) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target)
        };
    })
}

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function(r){
    observer.observe(r)
});