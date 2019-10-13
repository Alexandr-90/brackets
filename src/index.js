module.exports = function check(str, bracketsConfig) {
 
    let coupleArray = []; //this array should be empty if balance of brackets is ok)
    let strArray = str.split(''); //make an array from given string because array can be changed instead of string
    label: for (let i = 0; i <= strArray.length; i++) { // for each element in str
        for (let k = 0; k < bracketsConfig.length; k++) { // compare with bracketsConfig
            if (strArray[i] == (bracketsConfig[k][0])) { // compare element with opening bracket
                coupleArray.push(strArray[i]); // push to new array (this array should be empty if balance of brackets is ok)
                strArray[i] = 'stopThisMadness'; // change checked element to see which of them have been checked
                for ( let j = i + 1; j <= strArray.length; j = j + 2) { //for each next element in str compare element with closing bracket (+2 because if bracket..
                    if (strArray[j] == (bracketsConfig[k][1])) { // ..do not close immediately inside this brackets should be minimum two brackets(even number))
                        coupleArray.splice(0, 1); //delete one element from new array (this array should be empty if balance of brackets is ok)
                        strArray[j] = 'stopThisMadness';
                        continue label; // if we find openning and closing element we can stop this search and start a next one
                    }  
                }
                return false; // if we don't find a clossing bracket 
            }
            
        }
    
    } 
    for (let element of strArray) { //if we still have not checked elements in our array it means brackets balance is not ok
        if (element != 'stopThisMadness') {
            return false;
        }
      }
        
 return (coupleArray.length == 0); //this array should be empty if balance of brackets is ok)
};

