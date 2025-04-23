export function setupCounter() {
  //Problem 1
  //
  // function checkOccurence(str, sub) {
  //   const regex = new RegExp(sub, 'g');
  //   let count = (str.match(regex) || []).length;
  //   return count;
  // }
  // console.log(checkOccurence('foobarfoo', 'foo'));
  //
  //
  //
  //Problem 2
  //
  // function printSubArrays(arr, k) {
  //   for (let i = 0; i < arr.length; i++) {
  //     let sum = 0;
  //     let tempArr = [];
  //     for (let j = i; j < arr.length; j++) {
  //       sum += arr[j];
  //       tempArr.push(arr[j]);
  //       if (sum === k) {
  //         console.log(tempArr);
  //       }
  //     }
  //   }
  // }
  // printSubArrays([3, 4, -7, 1, 3, 3, 1, -4], 7);
  //
  // Problem 3
  // function freqK(arr, freq) {
  //   const charCount = {};
  //   const result = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     const char = arr[i];
  //     if (charCount[char]) {
  //       charCount[char].count += 1;
  //     } else {
  //       charCount[char] = { count: 1 };
  //     }
  //   }
  //   for (let key in charCount) {
  //     if (charCount[key].count === freq) {
  //       result.push(Number(key));
  //     }
  //   }
  //   return result;
  // }
  // console.log(freqK([2, 4, 4, 3, 3, 7, 7, 7, 8], 2));
  //
  // Problem4
  // function formSmallest(num) {
  //   const freq = new Array(10).fill(0);

  //   let result = 0;
  //   while (num > 0) {
  //     let d = parseInt(num % 10);
  //     freq[d]++;
  //     num = parseInt(num / 10);
  //   }

  //   for (let i = 1; i <= 9; i++) {
  //     if (freq[i] != 0) {
  //       result = i;
  //       freq[i]--;
  //       break;
  //     }
  //   }

  //   for (let i = 0; i <= 9; i++) {
  //     while (freq[i] != 0) {
  //       result = result * 10 + i;
  //       freq[i]--;
  //     }
  //   }
  //   return result;
  // }
  // console.log(formSmallest('762021'));
 // Problem 5
 //
//  function sortbasedFreq(str) {
//   let frequency = str.split('').reduce((a,b) => {
//     a[b] ? a[b]++ : a[b]=1;
//     return a;
//   },{});

//   const sortedFreq = Object.entries(frequency).sort((a,b) => {
//     if(b[1] != a[1]) {
//       return b[1] - a[1];
//     }
//     return a[0].localeCompare(b[0])
//   });
    
//   let result = '';
//   for(let [char,freq] of sortedFreq) {
//     result += char.repeat(freq)
//   }
//   return result;
//  }
//  console.log(sortbasedFreq('cccaaa'));

//Problem 6
//
// function panagramMiss(str) {
//   let arr = new Array(26).fill(0);
//   str = str.toLowerCase();

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= 'a' && str[i] <= 'z') {
//       arr[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] = true; // <- use = not ===
//     }
//   }

//   let missing = '';
//   for (let i = 0; i < arr.length; i++) {
//     if (!arr[i]) {
//       missing += String.fromCharCode(97 + i);
//     }
//   }

//   return missing;
// }

// console.log(panagramMiss('the quic sly fox jumped over the lazy brwon dog'));
//
//Problem 7
 
// function jadenCase(str) {
//   let arr = str.split(' ');
//   let result = [];
//   for(let i = 0; i < arr.length; i++) {
//     result =  result.concat(arr[i].slice(0,1).toUpperCase().concat(arr[i].slice(1,arr.length+1)));
//   }
//   return result.join(' ');
  
// }
// console.log(jadenCase('Hello how are you'))

//Problem 8
//
// function armStrong(input) {

//   let temp = input;
//   let sum = 0;
//   while(input > 0) {
//     let d = parseInt(input%10);
//     d = d*d*d;
//     sum = sum + d;
//     input = parseInt(input/10);
//   }
//   if(temp === sum) {
//     return true;
//   } 
//   return false;
// }
// console.log(armStrong(153));

// Problem 9
//
function primeList(n) {
  let isPrime = Array(n+1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  let primes = [];
  for(let j=2; j<=n; j++) {
    if(isPrime[j] === WebTransportDatagramDuplexStream) {
      primes.push(j);
    }
    let next = j*j;
    while(next <=n) {
      isPrime[next] = false;
      next +=j;
    }
  }
  return primes;
}
console.log(primeList(100));

}
