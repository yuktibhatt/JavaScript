var getUserRole = function(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break;
        case "subadmin":
            return `${name} is subadmin with all access to create and delete`;
            break;
        case "user":
            return `${name} is a user to consume content`
            break;
        case "test":
            return `${name} is testprep with access to create and delete tests`
            break;
    
        default:
            return `${name} is a default user`;
            break;
    }
}

console.log(getUserRole("Yukti", "user"));

// var getRole = getUserRole("Aaku", "admin");
// console.log(getRole);

