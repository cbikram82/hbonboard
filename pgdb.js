const { Client } = require('pg');

exports.handler = async (event) => {
    const client = new Client({
        host: 'sbadb-1.c8ikdnliwh3x.us-east-1.rds.amazonaws.com',
        port: 5432,
        user: 'sbapostgres',
        password: 'Ruhi0707#',
        database: 'postgres',
    });

    await client.connect();

    const query = 'SELECT * FROM hbuser';
    const result = await client.query(query);
    console.log("done select stmt");
    await client.end();

    const fieldValue = result.rows[0];
    console.log(`Field value: ${fieldValue}`);

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `Field value: ${fieldValue}`
        })
    };
};