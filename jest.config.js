module.exports = {
  roots: [
    '<rootDir>/tests', // 测试目录
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // 匹配 .ts 或者 .tsx 结尾的文件
  },
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/tests/mocks/svgFileMock.ts',
  },
  testEnvironment: 'jsdom',
  coverageDirectory: '<rootDir>/tests/coverage',
  collectCoverage: true, // 统计覆盖率
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/tests/',
    '<rootDir>/dist/',
  ],
};
