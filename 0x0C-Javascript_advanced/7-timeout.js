
console.log('Start of the execution queue');

    setTimeout(() => {
        console.log("Final code block to be executed");
      }, 0)
      for (let step = 1; step <= 100; step++) {
        console.log(step);
    }
console.log('End of the loop printing');




