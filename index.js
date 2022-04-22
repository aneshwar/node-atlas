const mongoose = require('mongoose')
// const dbUrl = "mongodb+srv://aneshwaryadav:FrDfnql29YQ9BMwX@cluster0.mulq8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const dbUrl = "mongodb://localhost:27017/newdb"

const connectionParam = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connect(dbUrl, connectionParam).then(() => {
    console.info("Connected the DB");
}).catch((e) => {
    console.log("Error:" , e);
})