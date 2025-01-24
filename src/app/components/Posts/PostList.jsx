"use client";

import { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center">Loading posts...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
      {posts.map((post) => (
        <div key={post.id} className="card bg-base-100 shadow-lg p-4">
          <h3 className="text-lg font-bold text-orange-500">
            User ID: {post.userId}
          </h3>
          <h4 className="font-semibold text-lg">{post.title}</h4>
          <p className="text-gray-600 mt-2">
            {post.body.length > 50
              ? `${post.body.substring(0, 50)}...`
              : post.body}
          </p>
          <button className="btn btn-primary mt-4">View Details</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
