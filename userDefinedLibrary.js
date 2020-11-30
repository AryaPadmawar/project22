//function definition to check if given two objects are overlapping eachother
function isTouching(object1, object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2   &&
        object2.x - object2.x < object2.width/2 + object1.width/2   &&
        object2.y - object2.y < object2.height/2 + object1.height/2 &&
        object1.y - object2.y < object2.height/2 + object1.height/2) {
      return true;
    }
    else {
      return false;
    }
  }
  //please explain me what you understood
  //function definition to make given two objects bounceOff eachother
  function bounceOff(object1, object2){
  
  //BOUNCEOFF ALGORITHIM checks if given two objects objects are overlapping eachother
  //if the objects ARE tounching, only then it will perform the bounceoff action on objects
  
  //BOUNCEOFF ALGORITHIM has to turn the object direction of motion to the opposite direction
  //i.e. POSITIVE VELOCITY TO NEGATIVE AND NEGATIVE TO POSITIVE
  
    //condition for motion along X axis
    if (object1.x - object2.x  < object2.width/2 + object1.width/2   &&
      object2.x  - object1.x < object2.width/2 + object1.width/2){
        object1.velocityX = object1.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);
    }
  
    //condition for motion along Y axis
    else if(object2.y  - object1.y < object2.height/2 + object1.height/2 &&
            object1.y - object2.y  < object2.height/2 + object1.height/2) {
          object1.velocityY = object1.velocityY * (-1);
          object2.velocityY = object2.velocityY * (-1);
    }
  }