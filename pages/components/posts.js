import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import { FaHeart } from "react-icons/fa";

/**
 * A component that represents an individual Instagram-like post.
 *
 * @param {Object} props - The component's props.
 * @param {string} props.id - The unique ID of the post.
 * @param {string} props.user - The username of the post.
 * @param {string} props.post - The content of the post.
 * @param {string} props.hashtags - hashtags associated with the post.
 * @param {number} props.likes - The number of likes for the post.
 * @param {number} props.comments - The number of comments on the post.
 * @param {string} props.profilePic - The URL of the user's profile picture.
 * @param {string} props.imageUrl - The URL of the post's image.
 * @param {boolean} props.liked - Indicates whether the post is liked by the user.
 * @param {Function} props.toggleLiked - Function to toggle the liked status of the post.
 * @returns {JSX.Element} - A JSX element representing an Instagram-like post.
 */
const Posts = ({
  id,
  user,
  post,
  hashtags,
  likes,
  comments,
  profilePic,
  imageUrl,
  liked,
  toggleLiked,
}) => {
  return (
    <div>
      <div className={styles["instagram-post"]}>
        <div className={styles["profile-section"]}>
          <div className={styles["profile-pic"]}>
            <Image src={profilePic} alt={user} width={50} height={50} />
          </div>
          <span className={styles["username"]}>{user}</span>
        </div>
        <div className={styles["post-image"]}>
          <Image src={imageUrl} alt="Post" layout="fill" objectFit="cover" />
        </div>
        <div className={styles["interaction-bar"]}>
          <button
            className={`${styles["like-button"]} ${
              liked ? styles["liked"] : ""
            }`}
            onClick={toggleLiked}
          >
            <FaHeart />
          </button>
          <span className={styles["likes"]}>{likes} likes</span>
        </div>
        <div className={styles["comment-section"]}>
          <span className={styles["caption"]}>{post}</span>
          <span className={styles["hashtags"]}>{hashtags}</span>
          <span className={styles["comments"]}>View {comments} comments</span>
        </div>
      </div>
    </div>
  );
};

export default Posts;
