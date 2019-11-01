/* 1. Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. 
You don't need to validate the form of the Roman numeral.

        Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

        Example:

            solution('XXI'); // should return 21

        Help:

            Symbol    Value
            I          1
            V          5
            X          10
            L          50
            C          100
            D          500
            M          1,000 
                             
   */   

function romanToDecimal(roman) {
	if(typeof(roman) !== "string") {
		return "Please input a valid string and try again !"
	}else {
		var romanLong = roman.length;
	var romanObject = {"I": 1, "V": 5,"X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};
	var decimalValue = 0;
	for(let i =0; i < roman.length; i++) {
			for(var key in romanObject) {
				if(roman[i] === key) {
					decimalValue += romanObject[key]; 
				}
			}
	}

	return decimalValue;
	}
	
};
/*

    2. Complete the method/function so that it converts dash/underscore delimited words into
     camel casing. The first word within the output should be capitalized only if the original word 
     was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
        Examples:

        toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

        toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
    */

    function toCamelCase(str) {
    	var my = str;
			var myStr = [];
			var j = 1; 


			myStr.push(str[0].toUpperCase());

			while(j < str.length - 1) {
				if((str[j] === "_") || (str[j] === "-")) {
					myStr.push(my[j + 1].toUpperCase());
					j += 2;
				}else {
					myStr.push(str[j]);
					j++;
			}

				
				}
				myStr.push(str[str.length - 1]);
				return myStr.join('');
    }




    /*
    3. In this kata you will create a function that takes a list of non-negative
     integers and strings and returns a new list with the strings filtered out.
        Example

            filter_list([1,2,'a','b']) == [1,2]
            filter_list([1,'a','b',0,15]) == [1,0,15]
            filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

	function filter_list(array) {
		var filtered = [];

		for(let i = 0; i < array.length; i++) {
			if(typeof(array[i]) === "number" && array[i] >= 0) {
				filtered.push(array[i]);
			}
		}
		return filtered;
	}