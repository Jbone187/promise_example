prom = () => {
  return new Promise((resolve, reject) => {
    resolve = 0;
    if (resolve) {
      resolve("Done");
    } else {
      reject("Error");
    }
  });
};

prom()
  .then(function() {
    console.log("End Of Promise");
  })
  .catch(function(err) {
    console.log(err);
  });
