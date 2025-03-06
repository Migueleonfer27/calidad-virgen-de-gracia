export default {
    testEnvironment: 'node',
    testMatch: ["**/tests/**/*.test.[jt]s", "**/tests/**/*.test.cjs"],
    transform: {},
    moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1' 
    },
    globals: {
    'jest': true
    }
};