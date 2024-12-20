const accountId = 144553
let accuntEmail = "devan@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

//accountId = 2 // not allowed

accountEmail = "jsja@.com"
accountPassword = 2121121
accountCity = "darbhanga"

console.log(accountId);

/* prefer not to use var
because of issue in block scope and function scope
*/

console.table({accountId, accountEmail, accountPassword, accountCity,accountState}

)