let string = "batman"
let temp = ""

for( let i = string.length -1 ;i >=0; i--){
  temp += string[i]
}
console.log(temp)
if(string == temp){
  console.log("both are same")
  console.log("palindrome")
}
else{
  console.log("both are not same")
  console.log("not palindrome")
}