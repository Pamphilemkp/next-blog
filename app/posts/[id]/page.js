'use client'


import { useEffect, useState } from "react";
import Link from "next/link";

export default function Post({ params }){
    
   const [post, setPost] = useState(null);

   const fetchPost = async (id) => {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    const {post} = await res.json();

    post && setPost(post);
  }


    useEffect(() => {
        fetchPost(params.id);
    }, [])

    return (
        <div className="pt-5 pl-5">
        <Link href='/'>Back to home</Link>
        <div className="pt-12">
          <article>
            <h1 className="mt-3">{post?.title}</h1>
            {post?.tags.map((tag, index) => <span className="font-bold" key={index}> {tag} | </span>)}
            <br/>
            <p  className="mt-3">{post?.body}</p>
          </article>
        </div>
        </div>
    )
}