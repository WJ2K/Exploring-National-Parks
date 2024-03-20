import React, { useState } from 'react';

const ReviewForm = ({ onReviewSubmit }) => {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assuming that you still want to send an object, in case you add more fields later
    const reviewData = { review };

    onReviewSubmit(reviewData);
    setReview(''); // Reset the review text area
  };

  return (
    <div className="review-form-container">
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            name="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-review-btn">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
