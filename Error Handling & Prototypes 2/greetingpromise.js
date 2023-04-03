function greetingPromise(name) {
    return new Promise((resolve, reject) => {
      if (name) {
        resolve(`Hello, ${name}!`);
      } else {
        reject("Invalid input: name is undefined or null");
      }
    });
  }
  greetingPromise("Mithun")
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error));
  
  greetingPromise()
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error));
  