import { expect, test } from "@playwright/test";
test.describe("App", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test("Should_render", async ({ page }) => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    await expect(page.getByLabel("react-logo")).toBeVisible();
  });
});
