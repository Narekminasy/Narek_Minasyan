import DBMysql from "./clients/db.mysql.js";

const migrate = async () => {
    try {
        await DBMysql.query(`
            CREATE TABLE IF NOT EXISTS app_users (
                id INT PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(50) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            ) ENGINE=InnoDB;
        `);
        console.log("--> app_users created");

        await DBMysql.query(`
            CREATE TABLE IF NOT EXISTS Customers (
                CustomerID INT PRIMARY KEY AUTO_INCREMENT,
                CustomerName VARCHAR(50) NOT NULL,
                City VARCHAR(50) NOT NULL,
                last_name VARCHAR(50)
            ) ENGINE=InnoDB;
        `);
        console.log("--> Customers created");

        await DBMysql.query(`
            CREATE TABLE IF NOT EXISTS directory_users (
                id INT PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(50) NOT NULL
            ) ENGINE=InnoDB;
        `);
        console.log("--> directory_users created");

        await DBMysql.query(`
            CREATE TABLE IF NOT EXISTS Persons (
                PersonID INT PRIMARY KEY AUTO_INCREMENT,
                FirstName VARCHAR(50) NOT NULL,
                LastName VARCHAR(50) NOT NULL
            ) ENGINE=InnoDB;
        `);
        console.log("--> Persons created");

        await DBMysql.query(`
            CREATE TABLE IF NOT EXISTS Orders (
                OrderID INT PRIMARY KEY AUTO_INCREMENT,
                OrderNumber INT NOT NULL,
                PersonID INT,
                CONSTRAINT fk_orders_person
                    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
                    ON DELETE CASCADE
                    ON UPDATE CASCADE
            ) ENGINE=InnoDB;
        `);
        console.log("--> Orders created");

    } catch (error) {
        console.error("migration error:", error);
    }
};

export default migrate;