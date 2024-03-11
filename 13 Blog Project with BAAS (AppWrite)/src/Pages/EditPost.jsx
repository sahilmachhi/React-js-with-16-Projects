import appwriteService from "../Auth/Config";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import PostForm from "../Components/PostForm/PostForm";

function EditPost() {
  const [post, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post ? (
    <div className="py-8">
      <PostForm post={post} />
    </div>
  ) : null;
}

export default EditPost;
