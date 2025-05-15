// src/setupTests.js

// Mock window.matchMedia for Jest environment
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),    // deprecated, but still sometimes used
    removeListener: jest.fn(), // deprecated, but still sometimes used
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock Firebase Analytics to avoid IndexedDB and browser issues in Jest
jest.mock('firebase/analytics', () => ({
  getAnalytics: jest.fn(() => null),
  isSupported: jest.fn(() => Promise.resolve(false)),
}));
