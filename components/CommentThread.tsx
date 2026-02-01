
import React, { useState } from 'react';
import { Comment, User } from '../types';
import { SVSU_COLORS } from '../constants';

interface CommentThreadProps {
  comment: Comment;
  replies: Comment[];
  currentUser: User;
  onReply: (parentId: string, content: string) => void;
}

const CommentThread: React.FC<CommentThreadProps> = ({ comment, replies, currentUser, onReply }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;
    onReply(comment.id, replyText);
    setReplyText('');
    setShowReplyForm(false);
  };

  return (
    <div className="mb-6">
      <div className="flex space-x-3">
        <img src={comment.author.avatar} alt={comment.author.name} className="w-8 h-8 rounded-full" />
        <div className="flex-1">
          <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none border border-slate-100">
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-sm text-slate-900">{comment.author.name}</span>
              <span className="text-[10px] text-slate-400">{new Date(comment.timestamp).toLocaleTimeString()}</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">{comment.content}</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-2 ml-2">
            <button className="text-xs font-semibold text-slate-500 hover:text-[#A00000]">Like ({comment.likes})</button>
            <button 
              onClick={() => setShowReplyForm(!showReplyForm)}
              className="text-xs font-semibold text-slate-500 hover:text-[#003366]"
            >
              Reply
            </button>
          </div>

          {showReplyForm && (
            <form onSubmit={handleSubmitReply} className="mt-3 flex space-x-2">
              <input
                type="text"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
                className="flex-1 text-sm bg-white border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#003366]"
              />
              <button 
                type="submit"
                className="bg-[#003366] text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-opacity-90"
              >
                Post
              </button>
            </form>
          )}

          {replies.length > 0 && (
            <div className="mt-4 ml-4 border-l-2 border-slate-100 pl-4 space-y-4">
              {replies.map(reply => (
                <div key={reply.id} className="flex space-x-3">
                  <img src={reply.author.avatar} alt={reply.author.name} className="w-6 h-6 rounded-full" />
                  <div className="flex-1 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-xs text-slate-800">{reply.author.name}</span>
                      <span className="text-[10px] text-slate-400">{new Date(reply.timestamp).toLocaleTimeString()}</span>
                    </div>
                    <p className="text-xs text-slate-600">{reply.content}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentThread;
