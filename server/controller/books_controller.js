let books = []
let id = 0

module.exports = {
    read: (req, res) => {
        res.status(200).send(books)
    },

    create: (req, res) => {
        const {title, author} = req.body
        let newBook = {
            id: id,
            title: title,
            author: author
        }
        books.push(newBook)
        id++
        res.status(200).send(books)
    },

    update: (req, res) => {
        const {id} = req.params
        const {title, author} = req.body
        for (let i = 0; i < books.length; i++){
            if (+books[i].id == +id) {
                books[i] = {
                    id: books[i].id,
                    title: title,
                    author: author
                }
            }
        }
        res.status(200).send(books)
    },

    delete: (req, res) => {
        const {id} = req.params
        for (let i = 0; i < books.length; i++){
            if (books[i].id == id) {
                books.splice(i, 1)
            }
        }
        res.status(200).send(books)
    }

}