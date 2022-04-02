var books = []

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