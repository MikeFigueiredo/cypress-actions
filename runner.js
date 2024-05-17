const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijk3OThmYTkzLWJlODMtNGNiMC1hZWE2LWZlMmM1ZDhhMmZmMi0xNzE1OTU2MDI2NDE3IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNmJmZDI2NjctZTg4NC00ODk1LTk1YTMtYjVmYmZjZGU0ZTM5IiwidHlwZSI6InQifQ.O2zOkUyrA5pHOLnjJfLLA-djB1HurWq3o6VKD3pWjI4' 

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
