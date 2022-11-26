
--  create new posts table 
CREATE TABLE posts(  
    id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    created_at timestamp not null default CURRENT_TIMESTAMP,
    title VARCHAR(255) NOT NULL,
    body TEXT DEFAULT '...',
    creator_id INT REFERENCES users(id) not NULL
);

-- add user record 
INSERT INTO posts 
(title,body,creator_id)
VALUES
('post title','body text body',3)

-- 
