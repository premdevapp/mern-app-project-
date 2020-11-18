const axios = require("axios");
const URL = "http://localhost:8000/productapi/products";

function getProucts() {
  axios
    .get(URL)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

function getProuct(id) {
  axios
    .get(URL + "/" + id)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

function saveProduct() {
  const product = {
    name: "Samsung",
    price: 200,
  };
  axios
    .post(URL, product)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

function updateProduct(id) {
  const product = {
    name: "Samsung",
    price: 250,
  };
  axios
    .put(URL + "/" + id, product)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

function partialUpdateProduct(id) {
  const product = {
    price: 200,
  };
  axios
    .patch(URL + "/" + id, product)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

function deleteProduct(id) {
  const product = {
    price: 200,
  };
  axios
    .delete(URL + "/" + id, product)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}

/*
work
*/

//saveProduct();

//getProucts();

//updateProduct("5fb50862e1bd6f7770a4e41b");

//partialUpdateProduct("5fb50862e1bd6f7770a4e41b");

//getProuct("5fb50862e1bd6f7770a4e41b");

deleteProduct("5fb50862e1bd6f7770a4e41b");
