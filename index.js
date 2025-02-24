// function distanceFromHqInBlocks(boardingpoint){
//     if(boardingpoint>43){
//         return boardingpoint-42;
//     }else{
//         return 42- boardingpoint;
//     }
// }
// function distanceFromHqInFeet(blockNumber) {
//     const distanceInBlocks = distanceFromHqInBlocks(blockNumber);
//     const feetPerBlock = 264; 
//     return distanceInBlocks * feetPerBlock;
//   }
//   function distanceTravelledInFeet(startBlock, destinationBlock) {
//     const distanceInBlocks = distanceFromHqInBlocks(startBlock) - distanceFromHqInBlocks(destinationBlock);
//     const feetPerBlock = 264;
//     return Math.abs(distanceInBlocks) * feetPerBlock;
//   }
//   function calculatesFarePrice(startBlock, destinationBlock) {
//     const distanceInFeet = distanceTravelledInFeet(startBlock, destinationBlock);
//     const freeDistance = 400; 
//     const pricePerFoot = 0.02; 
  
//     if (distanceInFeet <= freeDistance) {
//       return 0; 
//     } else if (distanceInFeet <= 2000) {
//       const chargeableDistance = distanceInFeet - freeDistance;
//       return chargeableDistance * pricePerFoot;
//     } else {
//       return 25; 
//     }
//   }
  
// 24 of february 2025
// first function .Returns number of blocks from Scuber hq to the pickup station .
function distanceFromHqInBlocks(pickUp){
  const HqPosition = 42 ;
  if (pickUp > HqPosition){
    return pickUp - HqPosition;
  } else {
    return HqPosition - pickUp;
  }
}
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)
distanceFromHqInBlocks(43)

// second function . Returns number of feet from Scuber hq to the pickup station.
function distanceFromHqInFeet(pickUp){
 distanceFromHqInBlocks(pickUp)
 const feetPerBlock = 264;
 return distanceFromHqInBlocks(pickUp) * feetPerBlock;
}
distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInFeet(34)
// third function . Calculate the number of feet a passenger can travel from a starting block to an ending block . Using the knowledge that a block is 264 feet long .i
function distanceTravelledInFeet(start,destination){
  const feetPerBlock = 264;
  if (start > destination){
    return (start - destination)* feetPerBlock; 
  }else {
    return (destination - start)* feetPerBlock;
  }
}
distanceTravelledInFeet(43,48)
distanceTravelledInFeet(50,60)
distanceTravelledInFeet(34,28)
// fourth function
function calculatesFarePrice(start,destination){
  // the first 400 feet are free 
// 400 - 2000 feet the price is 2 cents per foot 
// 2000 - 2500 flat price of $25 .
// 2500 and above return 'cannot travel that far'
  const freeDistance = 400;
  const pricePerFoot = 0.02;
  const distance = distanceTravelledInFeet(start,destination);
  if (distance <= freeDistance){
    return 0;
  }else if (distance > freeDistance && distance <= 2000){
    return (distance - freeDistance) * pricePerFoot;
  }else if (distance > 2000 && distance <= 2500){
    return 25;
  }else {
    return 'cannot travel that far';
  }  
}
calculatesFarePrice(43,44)
calculatesFarePrice(34,32)
calculatesFarePrice(50,58)
// the first 400 feet are free 
// 400 - 2000 feet the price is 2 cents per foot 
// 2000 - 2500 flat price of $25 .
// 2500 and above return 'cannot travel that far'