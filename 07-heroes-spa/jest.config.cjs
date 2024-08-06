module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js']
}

// module.exports = {
//   transform: {
// 	"^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
//   },
//   transformIgnorePatterns: [
// 	"/node_modules/(?!query-string).+\\.js$"
//   ],
//   moduleNameMapper: {
// 	"\\.(css|less|scss|sass)$": "identity-obj-proxy"
//   },
//   testEnvironment: "jsdom"
// };

//Ambos generan error en AppRouter.test.jsx
