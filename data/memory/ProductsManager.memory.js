//Clase Producto

class Product {
    constructor(id, title, photo, category, price, stock) {
      this.id = id;
      this.title = title;
      this.photo = photo;
      this.category = category;
      this.price = price;
      this.stock = stock;
    }
  }
  
  //Clase ProductoManager
  
  class ProductsManager {
    constructor() {
      this.products = [];
    }
  
    //agregar productos metodo push
    addProduct(product) {
      this.products.push(product);
    }
  
    // Remover productos metodo filter
    removeProduct(productId) {
      this.products = this.products.filter((product) => product.id !== productId);
    }
  
    //obtener productos metodo find
    getProductById(productId) {
      return this.products.find((product) => product.id === productId);
    }
  
    getAllProducts() {
      return this.products;
    }
  
    getTotalProducts() {
      return this.products.length + 1;
    }
  
    getTotalPrice() {
      return this.products.reduce((total, product,) => total + product.price, 0);
    }
  }
  
  // Ejemplo de uso
  const gestorDeProductos = new ProductsManager();
  
  // Agregar productos 
  
  gestorDeProductos.addProduct(
  
    new Product
      (1, "Master Dog", "/img/Master Dog.jpg", "Alimento de perro", 25000, 49)
  );
  gestorDeProductos.addProduct(
    new Product
      (2, "Dog Chow", "/img/Dog Chow.jpg", "Alimento de perro", 34000, 20)
  );
  
  gestorDeProductos.addProduct(
    new Product
      (3, "Pro Plan", "/img/Pro Plan.jpg", "Alimento de Cachorro", 33500, 20)
  );
  
  gestorDeProductos.addProduct(
    new Product
      (4, "Royal Canin", "/img/Royal Canin.jpg", "Alimento de Cachorro", 34000, 14)
  );
  
  gestorDeProductos.addProduct(
    new Product
      (5, "Happy Dog", "/img/Happy Dog.jpg", "Alimento Perro", 39000, 20)
  );
  gestorDeProductos.addProduct(
    new Product
      (6, "Cat Lover", "/img/Cat Lover.jpg", "Alimento de Gato", 29900, 13)
  );
  gestorDeProductos.addProduct(
    new Product
      (7, "Whiskas", "/img/Whiskas.jpg", "Alimento de Gato", 40000, 5)
  );
  gestorDeProductos.addProduct(
    new Product
      (8, "LoverGat", "/img/LoverGat.jpg", "Alimento de Gato", 38000, 9)
  );
  gestorDeProductos.addProduct(
    new Product
      (9, "Arena de Gato", "/img/Arena de Gato.jpg", "Accesorios", 15000, 2)
  );
  gestorDeProductos.addProduct(
    new Product
      (10, "Correa de perros", "/img/Correa de perros.jpg", "Accesorios", 30000, 15)
  );
  
  
  // Obtiene todos los productos
  console.log("Todos los productos:", gestorDeProductos.getAllProducts());
  
  // Obtiene el producto con ID 2
  console.log("Producto con ID 2:", gestorDeProductos.getProductById(2));
  
  // Elimina el producto con ID 1
  gestorDeProductos.removeProduct(1);
  console.log(
    "Después de eliminar el producto con ID 1:",
    gestorDeProductos.getAllProducts()
  );
  
  // Obtiene el número total de productoss y el precio total sin sumar la cantidad de stock 
  console.log("Total de productos:", gestorDeProductos.getTotalProducts());
  console.log("Precio total de los productos:", gestorDeProductos.getTotalPrice());
  