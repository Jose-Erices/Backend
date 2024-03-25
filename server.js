import express from "express"
import productManager from "./data/fs/ProductManager.fs.js";
import userManager from "./data/fs/UserManager.fs.js";
/* import nombreModulo from "nombreModulo" */
/* import archivo from "/ruta/alArchivo/archivo.js" */


//server
const server = express()
//se crea el servidor
const port = 8080
const ready = () => console.log("server ready on port " + port);
server.listen(port, ready)
//se inicie/levante el servidor

//middlewares
server.use(express.urlencoded({ extended: true }))
//obligo a mi servidor a usar la función encargada de leer parámetros/consultas
//permite leer req.params y req.query



//router para ProductManager.fs.js y UserManager.fs.js
server.get("/", async (requerimientos, respuesta) => {
    try {
        return respuesta.status(200).json({
            response: "CODER API",
            success: true
        })
    } catch (error) {
        console.log(error);
        return respuesta.status(500).json({
            response: "CODER API ERROR",
            success: false
        })
    }
})
//server get ProductManager.fs.js 
server.get("/api/products", async (req, res) => {
    try {
        const { category, } = req.query
        const all = await productManager.read(category,)
        

        if (all.length !== 0) {
            return res.status(200).json({
                response: all,
                category,
                success: true
            })
        } else {
            const error = new Error("NOT FOUND query")
            error.statusCode = 404
            throw error
        }
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            response: error.message,
            success: false
        })
    }
})


//obtiene un parametro para ProductManager.fs.js 
server.get("/api/products/:pid", async (req, res) => {
    try {
        const { pid } = req.params
        const one = await productManager.readOne(pid)
        if (one) {
            return res.status(200).json({
                response: one,
                success: true
            })
        } else {
            const error = new Error("Datos de productos no encontrado")
            error.statusCode = 404
            throw error
        }
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            response: error.message,
            success: false
        })
    }
})


//obtiene dos parámetros para ProductManager.fs.js 
server.get("/api/products/:products/:category", async (req, res) => {
    try {
        const { products, category } = req.params
        const data = { products, category }
        const one = await productManager.create(data)
        return res.status(201).json({
            response: one,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            response: "ERROR",
            success: false
        })
    }
})

//get server para UserManager.fs.js

server.get("/api/users", async (req, res) => {
    try {
        const { role, } = req.query
        const all = await userManager.read(role,)
        

        if (all.length !== 0) {
            return res.status(200).json({
                response: all,
                role,
                success: true
            })
        } else {
            const error = new Error("NOT FOUND query")
            error.statusCode = 404
            throw error
        }
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            response: error.message,
            success: false
        })
    }
})


//un parametro para UserManager.fs.js
server.get("/api/users/:uid", async (req, res) => {
    try {
        const { uid } = req.params
        const one = await userManager.readOne(uid)
        if (one) {
            return res.status(200).json({
                response: one,
                success: true
            })
        } else {
            const error = new Error("Datos de usuario no encontrado ")
            error.statusCode = 404
            throw error
        }
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            response: error.message,
            success: false
        })
    }
})


//dos parámetros para UserManager.fs.js
server.get("/api/users/:users/:role", async (req, res) => {
    try {
        const { users, role } = req.params
        const data = { users, role }
        const one = await userManager.create(data)
        return res.status(201).json({
            response: one,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            response: "ERROR",
            success: false
        })
    }
})



