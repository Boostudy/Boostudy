import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './StudyList.css';
import './Blog.css';
import image from '../../../src/assets/icon/logo.svg';

const StudyList = () => {
  const navigate = useNavigate();

  const blogPosts = [
    { id: 1, title: 'Week1', description: '리액트 시작하기', imageUrl: image },
    { id: 2, title: 'Week2', description: 'This is the second post', imageUrl: image },
    { id: 3, title: 'Week3', description: 'This is the third post.', imageUrl: image },
    { id: 4, title: 'Week4', description: 'This is the fourth post.', imageUrl: image },
    { id: 5, title: 'Week5', description: 'This is the fifth post.', imageUrl: image },
    { id: 6, title: 'Week6', description: 'This is the sixth post.', imageUrl: image },
    { id: 7, title: 'Week7', description: 'This is the seventh post.', imageUrl: image },
    { id: 8, title: 'Week8', description: 'This is the eighth post.', imageUrl: image },
  ];

  const handlePostClick = (id) => {
    navigate(`/studylist/${id}`);
  };

  return (
    <div className="blog-container">
      <h1>스터디 목록</h1>
      <div className="blog-grid">
        {blogPosts.map(post => (
          <div 
            key={post.id} 
            className="blog-card" 
            onClick={() => handlePostClick(post.id)}
          >
          <div className="blog-image-container">
            <img src={post.imageUrl} alt={post.title} className="blog-image" />
          </div>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudyList;
