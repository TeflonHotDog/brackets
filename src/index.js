module.exports = function check(str, brackets) {
  // your solution
  if (str.trim().length===0 || brackets.length===0) return false;
  let stek = [];
  let first = {};
  for (let i = 0; i < brackets.length; i++) {
      if (brackets[i].length!==2) {
          return false;
      }
  }

  const arrStr = str.split('');
  for (let s = 0; s < arrStr.length; s++) {
      for (let i = 0; i < brackets.length; i++) {
          if (arrStr[s]===brackets[i][0]) {
              if (first[brackets[i][0]] == null) {
                  stek.push(brackets[i][0]);
                  if (brackets[i][0]===brackets[i][1]) { first[brackets[i][0]] = true; }
              } else {
                  delete first[brackets[i][0]];
              }

          }
          if (arrStr[s]===brackets[i][1]) {
              if (first[brackets[i][0]] == null) {
                  if (stek.length===0) return false;
                  let p = stek.pop();
                  if (p !== brackets[i][0]) return false;
              }
          }
      }
  }

  return stek.length===0;
}