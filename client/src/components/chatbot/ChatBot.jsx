// components/ChatBot.jsx

import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Paper, 
  List, 
  ListItem, 
  ListItemText 
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'assistant', text: 'Hello! I am your Health Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const messagesEndRef = useRef(null);

  // Scroll to the bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('access_token'); // Adjust based on your auth implementation

      const response = await fetch('http://localhost:8000/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Include JWT token
        },
        body: JSON.stringify({ user_input: userMessage.text })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to get response from chatbot.');
      }

      const data = await response.json();
      const assistantMessage = { sender: 'assistant', text: data.response };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      console.error(err);
      setError(err.message || 'An unexpected error occurred.');
      const assistantMessage = { sender: 'assistant', text: 'Sorry, something went wrong. Please try again later.' };
      setMessages(prev => [...prev, assistantMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Box 
      sx={{
        maxWidth: '600px',
        margin: 'auto',
        padding: 2,
        mt: 5,
      }}
    >
      <Paper elevation={3} sx={{ padding: 2, height: '500px', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Health Assistant Chat
        </Typography>
        <Box 
          sx={{ 
            flexGrow: 1, 
            overflowY: 'auto', 
            padding: 1,
            backgroundColor: '#f5f5f5',
            borderRadius: 1,
          }}
        >
          <List>
            {messages.map((msg, index) => (
              <ListItem 
                key={index} 
                sx={{ 
                  display: 'flex', 
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' 
                }}
              >
                <Paper 
                  sx={{ 
                    padding: 1.5, 
                    maxWidth: '80%', 
                    backgroundColor: msg.sender === 'user' ? '#1976d2' : '#e0e0e0',
                    color: msg.sender === 'user' ? '#fff' : '#000',
                  }}
                >
                  <ListItemText 
                    primary={msg.text} 
                  />
                </Paper>
              </ListItem>
            ))}
            <div ref={messagesEndRef} />
          </List>
        </Box>
        {error && (
          <Typography color="error" variant="body2" align="center" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
        <Box sx={{ display: 'flex', mt: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Type your message..."
            fullWidth
            multiline
            maxRows={4}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <Button 
            variant="contained" 
            color="primary" 
            endIcon={<SendIcon />} 
            sx={{ ml: 1 }}
            onClick={handleSend}
            disabled={loading}
          >
            Send
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ChatBot;
