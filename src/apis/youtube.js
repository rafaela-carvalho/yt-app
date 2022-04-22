import axios from 'axios';

// Stephen's Key:
const KEY = 'AIzaSyDCaYX11V7d-yfQx9oj7IvUEzAMyc5jRKY';

// preconfigured instance of Axios that already has a base URL and some default parameters loaded into it.
// Here, we won't preconfigured the q of 'query' or the search term on this instance. That's because we are going to specify the 'q' only when we actually make use of this Axios instance, and send a request over to the Google API. That's inside the App component.
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
