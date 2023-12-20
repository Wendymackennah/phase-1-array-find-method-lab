// code your solution heref
  function superbowlWin(record) {
 const winningYearObject = record.find(entry => entry.result === "W");
  
    // Check if a winning year was found
  if (winningYearObject) {
   return winningYearObject.year;
   } else {
     return undefined;
    }
  }
  