module.exports = {
  testTimeout: 30000,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/styles/**',
    '!**/node_modules/**',
    '!**/src/logger.ts',
    '!**/public/**'
  ],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@services/(.*)': '<rootDir>/src/services/$1',
    'tests/(.*)': '<rootDir>/tests/$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$': 'identity-obj-proxy'
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/public/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  testMatch: [
    "**/tests/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  testEnvironmentOptions: { resources: 'usable', runScripts: 'dangerously' },
};
