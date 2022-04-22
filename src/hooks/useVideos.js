import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

// Searching for and making use of a list of videos.

// getting input and reurn a list of outputs:
const useVideos = (defaultSearchTerm) => {
  // managing a list of videos:
  const [videos, setVideos] = useState([]);

  // empty array in react means: run this function only one time.
  // getting a list of videos:
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  // the request that we make inside of search. Will be called any time that someone submits the search bar form.
  const search = async (term) => {
    // asynchronous API request: importing the YouTube API to actually make a request to YouTube.
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    // updates the list of videos:
    setVideos(response.data.items);
  };
  // returning a list of videos and a function that can be used to do a search change the list of videos.
  return [videos, search];
};

export default useVideos;
