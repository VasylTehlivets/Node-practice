const books = require("./books");
const { nanoid } = require("nanoid");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allBooks = await books.getAll();
      return console.log(allBooks);
    case "getByID":
      const oneBook = await books.getById(id);
      return console.log(oneBook);
    case "add":
      const newBook = await books.add({ title, author });
      return console.log(newBook);
    case "updateById":
      const updateBook = await books.updateById(id, { title, author });
      return console.log(updateBook);
    case "deleteById":
      const deleteBook = await books.deleteById(id);
      return console.log(deleteBook);
  }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "getByID", id: "u9kgwNWGi3uUUwh0b8V49" });
// invokeAction({ action: "add", title: "Worm", author: "John C. McCrae" });
// invokeAction({action: "updateById", id: "pjyk9VYlMOiGxTDX1M4pY", title: "Ward", author: "John C. McCrae"});
// invokeAction({ action: "deleteById", id: "pjyk9VYlMOiGxTDX1M4pY" });
