module.exports = {
  globals: {
    'babel-jest': {
      diagnostics: false,
    },
  },
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['jsx', 'js', 'json', 'ts', 'tsx', 'node'],
  roots: ['<rootDir>/src/'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!**/node_modules/**'],
  coveragePathIgnorePatterns: [],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  testMatch: ['**/**/*.(test|spec).(js|ts)?(x)'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
