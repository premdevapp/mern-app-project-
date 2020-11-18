import controller from "./product.controller.js";

module.exports = (router) => {
  router.get("/products", controller.getAll);
  router.get("/products/:id", controller.findById);
  router.post("/products", controller.create);
  router.put("/products/:id", controller.update);
  router.patch("/products/:id", controller.patch);
  router.delete("/products/:id", controller.delete);
};
