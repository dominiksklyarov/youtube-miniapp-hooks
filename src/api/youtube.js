import axios from "axios";
const KEY = 'AIzaSyD-Z3xrhjeAhp2KI1QMSxjyQiJmA0g3gns'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video',
    }
});

