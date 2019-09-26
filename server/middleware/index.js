const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect("mongodb://vvork:ahb11223@cluster0-shard-00-00-awx2g.mongodb.net:27017,cluster0-shard-00-01-awx2g.mongodb.net:27017,cluster0-shard-00-02-awx2g.mongodb.net:27017/profile_app?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority", {useNewUrlParser:true}, () => {
            console.log("Db is connected")
    }).catch((err) => {
        console.log("Db is not connected")
    })
}
