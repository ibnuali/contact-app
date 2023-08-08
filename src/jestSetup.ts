import "@testing-library/jest-dom";
import { fetch, Headers, Request, Response } from 'cross-fetch'
import { server } from "./api/mocks/server";
import { contactApi } from "./api/contactSlice";
import { setupStore } from "./store";

global.fetch = fetch
global.Headers = Headers
global.Request = Request
global.Response = Response

const store = setupStore({});

// Establish API mocking before all tests.
beforeAll(() => {
  server.listen();
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
  // This is the solution to clear RTK Query cache after each test
  store.dispatch(contactApi.util.resetApiState());
});

// Clean up after the tests are finished.
afterAll(() => server.close());
