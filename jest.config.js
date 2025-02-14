module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
      '^@/components/(.*)$': '<rootDir>/src/components/$1',
      '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
      '^@/utils/(.*)$': '<rootDir>/src/utils/$1'
    },
    collectCoverageFrom: [
      'src/**/*.{ts,tsx}',
      '!src/**/*.d.ts',
      '!src/**/*.stories.{ts,tsx}'
    ]
  }