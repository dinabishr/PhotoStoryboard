import { FaHome, FaHeart } from "react-icons/fa"; // Import icons
import styles from "@/styles/Home.module.scss";

/**
 * Navbar component that displays navigation links with icons
 * @param  {Function} props.toggleLikedPosts - A function to toggle liked posts display
 */
const Navbar = ({ toggleLikedPosts }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        {/* Clicking on these links will toggle the display of liked posts */}
        <a onClick={toggleLikedPosts}>
          <FaHome />
        </a>
        <a onClick={toggleLikedPosts}>
          <FaHeart />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
