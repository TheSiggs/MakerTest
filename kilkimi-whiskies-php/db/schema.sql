CREATE TABLE products (
                          sku VARCHAR(10) PRIMARY KEY,
                          name VARCHAR(100) NOT NULL,
                          price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE price_rules
(
    id                  INT AUTO_INCREMENT PRIMARY KEY,
    sku                 VARCHAR(10)                                   NOT NULL,
    type                ENUM ('discount', 'limit', 'bulk', 'freebie') NOT NULL,
    description         VARCHAR(255)                                  NOT NULL,
    discount_value      DECIMAL(10, 2) DEFAULT NULL,
    limit_value         INT            DEFAULT NULL,
    bulk_quantity       INT            DEFAULT NULL,
    bulk_price          DECIMAL(10, 2) DEFAULT NULL,
    freebie_sku         VARCHAR(10)    DEFAULT NULL,
    minimum_order_value DECIMAL(10, 2) DEFAULT NULL,
    FOREIGN KEY (sku) REFERENCES products (sku)
);

CREATE TABLE orders (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        total_price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE order_items (
                             id INT AUTO_INCREMENT PRIMARY KEY,
                             order_id INT NOT NULL,
                             sku VARCHAR(10) NOT NULL,
                             quantity INT NOT NULL,
                             price DECIMAL(10, 2) NOT NULL,
                             FOREIGN KEY (order_id) REFERENCES orders(id),
                             FOREIGN KEY (sku) REFERENCES products(sku)
);
