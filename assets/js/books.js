fetch('assets/data/ChristianBooks.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (ChristianBooks) {
        let placeholder = document.querySelector('#data-output');
        let out = '';

        for (let book of ChristianBooks) {
            out += `
                <li>
                    <h4 class="accordion__item__title">${book.Title}</h4>
                    <h5 class="accordion__item__author">${book.Author}</h5>
                    <p class="accordion__description">${book.Description}</p>
                </li>
            `;
        }

        placeholder.innerHTML = out;
    });