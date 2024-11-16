import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Feedback.css';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = {};

    // Simple validation
    if (!name) formErrors.name = 'Name is required';
    if (!email) formErrors.email = 'Email is required';
    if (!rating) formErrors.rating = 'Rating is required';
    if (!comments) formErrors.comments = 'Comments are required';

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Submit form (you can integrate with backend here)
      alert('Feedback submitted successfully');
      resetForm();
      navigate('/');
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setRating('');
    setComments('');
    setErrors({});
  };

  return (
    <div className='feed-home'>
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors.rating && <p className="error">{errors.rating}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Your Comments"
          />
          {errors.comments && <p className="error">{errors.comments}</p>}
        </div>

        <div className="form-group">
          <button type="submit">Submit Feedback</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default FeedbackForm;
