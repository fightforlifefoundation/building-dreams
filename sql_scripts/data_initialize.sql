INSERT INTO School VALUES (1, 'test School Name', 'test Address');
INSERT INTO "USER" VALUES (1, 'test Teacher', 'test Teacher');
INSERT INTO "USER" VALUES (2, 'test SchoolAdmin', 'test SchoolAdmin');
INSERT INTO "USER" VALUES (3, 'test Student', 'test Student');
INSERT INTO "USER" VALUES (4, 'test Parent', 'test Parent');
INSERT INTO Teacher VALUES (1, 1, 1);

INSERT INTO UserType VALUES (1, 'testUserType', 'test Description');
INSERT INTO UserUserType VALUES (1, 1);
INSERT INTO SchoolAdmin VALUES (1, 2, 'SchoolAdmin');

INSERT INTO Parent VALUES (1, 'test Parent', 'test Address');

INSERT INTO Student VALUES (1, 3, 1, 1);
INSERT INTO ParentStudent VALUES (4, 1, 'Mother');
INSERT INTO TeacherSchoolGradeYear VALUES (1, 1, 1, '1', '2017');
INSERT INTO SchoolTeacherSchoolGradeyear VALUES (1, 1);

INSERT INTO RatingType VALUES (1, 'Test Rating Type', 4);
INSERT INTO Rating VALUES (1, 1, 'Test Rating Name', 3);
INSERT INTO Comment VALUES (1, 1, 3, 'Test Comment');
INSERT INTO Comment VALUES (2, 1, 3, 'Test Comment');
INSERT INTO Comment VALUES (3, 1, 3, 'Test Comment');
