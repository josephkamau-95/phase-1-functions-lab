// Code your solution in this file!
function distanceFromHqInBlocks(x){
    const blockDistance = x - 42
    if (blockDistance < 0){
        return blockDistance * -1
    }
    else {
        return blockDistance
    }
}
console.log(distanceFromHqInBlocks(43))
console.log(distanceFromHqInBlocks(50))
console.log(distanceFromHqInBlocks(34))

function distanceFromHqInFeet(x){
    const feetDistance = (x-42) * 264
    if (feetDistance < 0){
        return feetDistance * -1
    }
    else {
        return feetDistance
    }
}
console.log(distanceFromHqInFeet(43))
console.log(distanceFromHqInFeet(50))
console.log(distanceFromHqInFeet(34))

function distanceTravelledInFeet(a, b){
    const distanceInFeet = (b - a) * 264
    if (distanceInFeet < 0){
        return distanceInFeet * -1
    }
    else {
        return distanceInFeet
    }
}
console.log(distanceTravelledInFeet(43, 48))
console.log(distanceTravelledInFeet(50, 60))
console.log(distanceTravelledInFeet(34, 28))


function calculatesFarePrice (start, destination){
    const feetPerBlock = 264
    const distanceTravelled = Math.abs(destination - start) * feetPerBlock

    if (distanceTravelled > 2500){
        return "cannot travel that far"
    }
    else if (distanceTravelled > 2000){
        return 25
    }
    else if (distanceTravelled <= 400){
        const fare = 0
        return fare
    }
    else {
        return ((distanceTravelled - 400) * 0.02)
    }
}
console.log(calculatesFarePrice(43, 44))

// const calculatesFarePrice = (start, destination) => {
//     const cumulativeFeetTravelled = ((destination - start) * 264)
//     const totalFeetTravelled = ((destination - start) * 264) - 400
//     // const cumulativeFeetTravelled = totalFeetTravelled + 400
//     const farePrice = totalFeetTravelled * 0.02
//     if (totalFeetTravelled > 400){
//         return farePrice;
//     }
//     else if (cumulativeFeetTravelled > 0 && cumulativeFeetTravelled <= 400){
//         return 0
//     }
//     else if (totalFeetTravelled < 0){
//         const feetTravelled = ((destination - start) * -264) - 400
//         return feetTravelled * 0.02;
//     }
//     // else if (totalFeetTravelled >= 0 && totalFeetTravelled <= 400){
//     //     return 0;
//     // }
//     else if (totalFeetTravelled > 1700 && cumulativeFeetTravelled <= 2500){
//         return 25;
//     }
//     else if (cumulativeFeetTravelled > 2500){
//         return "cannot travel that far"
//     }
//     else {
//         return 5
//     }
// }
// console.log(calculatesFarePrice(43, 44))
// console.log(calculatesFarePrice(34, 32))
// console.log(calculatesFarePrice(50, 58))
// console.log(calculatesFarePrice(34, 24))