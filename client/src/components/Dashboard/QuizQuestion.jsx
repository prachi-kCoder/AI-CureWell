import React from 'react';
import { TextField, Typography, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const questions = [
  {
    question: 'What is your weight?',
    type: 'input',
    placeholder: 'e.g., 155 lb',
    unit: 'lb',
  },
  {
    question: 'What is your height?',
    type: 'input',
    placeholder: 'e.g., 5 ft 8 in',
    unit: 'ft/in',
  },
  {
    question: "What's your primary racial or ethnic group ?{Different racial and ethnic group have varied health tendencies }",
    type: 'input',
    placeholder: 'eg : east asian / southasian',
    unit: 'ft/in',
  },
  {
    question: 'Sex assigned at birth ',
    type: 'radio',
    options: ['Male', 'Female',"Other"],
  },
  {
    question: 'Any Chronic or Past Health condition?',
    type: 'radio',
    options: ['Yes', 'No'],
  },{
    question: 'Medication or Surgerical History ?',
    type: 'radio',
    options: ['Yes', 'No'],

  }
];

const QuizQuestion = ({ step }) => {
  const question = questions[step];

  return (
    <div style={{ animation: 'fadeIn 0.5s', position: 'relative', zIndex: 10 }}>
      <Typography variant="h6">{question.question}</Typography>

      {question.type === 'input' ? (
        <FormControl fullWidth>
          <TextField placeholder={question.placeholder} label={`Your answer (${question.unit})`} />
        </FormControl>
      ) : question.type === 'radio' ? (
        <FormControl component="fieldset">
          <RadioGroup row>
            {question.options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </FormControl>
      ) : null}
    </div>
  );
};

export default QuizQuestion;
