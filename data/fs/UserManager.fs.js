import fs from "fs";
import crypto from "crypto";

class UsersManager {
    constructor() {
        this.path = "./data/fs/files/users.json";
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
                const users= {
                    id: crypto.randomBytes(12).toString("hex"),
                    photo: data.photo,
                    email: data.email,
                    password: data.password,
                    role: data.role || "Controller",
                    date: data.date || new Date(),
                };
                let all = await fs.promises.readFile(this.path, "utf-8");
                all = JSON.parse(all);
                all.push(users);
                all = JSON.stringify(all, null, 2);
                await fs.promises.writeFile(this.path, all);
                return users;
            }
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async read(rol = "Controller") {
        try {
            let all = await fs.promises.readFile(this.path, "utf-8");
            all = JSON.parse(all);
            rol && (all = all.filter(each => each.role === rol));
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
            let users = all.find((each) => each.id === id);
            return users;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async destroy(id) {
        try {
            let all = await fs.promises.readFile(this.path, "utf-8");
            all = JSON.parse(all);
            let users = all.find((each) => each.id === id);
            if (users) {
                let filtered = all.filter((each) => each.id !== id);
                filtered = JSON.stringify(filtered, null, 2);
                await fs.promises.writeFile(this.path, filtered);
            }
            return users;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}
// creación del archivo con el node 

async function set() {
    try {
        const usersManager = new UsersManager();

      await gestorDeUsuarios.create({
        photo: "https://img.freepik.com/foto-gratis/retrato-mujer-casual-sonriente_171337-4168.jpg",
        email: "fabiola.erices@gmail.com",
        password: "FErices39deqwed",
        role: "Controller",
      });
      await gestorDeUsuarios.create({
        photo: "https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg",
        email: "jose.erices.gonzalez@gmail.com",
        password: "12345678a",
        role: "Controller"

      });
      await gestorDeUsuarios.create({
        photo: "https://blog.hubspot.es/hubfs/media/buyerpersona.jpeg",
        email: "carolina.pino.navarro@gmail.com",
        password: "98765432aedw",
        role: "Controller"
      });
      await gestorDeUsuarios.create({
        photo: "https://s3.abcstatics.com/media/summum/2021/10/01/maxi_iglesias-kU2E--1248x698@abc.jpeg",
        email: "lorenzo.guarda@gmail.com",
        password: "lore23678edd",
        role: "Controller",
        
      });
      await gestorDeUsuarios.create({
        photo: "https://s3.abcstatics.com/media/summum/2021/10/01/maxi_iglesias-kU2E--1248x698@abc.jpeg",
        email: "alejandroM@gmail.com",
        password: "Alejan2eqdwdc",
        role: "Controller",
      });

        await usersManager.readOne("d216d6d9b20f916f3f29893"); // Ajusta el ID según tus necesidades
        await usersManager.readOne(third.id); // Ajusta según tus necesidades
        await usersManager.destroy(third.id); // Ajusta según tus necesidades
    } catch (error) {
        console.log(error);
    }
}

set();

const userManager = new UsersManager();
export default userManager;