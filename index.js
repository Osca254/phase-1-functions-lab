// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  return Math.abs(blocks-42);
}
console.log(distanceFromHqInBlocks(43));

function distanceFromHqInFeet(blocks){
  return distanceFromHqInBlocks(blocks)*264
}
distanceFromHqInFeet(43);

console.log(distanceFromHqInFeet(43));

function distanceTravelledInFeet(start ,destination){
  if(destination>start){
    return (destination - start)*264;
  } else{
    return (start - destination)*264;
  }
  
}
console.log(distanceTravelledInFeet(43,48));

function calculatesFarePrice(start, destination){
  let distance= distanceTravelledInFeet(start,destination);
  if(distance<=400){
    return 0;
  }else if(distance<2000){
    return (distance -400 )*0.02;
  }else if(distance>=2000 && distance<2500){
    return 25;
  }else if (distance>=2500){
    return "cannot travel that far";
  }
}
calculatesFarePrice(43,44);
calculatesFarePrice(50,58);
calculatesFarePrice(34,24)