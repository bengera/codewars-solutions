//Return the average of the given array rounded down to its nearest integer.

function getAverage(marks){
    let total= 0;
    for (var i = 0; i <marks.length; i++) {
      total += marks[i];
    
    }

    let avg = total / marks.length;
    let round = (Math.floor(avg));
    return round;
    
  }
