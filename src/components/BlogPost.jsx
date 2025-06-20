import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import Nav from "./Nav";
import Footer from "./Footer";
import styles from "./BlogPost.module.css";

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ data: {}, content: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/posts/${id}.md`)
      .then(response => {
        if (!response.ok) throw new Error('Post not found');
        return response.text();
      })
      .then(text => {
        const { data, content } = matter(text);
        setPost({ data, content });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className={styles.blogContainer}>
        <Nav />
        <main className={styles.blogMain}>
          <div className={styles.loadingContainer}>
            <h1>로딩 중...</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post.data.title) {
    return (
      <div className={styles.blogContainer}>
        <Nav />
        <main className={styles.blogMain}>
          <div className={styles.errorContainer}>
            <h1>포스트를 찾을 수 없습니다</h1>
            <p>요청하신 블로그 포스트가 존재하지 않습니다.</p>
            <button 
              onClick={() => navigate('/blog')}
              className={styles.backButton}
            >
              블로그로 돌아가기
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.blogContainer}>
      <Nav />
      <main className={styles.blogMain}>
        <article className={styles.postContainer}>
          <header className={styles.postHeader}>
            <Link to="/blog" className={styles.backLink}>
              ← 블로그로 돌아가기
            </Link>
            <h1 className={styles.postTitle}>{post.data.title}</h1>
            <div className={styles.postMeta}>
              <div className={styles.metaInfo}>
                <span className={styles.author}>작성자: {post.data.author}</span>
                <span className={styles.date}>{post.data.date}</span>
                <span className={styles.readTime}>{post.data.readTime} 읽기</span>
              </div>
              <div className={styles.postTags}>
                {post.data.tags?.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </header>
          <div className={styles.postContent}>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          <footer className={styles.postFooter}>
            <Link to="/blog" className={styles.backToBlog}>
              ← 블로그 목록으로
            </Link>
          </footer>
        </article>
      </main>
      <Footer />
    </div>
  );
} 