var isLoggedIn = true;
var isEmailVerified = true ;
var cardInfo = true ;

// if ( isLoggedIn){
//     console.log("Logged in Successful");
//     if( isEmailVerified){
//         console.log("Email if verified");
//         if(cardInfo){
//             console.log("You can make purchase");
//         }
//     }
// }


if(isLoggedIn && isEmailVerified && cardInfo){
    console.log("Allow user to make a purchase");
} else {
    console.log("You are not allowed to make a purchase");
}

