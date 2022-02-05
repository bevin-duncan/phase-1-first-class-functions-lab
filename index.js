// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
const newArray = (arr.slice(0, 2))
return newArray
}

const returnLastTwoDrivers= function(arr){
    const lastTwo = (arr.slice(-2))
    return lastTwo
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = mult => {
    return function(fare){
        return fare * mult 
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arrOfDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrOfDrivers)
} 
