const { default: Axios } = require('axios')

const url = process.env.NODE_ENV === 'production' ?  `${window.location.origin}` : 'http://localhost:3000' 
const ApiClient = Axios.create({ baseURL: url })

export default ApiClient

