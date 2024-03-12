import { useState } from "react";
import appwriteService from "../Auth/Config";

import PostCard from "../Components/PostCard";
import React from "react";

function AllPost() {
  const [posts, setPosts] = useState([]);
  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });
  return (
    <div className="flex flex-wrap">
      {posts.map((post) => (
        <div key={post.$id} className="p-2 w-1/4">
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
}

export default AllPost;
