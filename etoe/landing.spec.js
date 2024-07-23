// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("https://my-web-app-sigma.vercel.app/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Create Next App");
});
test("check header text", async ({ page }) => {
  await page.goto("https://my-web-app-sigma.vercel.app/");

  const eleRef = await page.getByTestId("header");
  await expect(eleRef).toHaveText("My First React Js App using Next Js");
});
test("check footer text", async ({ page }) => {
  await page.goto("https://my-web-app-sigma.vercel.app/");

  await expect(page.getByText(/belongs to Redla/i)).toBeVisible();
});
