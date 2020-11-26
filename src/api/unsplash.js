import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID VtbxmlPxkE5dYr7cgnpMF5iQIcLG8Mubsw1rN77S5aM'
    }
})