CREATE TABLE restaurants(  
    id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    created_at timestamp not null default CURRENT_TIMESTAMP,
    name VARCHAR(255) NOT NULL,
    locatiom TEXT VARCHAR(255),
    price_range INT
    )
   

INSERT INTO restaurants 
(name,location,price_range)
VALUES
('eat 1','ohio 1',3)
