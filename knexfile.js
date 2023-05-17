const sharedConfig = {
    development: {
        client: 'sqlite3',
        useNullAsDefault: true, // needed for sqlite
        connection: {
            filename: './data/zoos.db3',
        },
        migrations: {
            directory: './data/migrations'
        },
        seeds: {
            directory: './data/seeds'
        },
        pool: {
            afterCreate: (conn, done) => {
                // runs after a connection is made to the sqlite engine
                conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
            },
        },
    },
};

module.exports = {
    development: {
        ...sharedConfig,

        connection: {
            filename: './data/cook_book.db3',
        },

        seeds: {
            directory: './data/seeds'
        },

        testing: {
            ...sharedConfig,
            connection: {
                filename: './data/cook_book.test.db3'
            }
        },
        prduction: {}
    },
};