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

  function formSmallest(num) {
    let freq = new Array(10).fill(0);
    let result = 0;

    while (num > 0) {
      let d = parseInt(num % 10);
      freq[d]++;
      num = parseInt(num / 10);
    }

    // First digit (non-zero) to avoid leading zero
    for (let i = 1; i <= 9; i++) {
      if (freq[i] !== 0) {
        result = i;
        freq[i]--;
        break;
      }
    }

    // Append remaining digits in ascending order
    for (let i = 0; i <= 9; i++) {
      while (freq[i] !== 0) {
        result = result * 10 + i;
        freq[i]--;
      }
    }
    console.log(result);
    return result;
  }

  formSmallest(7652634); // Should output: 2345667
}
