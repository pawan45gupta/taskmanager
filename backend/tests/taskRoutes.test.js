const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('../routes/taskRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/api/tasks', taskRoutes);

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Task API', () => {
  it('should create a new task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({
        title: 'Test Task',
        description: 'Test Description',
        status: 'To Do'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  it('should fetch all tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  // Additional tests for update and delete
});
