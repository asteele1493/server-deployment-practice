const server = require('./server');
const supertest = require('supertest');
const { default: expect } = require('expect');
// const { test } = require('media-typer');

const request = supertest(server);

test('home endpoint', async () => {
  const response = await request.get('/home');
  expect(response.text).toBe('Welcome home!');
});

test('bye endpoint', async () => {
  const response = await request.get('/bye');
  expect(response.text).toBe('See ya later, alligator!');
});
