	CREATE TABLE USERTYPE (	user_type_id serial PRIMARY KEY,	name varchar (100) NOT NULL,	description varchar (250) NOT NULL);
	CREATE TABLE "USER" (	user_id serial PRIMARY KEY,	username varchar (100) NOT NULL,	name varchar (150) NOT NULL);
	CREATE TABLE USERUSERTYPE (	user_id int, user_type_id int, FOREIGN KEY (user_id) REFERENCES "USER"(user_id), FOREIGN KEY (user_type_id) REFERENCES USERTYPE(user_type_id));
	CREATE TABLE SCHOOL(	school_id serial PRIMARY KEY,	name varchar (150) NOT NULL,	address varchar (250) NOT NULL);
	CREATE TABLE SCHOOLADMIN(	school_id int,	user_id int NOT NULL,	title varchar (250) NOT NULL, FOREIGN KEY (user_id) REFERENCES "USER"(user_id), FOREIGN KEY (school_id) REFERENCES SCHOOL(school_id));
	CREATE TABLE TEACHER(	teacher_id int PRIMARY KEY,	user_id int NOT NULL, school_id int NOT NULL, FOREIGN KEY (user_id) REFERENCES "USER"(user_id), FOREIGN KEY (school_id) REFERENCES SCHOOL(school_id));
	CREATE TABLE PARENT (	parent_id serial PRIMARY KEY,	name varchar (100) NOT NULL,	address varchar (250) NOT NULL);
	CREATE TABLE STUDENT(	student_id int PRIMARY KEY,	user_id int NOT NULL, school_id int NOT NULL, teacher_id int NOT NULL, FOREIGN KEY (user_id) REFERENCES "USER"(user_id), FOREIGN KEY (school_id) REFERENCES 		SCHOOL(school_id), FOREIGN KEY (teacher_id) REFERENCES TEACHER(teacher_id));
	CREATE TABLE PARENTSTUDENT (	parent_id int, student_id int, relationship varchar (250) NOT NULL, PRIMARY KEY(parent_id, student_id), FOREIGN KEY (parent_id) REFERENCES PARENT(parent_id), FOREIGN KEY (student_id) REFERENCES STUDENT(student_id));
	CREATE TABLE TEACHERSCHOOLGRADEYEAR(	TEACHERSCHOOLGRADEYEAR_id int PRIMARY KEY,	teacher_id int NOT NULL, school_id int NOT NULL, grade int NOT NULL, year int NOT NULL, FOREIGN KEY (school_id) REFERENCES 		SCHOOL(school_id), FOREIGN KEY (teacher_id) REFERENCES TEACHER(teacher_id));
	CREATE TABLE SCHOOLTEACHERSCHOOLGRADEYEAR(	student_id int NOT NULL, TEACHERSCHOOLGRADEYEAR int NOT NULL,PRIMARY KEY(student_id, TEACHERSCHOOLGRADEYEAR), FOREIGN KEY (student_id) REFERENCES STUDENT(student_id),  FOREIGN KEY (TEACHERSCHOOLGRADEYEAR) REFERENCES TEACHERSCHOOLGRADEYEAR(TEACHERSCHOOLGRADEYEAR_ID));
	CREATE TABLE RATINGTYPE (	rating_type_id serial PRIMARY KEY,	name varchar (100) NOT NULL, points int NOT NULL);
	CREATE TABLE RATING (	rating_id serial PRIMARY KEY, rating_type_id int not null, name varchar (100) NOT NULL, points int NOT NULL, FOREIGN KEY (rating_type_id) REFERENCES RATINGTYPE(rating_type_id));
	CREATE TABLE COMMENT (	comment_id serial PRIMARY KEY, rating_id int not null, user_id int not null, comment varchar (500) NOT NULL, FOREIGN KEY (rating_id) REFERENCES RATING(rating_id), FOREIGN KEY (user_id) REFERENCES "USER"(user_id));

-- Sample queries to test the database creation status:
-- SELECT table_name FROM information_schema.tables WHERE table_schema='public';
