// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]
const batch1 = [valid1, invalid2, mystery1, mystery2]


// Add your functions below:
/*
The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. This function should NOT mutate the values of the original array.
To find out if a credit card number is valid or not, use the Luhn algorithm, a series of mathematical calculations used to validate certain identification numbers.
*/
function validateCred(array){
    const arrayTemp = array.slice()
    const lastDigit = array[array.length-1]
    arrayTemp.pop()                                         //Remove the last element from the array
    arrayTemp.reverse()                                     //Reverse the array (now without the last digit).
    for(let idx = 0; idx < arrayTemp.length; idx++) {       //Multiply the digits in odd positions (e.g. first digit, third, fifth…etc) by 2. If the resulting number is over 9, subtract 9 from the number.
        if(idx % 2 == 0 ) {
            isGreaterThan9(arrayTemp, idx)        
        } continue    
    }
    arrayTemp.push(lastDigit)
    arraySum = arrayTemp.reduce((a,b) => a+b, 0)            // sum of arrayTemp 
    if(arraySum % 10 == 0){
        return true 
    } return false
}
function isGreaterThan9(array1, idx){
    if(array1[idx]*2 > 9){
        array1[idx] = array1[idx] * 2 - 9    
    } else {
        array1[idx] = array1[idx] * 2
    }
}
/*
The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards
*/
function findInvalidCards(arrayOfArrays){
    const invalidCards = []
    for(array in arrayOfArrays) { 
        let creditCard =  validateCred(arrayOfArrays[array]) 
        if(creditCard == false){
            invalidCards.push(arrayOfArrays[array])
        } continue     
    }
    return invalidCards
}

function idInvalidCardCompanies(nestedArray){
    const firstNum = new Set() // The Set object lets you store unique values of any type
    // getting first numbers from all nested credit cards into Unique set
    for (idx in nestedArray){
        firstNum.add(nestedArray[idx][0])
    }
    const companies = [...firstNum] //converting between Set and Array

    for(idx in companies){
        if(companies[idx] == 3){
            companies[idx] = 'Amex'
        }
        else if(companies[idx] == 4){
            companies[idx] = 'Visa'
        }
        else if(companies[idx] == 5){
            companies[idx] = 'Mastercard'
        }
        else if(companies[idx] == 6){
            companies[idx] = 'Discover'
        }
        else {
            console.log('Company not found')
        }
    }
    return companies

}



// console.log(validateCred(valid1))    //output: true
// console.log(validateCred(valid2))    //output: true
// console.log(validateCred(valid3))    //output: true
// console.log(validateCred(valid4))    //output: true
// console.log(validateCred(valid5))    //output: true
// console.log(validateCred(invalid1))
// console.log(validateCred(invalid2))
// console.log(validateCred(invalid3))
// console.log(validateCred(invalid4))
// console.log(validateCred(invalid5))
// console.log(validateCred(mystery1))
// console.log(validateCred(mystery2))
// console.log(validateCred(mystery3))
// console.log(validateCred(mystery4))
// console.log(validateCred(mystery5))
//console.log(findInvalidCards(batch))
// console.log(findInvalidCards(batch1))
console.log(idInvalidCardCompanies(batch1))

