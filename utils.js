const fetchData = async(uri) => {
  try {
      const response = await fetch(uri)
      const data = await response.json()
      return data
  } catch (error) {
      console.log('Error: ', error)
      return null
  }
}

function handleError(err) {
  console.log("OH NO!")
  console.log(err)
}

export {fetchData, handleError}