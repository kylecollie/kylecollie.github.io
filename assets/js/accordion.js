const accordionTitles = document.querySelectorAll('.accordion__title');

accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener('click', () => {
        if (accordionTitle.classList.contains('accordion__title-active')) {
            accordionTitle.nextElementSibling.style.maxHeight = '0px';
        } else {
            accordionTitles.forEach(title => {
                title.nextElementSibling.style.maxHeight = '0px';
                title.classList.remove('accordion__title-active');
            });
        }
        const height = accordionTitle.nextElementSibling.scrollHeight;
        accordionTitle.classList.toggle('accordion__title-active');
        if (accordionTitle.classList.contains('accordion__title-active')) {
            accordionTitle.nextElementSibling.style.maxHeight = `${height}px`;
        } else {
            accordionTitle.nextElementSibling.style.maxHeight = '0px';
        }
    })
})