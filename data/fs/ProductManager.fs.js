import fs from "fs";
import crypto from "crypto";

class ProductManager {
    constructor() {
        this.path = "./data/fs/files/product.json";
        this.init();
    }

    init() {
        const exists = fs.existsSync(this.path);
        if (!exists) {
            const stringData = JSON.stringify([], null, 2);
            fs.writeFileSync(this.path, stringData);
            console.log("ARCHIVO CREADO!");
        } else {
            console.log("ARCHIVO YA EXISTE!");
        }
    }

    async create(data) {
        try {
            if (!data.text) {
                throw new Error("INGRESE TEXT");
            } else {
                const product = {
                    id: crypto.randomBytes(12).toString("hex"),
                    title: data.title,
                    photo: data.photo,
                    category: data.category || "Alimento y accesorios de mascotas",
                    price: data.price,
                    stock: data.stock,
                    date: data.date || new Date(),
                };
                let all = await fs.promises.readFile(this.path, "utf-8");
                all = JSON.parse(all);
                all.push(product);
                all = JSON.stringify(all, null, 2);
                await fs.promises.writeFile(this.path, all);
                return product;
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async read(cat = "Alimento y accesorios de mascotas") {
        try {
            let all = await fs.promises.readFile(this.path, "utf-8");
            all = JSON.parse(all);
            cat && (all = all.filter(each => each.category === cat));
            return all;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async readOne(id) {
        try {
            let all = await fs.promises.readFile(this.path, "utf-8");
            all = JSON.parse(all);
            let product = all.find((each) => each.id === id);
            return product;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async destroy(id) {
        try {
            let all = await fs.promises.readFile(this.path, "utf-8");
            all = JSON.parse(all);
            let product = all.find((each) => each.id === id);
            if (product) {
                let filtered = all.filter((each) => each.id !== id);
                filtered = JSON.stringify(filtered, null, 2);
                await fs.promises.writeFile(this.path, filtered);
            }
            return product;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}
// crea la los productos con el node

async function set() {
    try {
        const productManager = new ProductManager();

      await product.create({
        title:"Master Dog",
        photo: "/img/Master Dog.jpg",
        category:"Alimento y accesorios de mascotas",
        price: 25000,
        stock: 29,
      });
      await product.create({
        title:"Dog Chow",
        photo: "/img/Dog Chow.jpg",
        category:"Alimento y accesorios de mascotas",
        price: 34000,
        stock: 49,
      });
      await product.create({
        title:"Pro Plan",
        photo: "/img/Pro Plan.jpg",
        category:"Alimento y accesorios de mascotas",
        price:  33500,
        stock: 20,
      });
      await product.create({
        title: "Royal Canin",
        photo: "/img/Royal Canin.jpg",
        category:"Alimento y accesorios de mascotas", 
        price: 33500,
        stock: 14,
      });
      await product.create({
        title:"Happy Dog",
        photo: "/img/Happy Dog.jpg",
        category:"Alimento y accesorios de mascotas",
        price: 39000,
        stock: 20,
      });
      await product.create({
        title:"Cat Lover",
        photo: "/img/Cat Lover.jpg",
        category:"Alimento y accesorios de mascotas",
        price: 29900,
        stock: 13,
      });
      await product.create({
        title:"Whiskas",
        photo: "/img/Whiskas.jpg",
        category:"Alimento y accesorios de mascotas",
        price: 38000,
        stock: 9, 
      });
      await product.create({
        title:"Mascotin",
        photo: "/img/Master Dog.jpg",
        category:"Alimento y accesorios de mascotas",
        price: 34000,
        stock: 49,
      });
      await product.create({
        title:"LoverGat",
        photo: "/img/LoverGat.jpg",
        category:"Alimento y accesorios de mascotas",
        price: 38000,
        stock: 9,
      });
      await product.create({
        title:"Arena de Gato",
        photo: "/img/Arena de Gato.jpg",
        category:"Alimento y accesorios de mascotas",
        price: 15000,
        stock: 2,
      });
      await product.create({
        title:"correa de perro",
        photo: "/img/correa de perro.jpg",
        category:"Alimento y accesorios de mascotas",
        price: 15000,
        stock: 2,
      });
      await product.create({
        title:"Hueso de perro",
        photo: "/img/Hueso de perro.jpg",
        category:"Alimento y accesorios de mascotas",
        price: 15000,
        stock: 2,
      });
      await product.create({
        title:"Ropa de perro",
        photo: "/img/Ropa de perro.jpg",
        category:"Alimento y accesorios de mascotas",
        price: 7000,
        stock: 20,
      });
      await product.create({
        title:"Premio de perro",
        photo: "/img/Premio de perro.jpg",
        category:"Alimento y accesorios de mascotas",
        price: 5000,
        stock: 80,
      });
      await product.create({
        title:"Cama de perro",
        photo: "/img/Cama de perro.jpg",
        category:"Alimento y accesorios de mascotas",
        price: 10000,
        stock: 67,
      });
      await product.create({
        title:"Cama de Gato",
        photo: "/img/Cama de Gato.jpg",
        category:"Alimento y accesorios de mascotas",
        price: 9000,
        stock: 30,
      });
      await product.create({
        title:"Premio de Gato",
        photo: "/img/Premio de Gato.jpg",
        category:"Alimento y accesorios de mascotas",
        price: 17000,
        stock: 20,
      });
      await product.create({
        title:"Bañera de Gato",
        photo: "/img/Bañera de gato.jpg",
        category:"Alimento y accesorios de mascotas",
        price: 10000,
        stock: 5,
      });
      await product.create({
        title:"Bañera de perro",
        photo: "/img/Bañera de perro.jpg",
        category:"Alimento y accesorios de mascotas",
        price: 12000,
        stock: 10,
      });
      await product.create({
        title:"Arena de Gato",
        photo: "/img/Arena de Gato.jpg",
        category:"Alimento y accesorios de mascotas",
        price: 15000,
        stock: 2,
      });
    
      await product.create({
        title:"Correa de perros",
        photo: "/img/Correa de perros.jpg",
        category:"Alimento y accesorios de mascotas",
        price: 30000,
        stock: 15,
      });
  
   
      await productManager.readOne("d0f982cafb2ef32acb24fad2"); // Ajusta el ID según tus necesidades
        // await productManager.readOne(third.id); // Ajusta según tus necesidades
        // await productManager.destroy(third.id); // Ajusta según tus necesidades
    } catch (error) {
        console.log(error);
    }
}

set();

const productManager = new ProductManager();
export default productManager;