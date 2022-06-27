import axios from 'axios';

export default function fetchPosts() {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
}
