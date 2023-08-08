export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  rootDir: "src",
  testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
  setupFilesAfterEnv: ["<rootDir>/jestSetup.ts"],
  moduleNameMapper: {
    "^src/(.+)$": "<rootDir>/$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.ts",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
