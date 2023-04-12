const booksSection = document.querySelector(".book-container");
const addedBooksSection = document.querySelector(".added-books");
const borrowedBooksSection = document.querySelector(".borowed-books");
const logout = document.querySelector('.logout');
// for pop up window
const popupForm = document.querySelector(".add-form-container");
const addBtn = document.querySelector(".add-btn");
const cancelBtn = document.querySelector(".cancel");
const contentHider = document.querySelector(".content-hider");
// for add book  from pop up
const bookImgInput = document.querySelector("#book-img-input");
const bookNameInput = document.querySelector("#book-name-input");
const authorInput = document.querySelector("#author-input");
const saveBtn = document.querySelector(".save");

const signUpBtn = document.querySelector('.signUp-btn');

// function to create dom elements
const createElement = (tag, className, parent, text) => {
    const ele = document.createElement(tag);
    parent.appendChild(ele);
    ele.classList.add(className);
    if (tag === "img") {
        ele.src = text;
    } else {
        ele.textContent = text;
    }
    return ele;
};

// Create card function --------------------------------------------

const createCard = (data) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    
    const bookImg = document.createElement("img");
    bookImg.src = "https://images-na.ssl-images-amazon.com/images/I/41K90unQhYL._SX298_BO1,204,203,200_.jpg";
    bookImg.alt = "book";
    bookImg.classList.add("book-img");
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");
    const ownerPara = document.createElement("p");
    ownerPara.classList.add("username");
    ownerPara.textContent = `Owner: moo`;
    
    const editIcon = document.createElement("i");
    editIcon.classList.add("far", "fa-edit");
    
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash-alt");

    deleteIcon.addEventListener('click',()=>{
        fetch(`/deleteBook/${data.id}`,{
            method: 'DELETE',
        })
        .then((res) => res.json())
        .then((res) => window.location.reload())
        .catch((err) => console.log(err, 'err  in deleting a card'))
    })
    const bookNamePara = document.createElement("p");
    bookNamePara.classList.add("bookname");
    bookNamePara.textContent =`${data.title}`;
    const authorPara = document.createElement("p");
    authorPara.classList.add("auther");
    authorPara.textContent = `Auther: ${data.author}`;
    const statusPara = document.createElement("p");
    statusPara.classList.add("status");
    statusPara.textContent = `Status : ${data.status? "available": "Unavailable" }`;
    const borrowBtn = document.createElement("button");
    borrowBtn.classList.add("borrow", "btn");
    borrowBtn.textContent = "Borrow Book";
    infoContainer.appendChild(ownerPara);
    infoContainer.appendChild(editIcon);
    infoContainer.appendChild(deleteIcon);
    infoContainer.appendChild(bookNamePara);
    infoContainer.appendChild(authorPara);
    infoContainer.appendChild(statusPara);
    infoContainer.appendChild(borrowBtn);
    
    bookCard.appendChild(bookImg);
    bookCard.appendChild(infoContainer);
    const bookContainer = document.querySelector(".book-container");
    bookContainer.appendChild(bookCard);
    
    
    };


addBtn.addEventListener("click", () => {
    
    popupForm.classList.add("active");
    contentHider.classList.add("active");
    document.body.style.overflow = "hidden";
    
});

cancelBtn.addEventListener("click", () => {
   
    popupForm.classList.remove("active");
    contentHider.classList.remove("active");
    document.body.style.overflow = "auto";
});
