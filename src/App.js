import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
