const bookList  = document.querySelector('.book-container')

document.addEventListener('DOMContentLoaded', () => {
    fetch('/getBooks')
    .then((res) => res.json())
    .then(({rows}) => {
        bookList.textContent = '';
        rows.forEach(card => {
            createCard(card)
        });
    })
    .catch((error) => console.log(error))

})
saveBtn.addEventListener("click", () => {
    fetch('/addBook',{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            author : authorInput.value,
            image: bookImgInput.value,
            bookName : bookNameInput.value
        })
    })
    .then(() => {
        console.log('The request has been added')
    })
    .catch((error) => {
        console.log(error);
    })
});