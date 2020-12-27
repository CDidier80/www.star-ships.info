const { default: Axios } = require('axios')

const ApiClient = Axios.create({ baseURL: 'http://localhost:3000' })

export default ApiClient
