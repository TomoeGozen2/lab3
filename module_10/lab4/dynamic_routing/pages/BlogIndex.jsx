import { Posts } from "../lib/posts";

export default function BlogIndex(){
    const blogPosts = Posts.map(blogPost => <li>{blogPost.id} {blogPost.title}
    {blogPost.content}</li>)}