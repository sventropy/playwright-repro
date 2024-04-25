import { defineConfig, devices } from "@playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  // Global output folder for screenshots, videos, traces, etc.
  outputDir: "playwright/output",
  // Glob patterns or regular expressions that match test files.
  testMatch: "*.spec.ts",
  /* Run tests in files in parallel */
  fullyParallel: false,
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["line"],
    ["html", { open: "never", outputFolder: "playwright/reports/" }],
    ["junit", { outputFile: "playwright/reports/e2e-junit-results.xml" }],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    ignoreHTTPSErrors: true,
    locale: "en",
    /* Collect trace and video when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    video: "on-first-retry",
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  /* Run your local dev server before starting the tests */
  webServer: {
    command: `npm run start`,
    url: "http://localhost:3000",
    ignoreHTTPSErrors: true,
    timeout: 60 * 1000,
  },
});
