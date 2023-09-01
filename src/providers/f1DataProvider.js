const uri = 'http://ergast.com/api/f1/current.json'

export const fetchData = async() => {
  try {
      const response = await fetch(uri)
      const data = await response.json()
      return data
  } catch (error) {
      console.log('Error: ', error)
      return null
  }
}