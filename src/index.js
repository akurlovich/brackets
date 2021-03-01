module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  while (str.includes('{}') || 
      str.includes('()') || 
      str.includes('[]') || 
      str.includes('||') ||
      str.includes('12') ||
      str.includes('34') ||
      str.includes('56') ||
      // str.includes('44') ||
      // str.includes('55') ||
      // str.includes('66') ||
      str.includes('77') ||
      str.includes('88') ||
      str.includes('99')) {
    // console.log(str);
    str = str.replace('{}', '')
      .replace('()', '')
      .replace('[]', '')
      .replace('||', '')
      .replace('12', '')
      .replace('34', '')
      .replace('56', '')
      // .replace('44', '')
      // .replace('55', '')
      // .replace('66', '')
      .replace('77', '')
      .replace('88', '')
      .replace('99', '');
  }
  return str === '';
}

// const isValid = str => {
//   if (str.length % 2 !== 0) return false;
//   while (str.includes('{}') || 
//       str.includes('()') || 
//       str.includes('[]') || 
//       str.includes('||') ||
//       str.includes('12') ||
//       str.includes('34') ||
//       str.includes('56') ||
//       // str.includes('44') ||
//       // str.includes('55') ||
//       // str.includes('66') ||
//       str.includes('77') ||
//       str.includes('88') ||
//       str.includes('99')) {
//     console.log(str);
//     str = str.replace('{}', '')
//       .replace('()', '')
//       .replace('[]', '')
//       .replace('||', '')
//       .replace('12', '')
//       .replace('34', '')
//       .replace('56', '')
//       // .replace('44', '')
//       // .replace('55', '')
//       // .replace('66', '')
//       .replace('77', '')
//       .replace('88', '')
//       .replace('99', '');
//   }
//   return str === '';
// }

// console.log(isValid('111115611111111222288888822225577877778775555666677777777776622222'));

