var user = "admin";

switch (user) {
    case "admin":
        console.log("You have the full access");
        break;
    case "subadmin":
        console.log("gets to create/delete courses");
        break;
    case "test":
        console.log("gets access to create/delete test");
        break;    
    case "user":
        console.log("gets access to consume content");
        break;
    default:
        console.log("Trail user");
        break;
}

