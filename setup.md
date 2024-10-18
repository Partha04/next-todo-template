# Setup

# Next js

```bash
npx create-next-app <app-name>
```

# Testing

## Jest & React testing library

- Install jest and RTL dependencies

  ```bash
  npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
  ```

- Create a fresh jest config file using

  ```bash
  npm init jest@latest
  ```

- Update the config by using `nextJest`

  ```js
  import type { Config } from "jest";
  import nextJest from "next/jest.js";

  const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: "./",
  });

  // Add any custom config to be passed to Jest
  const config: Config = {
    coverageProvider: "v8",
    testEnvironment: "jsdom",
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  };

  // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
  export default createJestConfig(config);
  ```

- Handling Absolute Imports and Module Path Aliases

  ```json
  moduleNameMapper: {
  // ...
  '^@/components/(.*)$': '<rootDir>/components/$1',
  }
  ```
