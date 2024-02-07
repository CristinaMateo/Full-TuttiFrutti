const queries = require('../queries/events_sql.queries');
const pool = require('../config/db_pgsql');


//Get All

const getAllFruits = async () => {
    let client, result;
    try{
        client = await pool.connect()
        const data = await client.query(queries.getFruits)
        result = data.rows
    } catch(err){
        console.log(err);
        throw err;
    } finally{
        client.release();
    }
    return result
}