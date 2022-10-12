function Log(args) {
  console.log(args);
}
function isOperator(p) {
  if (p == "+" || p == "-" || p == "*" || p == "/") return true;
  else return false;
}
// function isPrecedence(i1, i2) {
//   if ((i1 == "+" && i2 == "-") || (i1 == "-" && i2 == "+")) return true;
//   if ((i1 == "*" && i2 == "/") || (i1 == "/" && i2 == "*")) return true;
//   return false;
// }

function isNumerical(n) {
  if (n >= 48 && n <= 57) return true;
  else return false;
}

function isAlphabetic(n) {
  if ((n >= 97 && n <= 122) || (n >= 65 && n <= 90)) return true;
  else return false;
}
function isPrecedence(i1, i2) {
  let j1, j2;
  switch (i1) {
    case "+":
      j1 = 1;
      break;
    case "-":
      j1 = 1;
      break;
    case "*":
      j1 = 2;
      break;
    case "/":
      j1 = 2;
      break;
    case "s":
      j1 = 2;
      break;
    case "c":
      j1 = 2;
      break;
    case "t":
      j1 = 2;
      break;
    default:
      break;
  }
  switch (i2) {
    case "+":
      j2 = 1;
      break;
    case "-":
      j2 = 1;
      break;
    case "*":
      j2 = 2;
      break;
    case "/":
      j2 = 2;
      break;
    case "s":
      j1 = 2;
      break;
    case "c":
      j1 = 2;
      break;
    case "t":
      j1 = 2;
      break;
    default:
      break;
  }

  if (j1 >= j2) return true;
  else return false;
}
