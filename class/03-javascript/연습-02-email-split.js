const email = "codecamp@gmail.com"
email.includes("@")
email.split("@")
//(2) ['codecamp', 'gmail.com']
email.split("@")[0]
//'codecamp'
email.split("@")[1]
//'gmail.com'
let userMail = email.split("@")[0]
let company = email.split("@")[1]
company 
//'gmail.com'
userMail
//'codecamp'
let maskingMail = []
let maskingMail.push(userMail[0])
//VM1926:1 Uncaught SyntaxError: Unexpected token '.'
maskingMail.push(userMail[0])
//1
maskingMail.push(userMail[1])
//2
maskingMail.push(userMail[2])
//3
maskingMail.push(userMail[3])
//4
maskingMail
//(4) ['c', 'o', 'd', 'e']
maskingMail.push("*")
maskingMail.push("*")
maskingMail.push("*")
maskingMail.push("*")
maskingMail
//(8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingMail.join("")
//'code****'
maskingMail.join("")+"@"+company
//'code****@gmail.com'
let result = maskingMail.join("")+"@"+company
result
//'code****@gmail.com//'