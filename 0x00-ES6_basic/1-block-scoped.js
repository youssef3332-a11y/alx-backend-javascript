export default function taskBlock(trueOrFalse) {
    let task = false;
    let task2 = true;
  
    /* eslint-disable no-unused-vars */
    if (trueOrFalse) {
      let task = true;
      let task2 = false;
    }
    /* eslint-enable no-unused-vars */
  
    return [task, task2];
  }