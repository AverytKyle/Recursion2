/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


function reverse(str) {
/*  debugger
  let strNew = "";
  if (str === ""){
    return str;
  }

  let n = str.length - 1;
  if (n < 0) { 
    return strNew;

  }
    
  strNew = strNew + str.charAt(n);
  n--;
  return strNew.charAt(n) + reverse(str);*/

  if (str === ""){
    return str;
  }

  return reverse(str.substring(1)) + str.charAt(0);
}
console.log(reverse("house"));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
