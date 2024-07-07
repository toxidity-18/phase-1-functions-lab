function distanceFromHqInBlocks(boardingpoint){
    if(boardingpoint>43){
        return boardingpoint-42;
    }else{
        return 42- boardingpoint;
    }
}
function distanceFromHqInFeet(blockNumber) {
    const distanceInBlocks = distanceFromHqInBlocks(blockNumber);
    const feetPerBlock = 264; 
    return distanceInBlocks * feetPerBlock;
  }
  function distanceTravelledInFeet(startBlock, destinationBlock) {
    const distanceInBlocks = distanceFromHqInBlocks(startBlock) - distanceFromHqInBlocks(destinationBlock);
    const feetPerBlock = 264;
    return Math.abs(distanceInBlocks) * feetPerBlock;
  }
  function calculatesFarePrice(startBlock, destinationBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, destinationBlock);
    const freeDistance = 400; 
    const pricePerFoot = 0.02; 
  
    if (distanceInFeet <= freeDistance) {
      return 0; 
    } else if (distanceInFeet <= 2000) {
      const chargeableDistance = distanceInFeet - freeDistance;
      return chargeableDistance * pricePerFoot;
    } else {
      return 25; 
    }
  }
  