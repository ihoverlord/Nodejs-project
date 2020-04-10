const env = {
        PORT: '3200',
        MONGO_URL: 'mongodb+srv://pushkar:11POo6ViA0pesfPH@cluster0-jpixp.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
        MODE: process.env.MODE !== 'prod' ? 'dev' : 'prod'
}

module.exports = env