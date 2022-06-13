const { Client, Repository, Schema, Entity } = require('redis-om');
const express = require('express');
const router = express.Router();
/* pulls the Redis URL from .env */
const url = process.env.REDIS_URL
const client = new Client();// Agregar un nuevo cliente a la base de datos

async function connect() {// abre la conexión con Redis; el link de conexión  se encuentra en el file llamado 
    if (!client.isOpen()) {// .env.local que contiene el identificador unico de la base en la nube , el puerto y el usuario 
        await client.open('redis://default:93hysaHyPYVTQjVvkliL6N2ndr335qP0@redis-11133.c283.us-east-1-4.ec2.cloud.redislabs.com:11133');
    }
}

class Comment extends Entity { }

let schema = new Schema(Comment, {
    correoElectronico: { type: 'string' },
    post:{type:"string"},
    mensaje: { type: 'string' }
},
    {
        dataStructure: 'JSON'
    }

)

// let repository = new Repository(schema,client);
//const repository = client.fetchRepository(schema)

router.post("/", async (req, res) => {
    const client = await new Client().open('redis://default:93hysaHyPYVTQjVvkliL6N2ndr335qP0@redis-11133.c283.us-east-1-4.ec2.cloud.redislabs.com:11133');
    const repository = client.fetchRepository(schema)
    let comment = repository.createEntity(req.body);
    await repository.save(comment);
    res.status(200).json(comment);

})

router.get("/", async (req, res) => {
   // const client = await new Client().open('redis://default:93hysaHyPYVTQjVvkliL6N2ndr335qP0@redis-11133.c283.us-east-1-4.ec2.cloud.redislabs.com:11133');
    const repository = client.fetchRepository(schema)
    //console.log(repository);
   // await repository.createIndex();
   //await repository.dropIndex()
    let comments = repository.search().return.all();
    console.log('a'+JSON.stringify( comments));

    res.status(200).json(comments);
})


module.exports = router;

