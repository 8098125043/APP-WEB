document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function showSlide(index) {
        items.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    document.querySelector('.carousel-control.next').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % totalItems;
        showSlide(currentIndex);
    });

    document.querySelector('.carousel-control.prev').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});

