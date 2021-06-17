import { getConnection, querys, sql } from "../database";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    pool.query(querys.getAllOrders,(err, rows, fields)=>{
        pool.end();
        if (err) throw err;  
        res.json(rows[0]); 
    });
  } catch (error) {
    res.status(500).json('Error server sql');
  }
};