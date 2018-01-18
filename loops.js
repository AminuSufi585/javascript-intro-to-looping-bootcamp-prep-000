var arr = [];

function forLoop(arr) {
   for (var i = 0; i < arr.length; i++) {
      arr.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
   }
}
