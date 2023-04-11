document.addEventListener('DOMContentLoaded', () => {
    fetch('/getBooks')
    .then((res) => res.json())
    .then(({rows}) => {
        rows.forEach(card => {
            createCard(card)
        });
    })
    .catch((error) => console.log(error))
})