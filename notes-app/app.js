/*
+)우리는 ES7임. No ES6

npm i validator하면(i는 install의 축약어)
going to the NPM server로 가서 모든 code를 grab해옴
그러면 두가지 일이 일어나는데
package-lock.json파일을 얻게 되고
new directory인 node_modules를 얻게 됨
node_moduels는 contains all of the code for the dependencies we installed.

package-lock.json은 contains extra information making NPM a bit faster and a bit more secure.
It lists out exact versions of all of our dependencies as well as where they were fetched from. (resolved)
And we also have a char hash making sure that we're getting the exact code that we got previously if we were to install a dependency again. (integrity)

*/

const validator = require('validator') //npm moduels은 상대 경로 안써도 됨
const add = require('./utils.js')

//npm 홈페이지에 그 모듈 사용법 많이 나와있음~

console.log(validator.isEmail('andrew@example.com')) //answer is 'true'

console.log(validator.isEmail('example.com'))

console.log(validator.isURL('example.com'))
