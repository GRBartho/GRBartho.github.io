import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Post, Comment, User, PostCategory } from "./types";
import {
  INITIAL_POSTS,
  INITIAL_COMMENTS,
  MOCK_USERS,
  SVSU_COLORS,
} from "./constants";
import PostCard from "./components/PostCard";
import CommentThread from "./components/CommentThread";
import AiAssistant from "./components/AiAssistant";

// Navbar Component
const Navbar: React.FC = () => (
  <nav className="sticky top-0 z-40 bg-white border-b border-slate-200 backdrop-blur-sm bg-opacity-80">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-[#A00000] p-1.5 rounded-lg">
            <i className="fas fa-brain text-white text-xl"></i>
          </div>
          <span className="text-xl font-extrabold text-[#003366] tracking-tight">
            SVSU <span className="font-light text-[#A00000]">AI Taskforce</span>
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
          <Link to="/" className="hover:text-[#A00000] transition-colors">
            Dashboard
          </Link>
          <Link to="/" className="hover:text-[#A00000] transition-colors">
            Proposals
          </Link>
          <Link to="/" className="hover:text-[#A00000] transition-colors">
            Resources
          </Link>
          <Link to="/" className="hover:text-[#A00000] transition-colors">
            Ethics Board
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-slate-400 hover:text-slate-600">
            <i className="fas fa-search"></i>
          </button>
          <div className="flex items-center space-x-2 pl-4 border-l border-slate-200">
            <img
              src={MOCK_USERS[3].avatar}
              className="w-8 h-8 rounded-full border border-[#003366]"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
);

// Dashboard / Feed Component
const Feed: React.FC<{
  posts: Post[];
  onSelectPost: (p: Post) => void;
  onAddPost: (p: Post) => void;
}> = ({ posts, onSelectPost, onAddPost }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [category, setCategory] = useState(PostCategory.GENERAL);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    const post: Post = {
      id: Math.random().toString(36).substr(2, 9),
      title: newTitle,
      content: newContent,
      author: MOCK_USERS[3],
      category,
      timestamp: new Date(),
      likes: 0,
      commentsCount: 0,
      tags: ["new-contribution"],
    };
    onAddPost(post);
    setNewTitle("");
    setNewContent("");
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900">Taskforce Feed</h1>
          <p className="text-slate-500 font-medium">
            Collaboration for a future-ready campus.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#A00000] hover:bg-[#003366] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center space-x-2"
        >
          <i className="fas fa-plus"></i>
          <span>New Proposal</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} onClick={onSelectPost} />
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-[#003366] text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-bold mb-4 flex items-center space-x-2">
              <i className="fas fa-calendar-alt"></i>
              <span>Upcoming Meetings</span>
            </h3>
            <div className="space-y-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <p className="text-xs font-bold text-[#A00000] uppercase">
                  Nov 24 @ 2:00 PM
                </p>
                <p className="text-sm font-medium">
                  Policy Review: LLMs in Exams
                </p>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <p className="text-xs font-bold text-[#A00000] uppercase">
                  Dec 01 @ 11:00 AM
                </p>
                <p className="text-sm font-medium">
                  Faculty Workshop: Prompt Engineering
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-2xl">
            <h3 className="text-lg font-bold text-slate-900 mb-4">
              Trending Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "integrity",
                "generative-ai",
                "ethics",
                "curriculum",
                "governance",
                "SVSU2025",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold cursor-pointer hover:bg-slate-200 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-[#003366] p-6 flex justify-between items-center text-white">
              <h2 className="text-xl font-bold">Post New Discussion</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form onSubmit={handleCreatePost} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Title
                </label>
                <input
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#A00000] outline-none transition-all"
                  placeholder="Policy for AI..."
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as PostCategory)}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#A00000] outline-none transition-all"
                >
                  {Object.values(PostCategory).map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                  Content
                </label>
                <textarea
                  required
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-[#A00000] outline-none transition-all"
                  placeholder="Share your thoughts or proposal..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#A00000] text-white py-3 rounded-xl font-bold hover:bg-[#003366] transition-all"
              >
                Publish to Taskforce
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Detailed View Component
const PostDetail: React.FC<{
  post: Post;
  comments: Comment[];
  onBack: () => void;
  onAddComment: (content: string, parentId?: string) => void;
}> = ({ post, comments, onBack, onAddComment }) => {
  const [commentInput, setCommentInput] = useState("");

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    onAddComment(commentInput);
    setCommentInput("");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 animate-in slide-in-from-right-4 duration-300">
      <button
        onClick={onBack}
        className="text-slate-500 font-bold mb-6 flex items-center space-x-2 hover:text-[#A00000]"
      >
        <i className="fas fa-arrow-left"></i>
        <span>Back to Feed</span>
      </button>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 mb-8">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={post.author.avatar}
            alt=""
            className="w-12 h-12 rounded-full ring-2 ring-[#003366]/10"
          />
          <div>
            <h4 className="font-bold text-slate-900">{post.author.name}</h4>
            <p className="text-xs text-slate-500 font-medium">
              {post.author.role} •{" "}
              {new Date(post.timestamp).toLocaleDateString()}
            </p>
          </div>
        </div>

        <h1 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="prose prose-slate max-w-none text-slate-700 text-lg leading-relaxed mb-8">
          {post.content}
        </div>

        <div className="flex items-center space-x-6 border-t border-slate-100 pt-6">
          <button className="flex items-center space-x-2 text-[#A00000] font-bold">
            <i className="fas fa-heart"></i>
            <span>{post.likes}</span>
          </button>
          <div className="flex items-center space-x-2 text-slate-400">
            <i className="fas fa-comment"></i>
            <span>{comments.length} Comments</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-8">Discussion</h3>

        <form onSubmit={handleAddComment} className="mb-10 flex space-x-4">
          <img
            src={MOCK_USERS[3].avatar}
            className="w-10 h-10 rounded-full"
            alt=""
          />
          <div className="flex-1 space-y-3">
            <textarea
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Join the conversation..."
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 min-h-[100px] outline-none focus:ring-2 focus:ring-[#003366] transition-all"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#003366] text-white px-8 py-2.5 rounded-full font-bold hover:bg-[#A00000] transition-all"
              >
                Post Comment
              </button>
            </div>
          </div>
        </form>

        <div className="space-y-6">
          {comments
            .filter((c) => !c.parentId)
            .map((comment) => (
              <CommentThread
                key={comment.id}
                comment={comment}
                currentUser={MOCK_USERS[3]}
                replies={comments.filter((r) => r.parentId === comment.id)}
                onReply={(parentId, content) => onAddComment(content, parentId)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const addPost = (post: Post) => {
    setPosts([post, ...posts]);
  };

  const addComment = (content: string, parentId?: string) => {
    if (!selectedPost) return;
    const newComment: Comment = {
      id: Math.random().toString(36).substr(2, 9),
      postId: selectedPost.id,
      parentId,
      author: MOCK_USERS[3],
      content,
      timestamp: new Date(),
      likes: 0,
    };
    setComments([...comments, newComment]);

    // Update comment count on post
    setPosts(
      posts.map((p) =>
        p.id === selectedPost.id
          ? { ...p, commentsCount: p.commentsCount + 1 }
          : p,
      ),
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#f8fafc] text-slate-900">
        <Navbar />

        <main>
          {selectedPost ? (
            <PostDetail
              post={selectedPost}
              comments={comments.filter((c) => c.postId === selectedPost.id)}
              onBack={() => setSelectedPost(null)}
              onAddComment={addComment}
            />
          ) : (
            <Feed
              posts={posts}
              onSelectPost={setSelectedPost}
              onAddPost={addPost}
            />
          )}
        </main>

        <AiAssistant
          context={
            selectedPost
              ? `Discussing: ${selectedPost.title}. Content: ${selectedPost.content}`
              : undefined
          }
        />

        <footer className="bg-slate-900 text-slate-400 py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-white font-bold mb-4 italic">
              "Always Forward."
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Faculty Guidelines
              </a>
              <a href="#" className="hover:text-white transition-colors">
                IT Support
              </a>
            </div>
            <p className="text-xs">
              © {new Date().getFullYear()} Saginaw Valley State University AI
              Taskforce. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
