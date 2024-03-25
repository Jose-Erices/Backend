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
            if (!data.role) {
                throw new Error("ingrese el role");
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
const usersManager = new UsersManager();
export default usersManager;