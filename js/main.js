let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

var galerias = document.querySelectorAll('div.image-gallery');

for (var i = 0; i < galerias.length; i++) {
    var Idgaleria = galerias[i].id;
    galerias[i].addEventListener('mouseover', golive(Idgaleria));
};

function golive(Idgaleria) {

    var current = document.querySelector('div#' + Idgaleria + ' .current');
    var thumbnails = document.querySelectorAll('div#' + Idgaleria + ' .thumbnail');

    thumbnails[0].style.opacity = 0.6;

    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', show);
    };

    function show() {
        thumbnails.forEach(function (img) {
            img.style.opacity = 1;
        })
        let imgSource = this.getAttribute('src');
        current.setAttribute('src', imgSource);
        current.classList.add('fade-in');
        this.style.opacity = 0.6;
        setTimeout(function () {
            current.classList.remove('fade-in');
        }, 500);
    }
}