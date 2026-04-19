import { test, expect } from "@playwright/test";
test.describe("Dropdown Tests", () => {
  test("should select an option from the dropdown", async ({ page }) => {
    await page.goto(
      "https://www.testmuai.com/selenium-playground/select-dropdown-demo/",
    );
    await page.locator("#select-demo").click();
    // Select the option "Friday" from the dropdown using the selectOption method with the value "Friday"
    await page.locator("#select-demo").selectOption("Friday");
    await page.reload();
    await page.locator("#select-demo").selectOption({ index: 1 });
    await page.reload();
    await page.locator("#select-demo").selectOption({ label: "Monday" });
    await expect(page.locator("#select-demo")).toHaveValue("Monday");
    await page.reload();
    await page.locator("#select-demo").selectOption({ value: "Tuesday" });
    await expect(page.locator("#select-demo")).toHaveValue("Tuesday");
    await page.reload();
    await page.selectOption("#select-demo", "Tuesday");
    await expect(page.locator("#select-demo")).toHaveValue("Tuesday");
  });

  test("should select an option from the dropdown 1", async ({ page }) => {
    await page.goto(
      "https://www.testmuai.com/selenium-playground/select-dropdown-demo/",
    );
    await page.locator("#select-demo").click();
    // Select the option "Friday" from the dropdown using the selectOption method with the value "Friday"
    await page.locator("#select-demo").selectOption("Friday");
    await page.reload();
    await page.locator("#select-demo").selectOption({ index: 1 });
    await page.reload();
    await page.locator("#select-demo").selectOption({ label: "Monday" });
    await page.reload();
    await page.locator("#select-demo").selectOption({ value: "Tuesday" });
    await page.reload();
    await page.selectOption("#select-demo", "Tuesday");
  });
});

test.describe("login functionality", () => {});