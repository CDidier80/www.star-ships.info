import ApiClient from './src/ApiClient'

export const GetStarships = async () => {
  try {
    const res = await ApiClient.get('/')
    return res.results
  } catch (error) {
    throw error
  }
}

