import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const ReviewForm = () => {
  const [professor, setProfessor] = useState('');
  const [department, setDepartment] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = { professor, department, rating, review };
    await axios.post('/api/reviews', newReview);
    // Reset form
    setProfessor('');
    setDepartment('');
    setRating(0);
    setReview('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="professor">Professor</Label>
        <Input type="text" name="professor" id="professor" value={professor} onChange={(e) => setProfessor(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label for="department">Department</Label>
        <Input type="text" name="department" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <Label for="rating">Rating</Label>
        <Input type="number" name="rating" id="rating" value={rating} onChange={(e) => setRating(e.target.value)} required min="1" max="5" />
      </FormGroup>
      <FormGroup>
        <Label for="review">Review</Label>
        <Input type="textarea" name="review" id="review" value={review} onChange={(e) => setReview(e.target.value)} required />
      </FormGroup>
      <Button type="submit" color="primary">Submit Review</Button>
    </Form>
  );
};

export default ReviewForm;
