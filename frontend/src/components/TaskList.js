import React from 'react';
import { Paper, Grid, Typography, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';

const TaskList = ({ tasks, updateTaskStatus, deleteTask }) => {

  const handleStatusChange = async (index, status) => {
    const updatedTask = { ...tasks[index], status };
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/${tasks[index]._id}`, updatedTask);
      updateTaskStatus(index, status);
    } catch (error) {
      console.error('There was an error updating the task!', error);
    }
  };

  const handleDelete = async (index) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/${tasks[index]._id}`);
      deleteTask(index);
    } catch (error) {
      console.error('There was an error deleting the task!', error);
    }
  };

  return (
    <Grid container spacing={2}>
      {tasks.map((task, index) => (
        <Grid item xs={12} key={task._id}>
          <Paper style={{ padding: '16px', position: 'relative' }}>
            <Typography variant="h6">{task.title}</Typography>
            <Typography variant="body1">{task.description}</Typography>
            <FormControl fullWidth style={{ marginTop: '16px' }}>
              <InputLabel shrink>Status</InputLabel>
              <Select
                value={task.status}
                onChange={(e) => handleStatusChange(index, e.target.value)}
                label="Status"
              >
                <MenuItem value="To Do">To Do</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
              </Select>
            </FormControl>
            <Button 
              variant="contained" 
              color="secondary" 
              style={{ position: 'absolute', top: '16px', right: '16px' }}
              onClick={() => handleDelete(index)}
            >
              Delete
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default TaskList;
