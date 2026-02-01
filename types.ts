
export enum PostCategory {
  POLICY = 'Policy',
  ETHICS = 'Ethics',
  TECH = 'Technology',
  ACADEMIC_INTEGRITY = 'Academic Integrity',
  NEWS = 'News',
  GENERAL = 'General'
}

export interface User {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Comment {
  id: string;
  postId: string;
  parentId?: string; // For replies
  author: User;
  content: string;
  timestamp: Date;
  likes: number;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: User;
  category: PostCategory;
  timestamp: Date;
  likes: number;
  commentsCount: number;
  tags: string[];
}

export interface AiMessage {
  role: 'user' | 'model';
  text: string;
}
