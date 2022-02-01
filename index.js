// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
   return arr.slice(0,2)

} 

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = int => {
return function(fare){
return fare * int;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) =>{
    return returnFirstTwoDrivers(arrayOfDrivers);
}