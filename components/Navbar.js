import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-slate-400 text-slate-50 px-4 py-6 flex justify-between align-center">
        <p>navbar</p>
        <div className=" flex gap-7">
            <Link href="/posts"> All posts</Link>
            <Link href="api/posts">Posts Json</Link>
        </div>
    </div>
  )
}

export default Navbar;