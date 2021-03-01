module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  while (str.includes('{}') || 
      str.includes('()') || 
      str.includes('[]') || 
      str.includes('||') ||
      str.includes('11') ||
      str.includes('22') ||
      str.includes('33') ||
      str.includes('44') ||
      str.includes('55') ||
      str.includes('66') ||
      str.includes('77') ||
      str.includes('88') ||
      str.includes('99')) {
    str = str.replace('{}', '')
      .replace('()', '')
      .replace('[]', '')
      .replace('||', '')
      .replace('11', '')
      .replace('22', '')
      .replace('33', '')
      .replace('44', '')
      .replace('55', '')
      .replace('66', '')
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
//       str.includes('11') ||
//       str.includes('22') ||
//       str.includes('33') ||
//       str.includes('44') ||
//       str.includes('55') ||
//       str.includes('66') ||
//       str.includes('77') ||
//       str.includes('88') ||
//       str.includes('99')) {
//     console.log(str);
//     str = str.replace('{}', '')
//       .replace('()', '')
//       .replace('[]', '')
//       .replace('||', '')
//       .replace('11', '')
//       .replace('22', '')
//       .replace('33', '')
//       .replace('44', '')
//       .replace('55', '')
//       .replace('66', '')
//       .replace('77', '')
//       .replace('88', '')
//       .replace('99', '');
//   }
//   return str === '';
// }

// console.log(isValid('(8{1[]7}8)'));

