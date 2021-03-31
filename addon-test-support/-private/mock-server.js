import { fetch } from 'whatwg-fetch';

let createMock = function(hostname, path, method, statusCode, response) {
  let origin = false;

  if (path.startsWith('http')) {
    const url = new URL(path);
    origin = url.origin;
    path = `${url.pathname}${url.search}`;
  }

  return fetch('/__mock-request', {
    method: 'post',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      hostname,
      path,
      method,
      statusCode,
      response,
      origin
    }),
  });
}

export let mockServer = {
  get(hostname, path, response, status = 200) {
    return createMock(hostname, path, "GET", status, response);
  },

  post(hostname, path, response, status = 200) {
    return createMock(hostname, path, "POST", status, response);
  },

  patch(hostname, path, response, status = 200) {
    return createMock(hostname, path, "PATCH", status, response);
  },

  put(hostname, path, response, status = 200) {
    return createMock(hostname, path, "PUT", status, response);
  },

  delete(hostname, path, response, status = 200) {
    return createMock(hostname, path, "DELETE", status, response);
  },

  cleanUp() {
    return fetch('/__cleanup-mocks');
  }
};
