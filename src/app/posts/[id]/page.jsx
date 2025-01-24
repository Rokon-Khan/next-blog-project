// "use client";

// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// const PostDetail = () => {
//   const [post, setPost] = useState(null);
//   const router = useRouter();
//   const { id } = router.query;

//   useEffect(() => {
//     if (id) {
//       fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then((response) => response.json())
//         .then((data) => setPost(data))
//         .catch((error) => console.error("Error fetching post:", error));
//     }
//   }, [id]);

//   if (!post) return <div>Loading...</div>;

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-center text-3xl font-bold mt-5">{post.title}</h1>
//       <p className="mt-3">{post.body}</p>
//     </div>
//   );
// };

// export default PostDetail;

"use client";

// import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PostDetail = ({ params }) => {
  const [post, setPost] = useState(null);
  //   const router = useRouter();
  const { id } = params;
  console.log(id);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data))
        .catch((error) => console.error("Error fetching post:", error));
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold mt-5">{post.title}</h1>
      <p className="mt-3">{post.body}</p>
    </div>
  );
};

export default PostDetail;
