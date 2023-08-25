module.exports = function check(str, bracketsConfig) {
  // your solution
  let flag = true
  let br = ['[]', '{}', '||', '()', '12', '34', '56', '77', '88']
  for(let k = 0; k < bracketsConfig.length * 2; k++){


    for(let j = 0; j < bracketsConfig.length; j++){
      while(str.indexOf(bracketsConfig[j][0] + bracketsConfig[j][1]) != -1){
            for(let i = 1; i < str.length; i++){
                if(str[i - 1] === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]){
                    str = str.replace(bracketsConfig[j][0] + bracketsConfig[j][1], '')
                }
            }
      }
    }
  }
  if(str.length != 0){
      flag = false
  }
  return flag
}
