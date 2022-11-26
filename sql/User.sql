-- Active: 1669468700649@@127.0.0.1@5432@hotel@public
CREATE TABLE users
(  
    id int NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    created_at timestamp not null default CURRENT_TIMESTAMP,
    name VARCHAR(255) NOT NULL,
    age INT,
    email TEXT UNIQUE NOT NULL

);
COMMENT ON TABLE users
 IS '';
COMMENT ON COLUMN users
.name IS '';

-- delete record
DROP Table users

-- add user record 
INSERT INTO users (name,age,email)
VALUES
('user_3',22,'user_3@email.com')


--  alter TABLE drop column
ALTER TABLE users DROP COLUMN age;

--  alter TABLE add column
ALTER TABLE users ADD COLUMN age int;

-- select user WHERE
SELECT * FROM users WHERE id=3 and name='user_3'
 
-- select user IN
SELECT * FROM users WHERE id in (1,3)

-- select WHERE age > 20
SELECT * FROM users WHERE age > 10

-- select WHERE age > 20 but defau;t all null to  15
SELECT * FROM users WHERE coalesce(age,15) > 10

-- select WHERE age = null
SELECT * FROM users WHERE age is NULL


-- select WHERE age != null
SELECT * FROM users WHERE age is not NULL

-- update users age where age = null
UPDATE users 
set age = 20 where age is NULL


-- update users age where id = 1 increment age by 1
UPDATE users 
set age = age + 1 where id = 1


-- delete users row where id = 1 
UPDATE users 
where id = 1


--  select a users posts from posts table using joins
select name from users 
INNER JOIN posts on users.id = posts.creator_id 

--  select a users posts from posts table using joins 
-- with U alias for user an P alias for posts
select name from users U
INNER JOIN posts P on U.id = P.creator_id 
