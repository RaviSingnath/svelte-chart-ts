import Home from "../screens/Home.svelte"
import About from "../screens/About.svelte"
import Blogs from "../screens/Blogs.svelte"
import Blog from "../screens/Blog.svelte"
import Post from "../screens/Post.svelte"

const routes = {
    '/': Home,
    '/about': About,
    '/blogs': Blogs,
    '/blog/:blogID': Blog,
    '/post': Post,
}

export default routes
