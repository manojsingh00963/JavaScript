let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 2 * 1000);
    reject(`There is no Promise.`);
});

p.then((result) => {
    console.log(result);
    return result * 2;
}).then((result) => {
    console.log(result)
    return result * 3;
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error);
});

