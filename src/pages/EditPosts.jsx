import React, { useEffect } from "react";
import { appwriteService } from "../appwrite/conf";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Postcard } from "../components";

const EditPosts = () => {
  const [posts, setPosts] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((posts) => {
        if (posts) {
          setPosts(posts);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return posts ? (
    <div className="py-8">
      <Container>
        <Postcard post={posts} />
      </Container>
    </div>
  ) : null;
};

export default EditPosts;
