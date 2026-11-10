export const Posts = [
    {
    id: 1,
    slug: "My first post",
    title: "my first blog post",
    content: "Hi guys welcome to my blog"
    },
    {
    id: 1,
    slug: "My 2nd post",
    title: "my 2nd blog post",
    content: "Hi guys welcome to my blog again"
    }
]

export function getPostsBySlug(slug){
    return Posts.find((post) => post.slug === slug)
}
    
    


