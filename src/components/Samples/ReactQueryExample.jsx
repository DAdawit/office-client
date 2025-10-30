import React from "react";
import { useQuery } from "@tanstack/react-query";
import { createPost, getPosts } from "@/services/posts";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { queryClient } from "@/lib/react-query";
import AllInputsForm from "@/components/Samples/react-hookForm";
const ReactQueryExample = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts, // 👈 just reference the function
  });

  const mutation = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || data.length === 0) return <p>No posts found</p>;
  if (data.length > 0) {
    console.log("Posts:", data);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ title, body }); // 👈 pass data here
  };
  return (
    <div className="container mx-auto custom-p-20">
      <h1>Welcome to the Home Page</h1>
      {/* <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? "Creating..." : "Create Post"}
        </button>

        {mutation.isError && <p>Error: {mutation.error.message}</p>}
        {mutation.isSuccess && <p>Post created successfully!</p>}
      </form>
      <AllInputsForm />
    </div>
  );
};

export default ReactQueryExample;
