const imageData = [
    { src: 'polana-kalatowki-7958161_640.jpg', alt: 'Image 1', hd: 'polana-kalatowki-7958161.jpg', caption: 'GREEN LANDSCAPE'},
    { src: 'equestrian-8592695_640.jpg', alt: 'Image 2', hd: 'equestrian-8592695.jpg', caption: 'POLO GAME'},
    { src: 'landscape-8060760_640.jpg', alt: 'Image 3', hd: 'landscape-8060760.jpg', caption: 'CALM FIELD' },
    { src: 'barberry-8612696_640.jpg', alt: 'Image 4', hd: 'barberry-8612696.jpg', caption: 'LEAVES' },
    { src: 'european-shorthair-8601492_640.jpg', alt: 'Image 5', hd: 'european-shorthair-8601492.jpg', caption: 'KITTY CAT' },
    { src: 'forest-8584311_640.jpg', alt: 'Image 6', hd: 'forest-8584311.jpg', caption: 'WOODS' },
    { src: 'norway-8593725_640.jpg', alt: 'Image 7', hd: 'norway-8593725.jpg', caption: 'WINTER IN NORWAY' },
    { src: 'landscape-8336497_640.jpg', alt: 'Image 8', hd: 'landscape-8336497.jpg', caption: 'ICELAND' },
    { src: 'pigeon-8410348_640.jpg', alt: 'Image 9', hd: 'pigeon-8410348.jpg', caption: 'PIGEON' },
    { src: 'peacock-4497802_640.jpg', alt: 'Image 10', hd: 'peacock-4497802.jpg', caption: 'PEACOCK' },
    { src: 'geese-8312440_640.jpg', alt: 'Image 11', hd: 'geese-8312440.jpg', caption: 'GEESE' },
    { src: 'chrysanthemum-8256282_640.jpg', alt: 'Image 12', hd: 'chrysanthemum-8256282.jpg', caption: 'CHRYSANTHEMUM FLOWER' },
   
];
function createGallery() {
    const gallery = document.getElementById('gallery');

    imageData.forEach(image => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.dataset.hd = image.hd;
        img.dataset.caption = image.caption;
        gallery.appendChild(img);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    createGallery();

    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.classList.add('modal');
    document.body.appendChild(modal);

    const modalImg = document.createElement('img');
    modalImg.id = 'modalImg';
    modalImg.classList.add('modal-content');
    modal.appendChild(modalImg);

    const caption = document.createElement('div');
    caption.id = 'caption';
    caption.classList.add('caption');
    modal.appendChild(caption);

    document.getElementById('gallery').addEventListener('click', function(event) {
        const target = event.target;

        if (target.tagName.toLowerCase() === 'img') {
            const hdSrc = target.dataset.hd;

            modal.style.display = 'block';
            modalImg.src = hdSrc;
            caption.innerHTML = target.dataset.caption;

            modal.onclick = function() {
                modal.style.display = 'none';
            };
        }
    });
});
