import React, { useState } from 'react';
import { Button, RadioGroup, FormControlLabel, Radio, Typography, Box } from '@mui/material';

const Quiz = ({ onSubmitQuiz }) => {
  const [answers, setAnswers] = useState({});
  const questions = [
    "How often do you exercise?",
    "Do you smoke?",
    "How many hours of sleep do you get?",
    // Add more questions...
  ];

  const handleChange = (index, value) => {
    setAnswers({
      ...answers,
      [index]: value,
    });
  };

  const handleSubmit = () => {
    onSubmitQuiz(answers);
  };

  return (
    <Box>
      {questions.map((question, index) => (
        <Box key={index} mb={2}>
          <Typography variant="h6">{question}</Typography>
          <RadioGroup
            onChange={(e) => handleChange(index, e.target.value)}
            value={answers[index] || ""}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Box>
      ))}
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Submit Quiz
      </Button>
    </Box>
  );
};

export default Quiz;
