import axios from "axios"


// FIGURE out the right URL..this looks wrong
const termsAPI = axios.create({
  baseURL: "https://app.botics.co/termsandconditions", 
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})


export function get_terms() {
	console.log("running get terms.")
  return termsAPI.get(``)
}

export const api = {
	get_terms
}
