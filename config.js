module.exports = {
    port: process.env.PORT || 8000,
    db: {
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 3306,
        database: process.env.DB_NAME || 'management',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || ''
    },
}