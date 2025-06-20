import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import styles from "./Blog.module.css";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [selectedTag, setSelectedTag] = useState("all");

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/posts.json`)
      .then(response => response.json())
      .then(data => {
        // 날짜 내림차순으로 정렬
        const sortedPosts = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(sortedPosts);
      });
  }, []);

  const allTags = ["all", ...Array.from(new Set(posts.flatMap(post => post.tags)))];
  const filteredPosts = selectedTag === "all"
    ? posts
    : posts.filter(post => post.tags.includes(selectedTag));

  return (
    <div className={styles.blogContainer}>
      <Nav />
      <main className={styles.blogMain}>
        <header className={styles.blogHeader}>
          <h1>개발 블로그</h1>
          <p>개발 과정에서 배운 것들을 기록하고 공유합니다</p>
        </header>
        <div className={styles.blogContent}>
          <aside className={styles.sidebar}>
            <h3>태그 필터</h3>
            <div className={styles.tagFilter}>
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`${styles.tagButton} ${selectedTag === tag ? styles.active : ''}`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag === "all" ? "전체" : tag}
                </button>
              ))}
            </div>
          </aside>
          <section className={styles.postsSection}>
            <div className={styles.postsGrid}>
              {filteredPosts.map(post => (
                <article key={post.id} className={styles.postCard}>
                  <div className={styles.postHeader}>
                    <h2 className={styles.postTitle}>
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>
                    <div className={styles.postMeta}>
                      <span className={styles.postDate}>{post.date}</span>
                      <span className={styles.readTime}>{post.readTime} 읽기</span>
                    </div>
                  </div>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postTags}>
                    {post.tags.map(tag => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to={`/blog/${post.id}`} className={styles.readMore}>
                    더 읽기 →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
} 