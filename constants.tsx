
import { Post, PostCategory, User, Comment } from './types';

export const SVSU_COLORS = {
  red: '#A00000',
  blue: '#003366',
  white: '#FFFFFF',
  gray: '#F3F4F6'
};

export const MOCK_USERS: User[] = [
  { id: 'u1', name: 'Dr. Jane Smith', role: 'Taskforce Chair', avatar: 'https://picsum.photos/seed/jane/100/100' },
  { id: 'u2', name: 'Prof. Mark Davis', role: 'CS Department', avatar: 'https://picsum.photos/seed/mark/100/100' },
  { id: 'u3', name: 'Sarah Miller', role: 'SVSU Student Rep', avatar: 'https://picsum.photos/seed/sarah/100/100' },
  { id: 'curr', name: 'Taskforce Member', role: 'Faculty', avatar: 'https://picsum.photos/seed/you/100/100' }
];

export const INITIAL_POSTS: Post[] = [
  {
    id: 'p1',
    title: 'New Guidelines for Generative AI in Composition 101',
    content: 'We are proposing a structured approach to how students use LLMs for drafting. The goal is to encourage augmentation rather than replacement.',
    author: MOCK_USERS[0],
    category: PostCategory.ACADEMIC_INTEGRITY,
    timestamp: new Date(Date.now() - 86400000 * 2),
    likes: 24,
    commentsCount: 3,
    tags: ['writing', 'policy', 'human-in-the-loop']
  },
  {
    id: 'p2',
    title: 'SVSU GPU Cluster Expansion for Research',
    content: 'Great news! The university has approved the budget for 8 additional H100 nodes to support multi-modal research initiatives.',
    author: MOCK_USERS[1],
    category: PostCategory.TECH,
    timestamp: new Date(Date.now() - 86400000 * 5),
    likes: 45,
    commentsCount: 1,
    tags: ['hardware', 'research', 'funding']
  }
];

export const INITIAL_COMMENTS: Comment[] = [
  {
    id: 'c1',
    postId: 'p1',
    author: MOCK_USERS[1],
    content: 'This aligns well with what we discussed in the last faculty senate meeting.',
    timestamp: new Date(Date.now() - 86400000 * 1.5),
    likes: 5
  },
  {
    id: 'c2',
    postId: 'p1',
    parentId: 'c1',
    author: MOCK_USERS[2],
    content: 'Students would appreciate clear examples of what counts as "augmentation".',
    timestamp: new Date(Date.now() - 86400000 * 1.2),
    likes: 8
  }
];
