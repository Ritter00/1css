// JSON объект
const jsonString = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`
// JSON в dict, объект JS
const jsonObj = JSON.parse(jsonString)
// есть обратный процесс JSON.stringify() 
console.log(jsonObj)