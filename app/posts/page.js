import Link from "next/link";

export default async function posts() {
    const resp = await fetch('http://localhost:3000/api/posts');
    const {posts} = await resp.json();
  return (
    <div className=" w-full text-center flex justify-center align-center "> 
        <div className="w-2/3">
           <h2 className="text-head font-bold text-2xl py-3">All Blog Posts</h2>
            <ul className="">
                {posts.map((post) =>(
                    <li key={post.id} className="flex flex-col align-center justify-between mb-3">
                        <Link href={`posts/${post.id}`} className="font-bold text-lg font-serif head-title">{post.title}</Link>
                        <p className="text-base">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
};
