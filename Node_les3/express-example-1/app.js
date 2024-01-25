const express = require("express");

const app = express(); // app - наш вебсервіс (викликали express як функцію і отримали веб-сервіс)

app.get("/", (request, response) => {
  response.send("<h2>Home page</h2>");
}); //get - запит на головну сторінку

app.get("/contacts", (request, response) => {
  console.log(request.url); // адреса
  console.log(request.method); // метод
  response.send("<h2>Contacts page</h2>");
}); // get - запит на сторінку контактів

app.listen(3000, () => {
  console.log("Server running");
}); // запустилт веб-сервер
