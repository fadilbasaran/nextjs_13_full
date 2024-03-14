
import { notFound } from 'next/navigation';
import React from 'react'

// function BlogPage({searchParams}) {
//     if (searchParams.error === "true") {
//         throw new Error("This is an error");
//     }
//     return (
//       <div>Blog Page</div>
//     )
// }


function BlogPage({searchParams}) {
    if (searchParams.test === "true") {
        notFound();
    }
    return (
      <div>Blog Page</div>
    )
}

export default BlogPage;
