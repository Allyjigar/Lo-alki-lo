const express = require (`express`);
const bodyParser = require (`body-parser`);
const app = express();
let cors = require(`cors`); 
let mysql = require ("mysql");
let connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: null,
    database : "Angular"
});
connection.connect(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Conexión correcta");
    }
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

function checkRespuesta(err, result) {
    if (err) {
        console.log (err);
    } else {
        console.log(result);
        response.send(result);
    }
};
app.get("/", function(request, response) {
    let respuesta = {error : false, codigo : 200, mensaje : "Prueba de conexión"};
    response.send(respuesta);
});

app.get("/users", function(request, response) {
    let id = String(request.query.id);
    let params = new Array (id);
    let sql = "SELECT * FROM user WHERE user_id = ?";
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Get de Usuario");
            console.log(result);
            response.send(result);
        };
    });
});
app.post("/user/register", function(request, response) {
    let params = new Array (String(request.body.name), String(request.body.password),String(request.body.email),
    String(request.body.dirección),String(request.body.ciudad),String(request.body.cp),String(request.body.foto));
    let sql = "INSERT INTO user (name, password, email, dirección, ciudad , cp, foto) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Nuevo Usuario");
            console.log(result);
            response.send(result);
        };
    });
});
/*app.post("/user/login", function(request, response) {
    let params = new Array (String(request.body.name), String(request.body.password));   EL LOGIN NO TENDRÍA QUE SER GET EN VEZ DE POST??
    let sql = ""
})*/
app.put("/user", function(request, response) {
    let id = String(request.query.id);
    let params = new Array (String(request.body.name), String(request.body.password),String(request.body.email),
    String(request.body.dirección),String(request.body.ciudad),String(request.body.cp),String(request.body.foto), id);
    let sql = "UPDATE user SET name = ?, password = ?, email = ?, dirección = ?, ciudad = ?, cp = ?, foto = ? WHERE user_id = ?"
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Actualización de Usuario");
            console.log(result);
            response.send(result);
        };
    });
});
/* Buscador */
app.get("/products", function(request, response) {
    let name = String (request.query.name);
    let params = new Array (name);
    let sql = "SELECT * FROM product WHERE name = ?";
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Solicitud de producto por el Buscador");
            console.log(result);
            response.send(result);
        };
    });
});

/*Productos del usuario */
app.get("/products", function (request, response) {
    let id = String(request.query.id);
    let params = new Array (id);
    let sql = "SELECT * FROM product JOIN user ON (product.user_id = user.user_id) WHERE user_id = ?";
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Solicitud de productos de un Usuario");
            console.log(result);
            response.send(result);
        };
    });
});
app.post("/products", function(request, response) {
    let params = new Array (String(request.body.name), String(request.body.description), String(request.body.user_id),
    String(request.body.foto1), String(request.body.foto2), String(request.body.foto3), String(request.body.foto4),
    String(request.body.categoria), String(request.body.subcategoria));
    let sql = "INSERT INTO product (name, description, user_id, foto1, foto2, foto3, foto4, categoria, subcategoria) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Nuevo producto cargado");
            console.log(result);
            response.send(result);
        };
    });
});
app.put("/products", function(request, response) {
    let params = new Array (String(request.body.name), String(request.body.description), String(request.body.user_id),
    String(request.body.foto1), String(request.body.foto2), String(request.body.foto3), String(request.body.foto4),
    String(request.body.categoria), String(request.body.subcategoria));
    let sql = "UPDATE product SET name = ?, description = ?, user_id = ?, foto1 = ?, foto2 = ?, foto3 = ?, foto4 = ?, categoria = ?, subcategoria = ?";
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Actualización de producto");
            console.log(result);
            response.send(result);
        };
    });
});
app.delete("/products", function(request, response) {
    let id = String (request.body.id);
    let params = new Array(id);
    let sql = "DELETE FROM poduct WHERE product_id = ?";
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Se ha eliminado un producto");
            console.log(result);
            response.send(result);
        };
    });
});

/*Chat */
app.get("/chat", function(request, response) {
    let emisor = String(request.query.id1);
    let receptor = String(request.query.id2);
    let params = new Array (emisor, receptor);
    let sql = "SELECT chat_id FROM chat WHERE emisor_id = ? AND receptor_id = ?";
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Solicitud de chat_id");
            console.log(result);
            response.send(result);
        };
    });
});


app.listen(9191);