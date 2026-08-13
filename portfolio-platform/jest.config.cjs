module.exports = {
  testEnvironment: "jsdom",

  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setup.js"
  ],

  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },

  moduleFileExtensions: [
    "js",
    "jsx"
  ]
};