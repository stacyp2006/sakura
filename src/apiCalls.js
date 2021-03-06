const API_KEY = process.env.REACT_APP_API_KEY;

export const getPlants = () => {
  return fetch('https://fe-cors-proxy.herokuapp.com', {
    headers: {
      "Target-URL":`https://trefle.io/api/v1/plants/search?q=japanese&token=${API_KEY}&filter_not[growth_habit]=null`
    }
  })
  .then(response => {
    if(!response.ok) {
      throw Error("failed to retrieve books")
    }
    return response.json()
  })
}

export const getSinglePlant = async (plantID) => {
  try {
    const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
      headers: {
        "Target-URL": `https://trefle.io/api/v1/species/${plantID}?token=${API_KEY}`
      }
    })
    if(response.ok) {
      const res = await response.json()
        return res
      } else {
        throw new Error('Network response was not ok.')
      }
    }
    catch (error) {
      return error
    }
}
