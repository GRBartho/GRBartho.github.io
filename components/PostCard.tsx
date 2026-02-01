
import React from 'react';
import { Post } from '../types';
import { SVSU_COLORS } from '../constants';

interface PostCardProps {
  post: Post;
  onClick: (post: Post) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onClick }) => {
  return (
    <div 
      onClick={() => onClick(post)}
      className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all cursor-pointer group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full border border-slate-100" />
          <div>
            <h4 className="font-semibold text-slate-900 leading-tight">{post.author.name}</h4>
            <p className="text-xs text-slate-500 font-medium">{post.author.role}</p>
          </div>
        </div>
        <span 
          className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
          style={{ backgroundColor: `${SVSU_COLORS.blue}15`, color: SVSU_COLORS.blue }}
        >
          {post.category}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#A00000] transition-colors">
        {post.title}
      </h3>
      <p className="text-slate-600 line-clamp-2 text-sm leading-relaxed mb-4">
        {post.content}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map(tag => (
          <span key={tag} className="text-xs text-slate-400">#{tag}</span>
        ))}
      </div>

      <div className="flex items-center space-x-6 text-slate-400 text-sm border-t pt-4">
        <button className="flex items-center space-x-2 hover:text-[#A00000] transition-colors">
          <i className="far fa-heart"></i>
          <span>{post.likes}</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-[#003366] transition-colors">
          <i className="far fa-comment"></i>
          <span>{post.commentsCount} Comments</span>
        </button>
        <span className="ml-auto text-xs opacity-60">
          {new Date(post.timestamp).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default PostCard;
