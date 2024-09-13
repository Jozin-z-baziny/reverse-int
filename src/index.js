module.exports = function reverse(n) {
   let numAr = Array.from(String(Math.abs(n)), Number);
   let revAr = []
   for (let i = 0; i < numAr.length; i++) {
      revAr[numAr.length - i] = numAr[i];
   }
   return +revAr.join('');
}

