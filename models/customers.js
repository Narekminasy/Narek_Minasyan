import DbMysql from "../clients/db.mysql.js";

export async function create(data) {
    try {
        const sql = `
            INSERT INTO Customers
                (CustomerName, City, last_name)
            VALUES (?, ?, ?)
        `;

        const values = [
            data.CustomerName,
            data.City,
            data.last_name,
        ];

        const [result] = await DbMysql.query(sql, values);

        return {
            CustomerID: result.insertId,
            ...data,
        };
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function findAll() {
    try {
        const sql = `
            SELECT *
            FROM Customers
            ORDER BY CustomerID
        `;

        const [rows] = await DbMysql.query(sql);

        return rows;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function findSameCity() {
    try {
        const sql = `
            SELECT A.CustomerName AS cm1,
                   B.CustomerName AS cm2,
                   A.City         AS c
            FROM Customers A,
                 Customers B
            WHERE A.CustomerID <> B.CustomerID
              AND A.City = B.City
            ORDER BY c, cm1, cm2
        `;

        const [rows] = await DbMysql.query(sql);

        return rows;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function deleteCustomer(id) {
    try {
        const sql = `
            DELETE
            FROM Customers
            WHERE CustomerID = ?
        `;

        const [result] = await DbMysql.query(sql, [id]);

        return result.affectedRows;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export default {
    create,
    findAll,
    findSameCity,
    deleteCustomer,
};

