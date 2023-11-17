import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any additional actions (e.g., send data to server) here
    // For simplicity, let's just log the form data to the console
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      feedback: '',
    });
    // Display a submission message (you can replace this with a modal or redirect)
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <h1>Abhyaz Internship Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Feedback:
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
