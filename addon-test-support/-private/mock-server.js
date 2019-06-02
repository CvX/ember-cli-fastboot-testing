import { fetch } from 'whatwg-fetch';

let createMock = async function(hostname, path, method, statusCode, response) {
  return await fetch('/__mock-request', {
    method: 'post',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      hostname,
      path,
      method,
      statusCode,
      response
    }),
  });
}

export let mockServer = {
  async get(hostname, path, response, status = 200) {
    return createMock(hostname, path, "GET", status, response);
  },

  async post(hostname, path, response, status = 200) {
    return createMock(hostname, path, "POST", status, response);
  },

  async patch(hostname, path, response, status = 200) {
    return createMock(hostname, path, "PATCH", status, response);
  },

  async put(hostname, path, response, status = 200) {
    return createMock(hostname, path, "PUT", status, response);
  },

  async delete(hostname, path, response, status = 200) {
    return createMock(hostname, path, "DELETE", status, response);
  },

  async cleanUp() {
    return fetch('/__cleanup-mocks');
  }
};
