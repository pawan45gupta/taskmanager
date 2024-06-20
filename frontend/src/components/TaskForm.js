import React, { useState } from 'react';
import { Paper, Grid, TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newTask = { title, description, status };
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}`, newTask);
        addTask(response.data);
        setTitle('');
        setDescription('');
        setStatus('To Do');
      } catch (error) {
        console.error('There was an error creating the task!', error);
      }
    }
  };

  return (
    <Paper style={{ padding: '16px', marginBottom: '16px' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField 
              label="Title" 
              fullWidth 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel shrink>Status</InputLabel>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                label="Status"
              >
                <MenuItem value="To Do">To Do</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label="Description" 
              fullWidth 
              multiline 
              rows={4} 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add Task
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default TaskForm;
