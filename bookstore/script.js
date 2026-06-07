function toggleHeart(icon)
{
    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
    icon.classList.toggle("hearted");
}
//book data
const books = [
    {
        title: "Java Programming",
        author: "Herbert Schildt",
        image : "resources/java.jpg.png",
        price : 450 ,
        category : "Programming"

    },

    {
        title : "C Programming",
        author :"Dennia Ritchie",
        image : "resources/c.jpg.png",
        price : 350 ,
        category : "Programming"
    },

    {
        title : "Python  Crash Course",
        author :"Eric Matthes",
        image : "resources/python.jpg.png",
        price : 400 ,
        category : "Programming"
    },
    {
        title : "Web Technologies",
        author : "Achyut Godbole and Atul Kahate", 
        image : "resources/web.jpg.png",
        price : 450 ,
        category : "Programming"
    },
    {
        title : "Digital Electronics",
        author : "M. Morris Mano",
        image : "resources/digi.jpg.png",
        price : 500,
        category : "Electronics"
    }
]

//function to display books

function displayBooks (bookArray, containerId)
{
const container = document.getElementById(containerId);
    bookArray.forEach (function (book)
    {
        //create a new div for each book
        const card = document.createElement("div");
        card.classList.add("book-card");
        
        //fill the card with html content

        card.innerHTML = `
        <img src = "${book.image}" alt ="${book.title}">
        <div class = "book-info">
            <p class = "book-title"> ${book.title} </p>
            <p class = "book-author"> ${book.author} </p>
            <div class = "book-bottom"> 
                 <span class = "book-price"> ₹${book.price} </span>
                 <i class = "fa-regular fa-heart fav-icon" onclick="toggleHeart(this)"></i>
            </div>
        </div>
       `;
        //add the card to the container to the page
        container.appendChild(card);
    });
}
displayBooks(books,"bookList");
displayBooks(books.slice(0,3),"continueReading");
displayBooks(books.slice(2,5),"yourList");
