import React, { useState, useEffect } from "react";
import Posts from "./components/posts";
import Navbar from "./components/navbar";
import postsData from "./data"; // Import the data
import styles from "@/styles/Home.module.scss";

export default function Home() {
  // Fetch the initial posts data
  const posts = postsData;
  // State for managing liked posts visibility
  const [showLikedPosts, setShowLikedPosts] = useState(false);
  // State for storing liked posts
  const [likedPosts, setLikedPosts] = useState([]);

  // Load liked posts from local storage on component mount
  useEffect(() => {
    const storedLikedPosts = JSON.parse(localStorage.getItem("likedPosts"));
    if (storedLikedPosts) {
      setLikedPosts(storedLikedPosts);
    }
  }, []);

  // Toggle the liked status of a post
  const toggleLiked = (post) => {
    // Find the index of the clicked post in the likedPosts array
    const postIndex = likedPosts.findIndex(
      (likedPost) => likedPost.id === post.id
    );
    // If the post is already liked, remove it from the likedPosts array
    if (postIndex !== -1) {
      setLikedPosts((prevLikedPosts) =>
        prevLikedPosts.filter((likedPost) => likedPost.id !== post.id)
      );
    } else {
      // If the post is not liked, add it to the likedPosts array
      setLikedPosts((prevLikedPosts) => [...prevLikedPosts, post]);
    }
  };
  // Toggle between showing all posts and liked posts
  const toggleLikedPosts = () => {
    setShowLikedPosts(!showLikedPosts);
  };

  // Save likedPosts to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
  }, [likedPosts]);

  // Determine which posts to display based on showLikedPosts
  const displayedPosts = showLikedPosts ? likedPosts : posts;
  return (
    <div className={styles["container"]}>
      <Navbar toggleLikedPosts={toggleLikedPosts} />
      <h1>{showLikedPosts ? "Liked Posts" : "All Posts"}</h1>
      <div className="instagram-post">
        {displayedPosts.map((post) => (
          <Posts
            key={post.id}
            id={post.id}
            user={post.user}
            post={post.post}
            hashtags={post.hashtags}
            likes={post.likes}
            comments={post.comments}
            profilePic={post.profilePic}
            imageUrl={post.imageUrl}
            liked={likedPosts.some((likedPost) => likedPost.id === post.id)} // Whether the post is liked by the user
            toggleLiked={() => toggleLiked(post)} // Function to toggle the liked status of the post
          />
        ))}
      </div>
    </div>
  );
}
