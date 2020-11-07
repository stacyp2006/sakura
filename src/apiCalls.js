const API_KEY = process.env.REACT_APP_API_KEY;

export const getPlants = () => {
  return fetch('https://fe-cors-proxy.herokuapp.com', {
    headers: {
      "Target-URL":`https://trefle.io/api/v1/plants/search?q=japanese&token=${API_KEY}`
    }
  })
  .then(response => response.json())
}
