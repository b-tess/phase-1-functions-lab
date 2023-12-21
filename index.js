// Code your solution in this file!
const scuberHq = '42nd Street'

function distanceFromHqInBlocks(street) {
    let hq = scuberHq.slice(0, 2)
    hq = parseInt(hq)

    return Math.abs(street - hq)
}

function distanceFromHqInFeet(streetNo) {
    let distanceInFeet = distanceFromHqInBlocks(streetNo)

    distanceInFeet *= 264
    return distanceInFeet
}

function distanceTravelledInFeet(start, end) {
    return Math.abs((start - end) * 264)
}

function calculatesFarePrice(start, end) {
    const distanceInFeet = distanceTravelledInFeet(start, end)

    if (distanceInFeet <= 400) {
        return 0
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}
