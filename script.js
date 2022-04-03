var books = [{title: 'Uma vida feliz', author: 'Js', pages: 35, read: false}, {title: 'Uma vida supimpa', author: 'Js', pages: 35, read: false}]

function Book(title, author, pages, read) {

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return `The ${title} book by ${author} has ${pages} pages. It has ${read ? 'been read' : 'not been read yet'}.`
    }
    
}

function addBookToLibrary() {
    


}

//Layout

const regButton = document.querySelector("button.inName")
const library = document.querySelector("main")
const lib = document.querySelector("div#lib")

regButton.addEventListener("click", () => {



    library.classList.remove("none")
})

books.forEach((book) => {
    let card = document.createElement("div")
    card.innerText = `${book.title}`
    lib.appendChild(card)
})