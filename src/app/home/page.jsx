"use client";

import PostList from "../components/Posts/PostList";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold mt-5">
        Welcome to the Blog
      </h1>
      <PostList />
    </div>
  );
}
