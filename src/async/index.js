const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async!!'), 2000)
      : reject(new Error('Hay un error'));
  })
}

console.log(fnAsync(), '3')
const anotherFunction = async () => {
  console.log('1')
  const something = await fnAsync();
  console.log(something, '2')
  console.log('esperando')
}

console.log('Before')
anotherFunction();
console.log('after')