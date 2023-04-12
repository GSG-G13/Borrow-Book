
const message = document.querySelector('.message');
const popContainer = document.querySelector('.popup-form-container');
const warning = document.querySelector('.warning');
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
saveBtn.addEventListener("click", () => {
    
    if(bookNameInput.value && bookImgInput.value && authorInput.value) {
        warning.classList.add('hidden');
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
       message.classList.remove('hidden')
       setTimeout(() =>  message.classList.add('hidden'), 2000)
        console.log('The request has been added')
    })
    .catch((error) => {
        console.log(error);
    })
    popupForm.classList.remove("active");
    contentHider.classList.remove("active");
    document.body.style.overflow = "auto";
    booksSection.innerHTML = '';
    fetch('/getBooks')
        .then((res) => res.json())
        .then(({rows}) => {
            rows.forEach(card => {
                createCard(card)
            });
        })
        .catch((error) => console.log(error))
    }
    else {
        warning.classList.remove('hidden');
        
    }
});
