const express = require (`express`);
const bodyParser = require (`body-parser`);
const app = express();
let cors = require(`cors`); 
let mysql = require ("mysql");
let connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password: null,
    database : "loalkilo"
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
    let respuesta = {error : false, codigo : 200, mensaje : "Home"};
    response.send(respuesta);
});
/*Usuario: */
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
app.post("/users/register", function(request, response) {
    let params = new Array (String(request.body.name), String(request.body.password),String(request.body.email),
    String(request.body.dirección),String(request.body.ciudad),String(request.body.cp),String(request.body.foto),String(request.body.nickname));
    let sql = "INSERT INTO user (name, password, email, direccion, ciudad , cp, foto, nickname) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
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
app.post("/users/login", function(request, response) {
    let params = new Array (String(request.body.nickname), String(request.body.password));  
    let sql = "SELECT * FROM user WHERE nickname = ? AND password = ?";
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
app.put("/users", function(request, response) {
    let id = String(request.body.id);
    let params = new Array (String(request.body.name), String(request.body.password),String(request.body.email),
    String(request.body.direccion),String(request.body.ciudad),String(request.body.cp),String(request.body.foto)
    ,String(request.body.nickname), id);
    let sql = "UPDATE user SET name = ?, password = ?, email = ?, direccion = ?, ciudad = ?, cp = ?, foto = ?, nickname = ? WHERE user_id = ?"
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
/*Checkeado*/


/* Buscador */
app.post("/search/products", function(request, response) {
    let name = String (request.body.name);
    let params = new Array (name, name, name, name);
    let sql = "SELECT * FROM product WHERE name = ? OR descripcion = ? OR categoria = ? OR subcategoria = ?";
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
/*Checkeado */

/*Productos del usuario */
app.get("/products", function (request, response) {
    let id = String(request.query.id);
    let params = new Array (id);
    let sql = "SELECT * FROM product JOIN user ON (product.user_id = user.user_id) WHERE product.user_id = ?";
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
    String(request.body.nvaloraciones), String(request.body.suma), String(request.body.media), String(request.body.precio),
    String(request.body.categoria), String(request.body.subcategoria));
    let sql = "INSERT INTO product (name, descripcion, user_id, foto1, foto2, foto3, foto4, nvaloraciones, suma, media, precio, categoria, subcategoria) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
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
    String(request.body.nvaloraciones), String(request.body.suma), String(request.body.media), String(request.body.precio),
    String(request.body.categoria), String(request.body.subcategoria), String(request.body.id));
    let sql = "UPDATE product SET name = ?, descripcion = ?, user_id = ?, foto1 = ?, foto2 = ?, foto3 = ?, foto4 = ?, nvaloraciones = ?, suma = ?, media = ?, precio =?, categoria = ?, subcategoria = ? WHERE product_id = ?";
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
    let sql = "DELETE FROM product WHERE product_id = ?";
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
/*Checkeados */


/*Chat */
app.get("/chat", function(request, response) {
    let emisor = String(request.query.id1);
    let receptor = String(request.query.id2);
    let params = new Array (emisor, receptor);
    let sql = "SELECT * FROM chat WHERE emisor_id = ? AND receptor_id = ?";
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
app.post("/chat", function(request, response) {
    let params = new Array (String(request.body.id1), String(request.body.id2));
    let sql = "INSERT INTO chat (emisor_id, receptor_id) VALUES (?, ?)";
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Nuevo chat generado");
            console.log(result);
            response.send(result);
        };
    });
});
/*Checkeados y ya en servicio */


/*Mensajes: */
app.get("/mensajes", function(request, response) {
    let id = String(request.query.id);
    let params = new Array (id);
    let sql = "SELECT * FROM mensajes WHERE mensaje_id = ?";
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Solicitud de mensajes");
            console.log(result);
            response.send(result);
        };
    });
});
app.post("/mensajes", function(request, response) {
    let params = new Array (String(request.body.chat_id), String(request.body.user_id), String(request.body.date), String(request.body.mensaje));
    let sql = "INSERT INTO mensajes (chat_id, user_id, fecha, mensaje) VALUES (?, ?, ?, ?)";
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Nuevo mensajes");
            console.log(result);
            response.send(result);
        };
    });
});
/*Checkeado */

/*Favoritos: */
app.get("/favoritos", function(request, response) {
    let id = String(request.query.id);
    let params = new Array (id);
    let sql = "SELECT * FROM favourites WHERE favourites_id = ?";
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Solicitud de Favoritos");
            console.log(result);
            response.send(result);
        };
    });
})
app.post("/favoritos", function(request, response) {
    let params = new Array (String(request.body.user_id), String(request.body.product_id), String(request.body.favorito));
    let sql = "INSERT INTO favourites (user_id, product_id, favorito) VALUES (?, ?, ?)";
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Nuevo producto como Favorito");
            console.log(result);
            response.send(result);
        };
    });
});
app.put("/favoritos", function(request, response) {
    let params = new Array (String(request.body.favorito), String(request.body.user_id), String(request.body.product_id));
    let sql = "UPDATE favourites SET favorito = ? WHERE user_id = ? AND product_id = ?";
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Favoritos modificado");
            console.log(result);
            response.send(result);
        };
    });
});
/*Checkeado */

/*Renting: */
app.get("/products/ad", function(request, response) {
    let user_id = String(request.query.userid);
    let product_id = String(request.query.productid);
    let params = new Array (user_id, product_id);
    let sql = "SELECT * FROM renting WHERE user_id = ? AND product_id = ?";
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Solicitud de Renting");
            console.log(result);
            response.send(result);
        };
    });
});
app.post("/products/ad", function(request, response) {
    let params = new Array (String(request.body.duration), String(request.body.date), String(request.body.product_id), 
    String(request.body.user_id), String(request.body.alquilado), String(request.body.valorado));
    let sql = "INSERT INTO renting (duration, date, product_id, user_id, alquilado, valorado) VALUES (?, ?, ?, ?, ?, ?)";
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Nueva solicitud de Alquiler");
            console.log(result);
            response.send(result);
        };
    });
});
app.put("/products/ad", function(request, response) {
    let params = new Array (String(request.body.alquilado), String(request.body.valorado), String(request.body.renting_id));
    let sql = "UPDATE renting SET alquilado = ?, valorado = ? WHERE renting_id = ?";
    connection.query(sql, params, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Alquiler modificado");
            console.log(result);
            response.send(result);
        };
    });
});
/*Checkeado*/





app.listen(9191);