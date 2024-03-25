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
            if (!data.category) {
                throw new Error("no existe categoria");
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

const productManager = new ProductManager();
export default productManager;