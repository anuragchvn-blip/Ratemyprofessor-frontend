import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [department, setDepartment] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await axios.get('/api/reviews', { params: { department, sort } });
      setReviews(data);
    };
    fetchReviews();
  }, [department, sort]);

  return (
    <div>
      <div>
        <label>Filter by Department</label>
        <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
      </div>
      <div>
        <label>Sort by</label>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Select</option>
          <option value="most_helpful">Most Helpful</option>
        </select>
      </div>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <h3>{review.professor}</h3>
            <p>Department: {review.department}</p>
            <p>Rating: {review.rating}</p>
            <p>{review.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
