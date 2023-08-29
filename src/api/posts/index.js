import axios from "axios";

export async function fetchPosts () {
    try {
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return posts.data
    } catch (e) {
        console.log(e)
    }
}