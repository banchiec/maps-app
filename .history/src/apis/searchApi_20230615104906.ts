import axios from "axios"

const searchApi = axios.create({
	baseURL: "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0",
	params: {
		limit: 5,
		language: "es",
		key = "3XNC4ZpZpbJOGme7bP7r",
	},
})
export default searchApi
