require("./no_exports")
const utilityModule = require('./1_app')

utilityModule.sayHi("Ankur")
utilityModule.helloWorld(5)



const otherModule = require("./other_exports")

//below conditions are used to import other aletrnatives for export

console.log(otherModule.items)
console.log(otherModule.user.name)

const _lodash = require('lodash')

const items = [1,[2,[3,[4]]]]
const flattenArray = _lodash.flattenDeep(items)
console.log(flattenArray)

