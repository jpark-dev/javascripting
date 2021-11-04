const a = 1;
const b = 2;
const c = 3;
console.log(`0 --- a: ${a}, b: ${b}, c: ${c}`);

(function firstFunction () {
  const b = 5;
  const c = 6;
  console.log(`1 --- a: ${a}, b: ${b}, c: ${c}`);

  (function secondFunction () {
    const b = 8;
    console.log(`2 --- a: ${a}, b: ${b}, c: ${c}`);

    (function thirdFunction () {
      const a = 7;
      const c = 9;
      console.log(`3 --- a: ${a}, b: ${b}, c: ${c}`);

      (function fourthFunction () {
        const a = 1;
        const c = 8;
        console.log(`4 --- a: ${a}, b: ${b}, c: ${c}`);
      })()
    })()
  })()
})()
