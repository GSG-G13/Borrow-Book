"use strict";

var booksSection = document.querySelector(".book-container");
var addedBooksSection = document.querySelector(".added-books");
var borrowedBooksSection = document.querySelector(".borowed-books");
var logout = document.querySelector('.logout'); // for pop up window

var popupForm = document.querySelector(".add-form-container");
var addBtn = document.querySelector(".add-btn");
var cancelBtn = document.querySelector(".cancel");
var contentHider = document.querySelector(".content-hider"); // for add book  from pop up

var bookImgInput = document.querySelector("#book-img-input");
var bookNameInput = document.querySelector("#book-name-input");
var authorInput = document.querySelector("#author-input");
var saveBtn = document.querySelector(".save");
var signUpBtn = document.querySelector('.signUp-btn'); //signUpBtn.addEventListener('click',() => console.log("Hdsljfas"))
// function to create dom elements

var createElement = function createElement(tag, className, parent, text) {
  var ele = document.createElement(tag);
  parent.appendChild(ele);
  ele.classList.add(className);

  if (tag === "img") {
    ele.src = text;
  } else {
    ele.textContent = text;
  }

  return ele;
}; // Create card function --------------------------------------------


var createCard = function createCard(data) {
  var bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  var bookImg = document.createElement("img");
  bookImg.src = "https://images-na.ssl-images-amazon.com/images/I/41K90unQhYL._SX298_BO1,204,203,200_.jpg";
  bookImg.alt = "book";
  bookImg.classList.add("book-img");
  var infoContainer = document.createElement("div");
  infoContainer.classList.add("info-container");
  var ownerPara = document.createElement("p");
  ownerPara.classList.add("username");
  ownerPara.textContent = "Owner: moo";
  var editIcon = document.createElement("i");
  editIcon.classList.add("far", "fa-edit");
  var deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fas", "fa-trash-alt");
  deleteIcon.addEventListener('click', function () {
    fetch("/deleteBook/".concat(data.id), {
      method: 'DELETE'
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      return window.location.reload();
    })["catch"](function (err) {
      return console.log(err, 'err  in deleting a card');
    });
  });
  var bookNamePara = document.createElement("p");
  bookNamePara.classList.add("bookname");
  bookNamePara.textContent = "".concat(data.title);
  var authorPara = document.createElement("p");
  authorPara.classList.add("auther");
  authorPara.textContent = "Auther: ".concat(data.author);
  var statusPara = document.createElement("p");
  statusPara.classList.add("status");
  statusPara.textContent = "Status : ".concat(data.status ? "available" : "Unavailable");
  var borrowBtn = document.createElement("button");
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
  var bookContainer = document.querySelector(".book-container");
  bookContainer.appendChild(bookCard);
}; // pop up form ------------------------------------------


addBtn.addEventListener("click", function () {
  popupForm.classList.toggle("active");
  contentHider.classList.toggle("active");
  document.body.style.overflow = "hidden";
});
cancelBtn.addEventListener("click", function () {
  popupForm.classList.remove("active");
  contentHider.classList.remove("active");
  document.body.style.overflow = "auto";
});