function solution(str, ending){
    // TODO: complete
  }
  
  /*PREP
  2 perameteres both strings
  Both strings
  Could be any case
  
  RETURN:
  True if second string parameter contained athe the end of the first srt parameter
  false is second string parameter not at end of the first string parameter
  
  EXAMPLES:
  solution('abc', 'bc') // returns true
  solution('abc', 'd') // return false
  solution('aabBCa', 'bca')// returns true
  solution('abcde', 'bcd')// return false
  
  PSEUDO CODE:
  Convert both to same case lowercase
  */
  
  
  // solution 1
  function solution(str, ending){
    return str.indexOf(ending, str.length - ending.length) !== -1;
  }
  
  // // solution 2
  // function solution(str, ending){
  //   return str.substr(-ending.length) === ending;
  // }
  
  // // solution 3
  // function solution(str, ending){
  //   return str.endsWith(ending);
  // }
  
  // function end(str, target) {
  //     return target === str.substr(str.length - target.length);
  // }
  
  // function end(str, target) {
  //     return target.length > 0 && target === str.substr(str.length - target.length);
  // }