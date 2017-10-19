module.exports = {
        validateUsernamePassword: function (username, password, user) {
            //DB call here
            return {username: username, id: 1, exists: true};
        },

        getUserInfo: function(id){
            //make db call here
            if(id = 1){
                return {username: 'testUser', id: 1, role: 'admin'};
            }else{
                return {};
            }
        },

        hasAccess: function(id, action, objectID){
            //id = id of logged in user
            //action = desired action
            //objectID = student / class in which action would take place
            //May need to add more layers of objects if multiple schools or possibly multiple classes

            //admin always true
            //View:
            //teacher - view all all students in their class
            //student - view themselves 1:1
            //parent - view their children 1:N
            //Edit:
            //teacher - edit any student within school




        }
    };