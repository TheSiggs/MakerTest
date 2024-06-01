INSERT INTO products (sku, name, price)
VALUES ('DEAN', 'Deanston 12 years old', 99.99),
       ('KIL', 'Kilkerran 12 years old', 89.99),
       ('ARR', 'Arran 10 years old', 79.99),
       ('JOHN', 'Johnnie Walker Green Label', 75.99);

INSERT INTO specials (sku, type, description, discount_value, limit_value, bulk_quantity, bulk_price, freebie_sku,
                      minimum_order_value)
VALUES ('JOHN', 'discount', '4-for-3 offer', 75.99, NULL, NULL, NULL, NULL, NULL),
       ('KIL', 'limit', 'One bottle per order', NULL, 1, NULL, NULL, NULL, NULL),
       ('ARR', 'bulk', 'Bulk buy special - price drops to $75 each for 12 or more', NULL, NULL, 12, 75.00, NULL, NULL),
       ('DEAN', 'freebie', 'One free bottle if order exceeds $500', NULL, NULL, NULL, NULL, 'DEAN', 500.00);


