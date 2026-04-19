import { test, expect } from "@playwright/test";

test("checkbox test", async ({ page }) => {
  await page.goto(
    "https://www.testmuai.com/selenium-playground/checkbox-demo/",
  );
  const checkbox1 = page.getByRole("checkbox", { name: " Click on check box" });
  await expect(checkbox1).not.toBeChecked();
  await checkbox1.check();
  await expect(checkbox1).toBeChecked();
  await checkbox1.uncheck();
  await expect(checkbox1).not.toBeChecked();
  //   <input type="checkbox" id="isAgeSelected" value="Yes" class="cb1-element">
  // await page.locator("#isAgeSelected").check();
  //   await expect(
  //     page.getByRole("checkbox", { name: " Click on check box" }),
  //   ).not.toBeChecked();
  //   await page.getByRole("checkbox", { name: " Click on check box" }).check();
  //   await expect(
  //     page.getByRole("checkbox", { name: " Click on check box" }),
  //   ).toBeChecked();
});