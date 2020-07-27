const enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-15')

console.log('Enzyme :', enzyme)
console.log('Adapter :', Adapter)

enzyme.configure({ adapter: new Adapter() })
