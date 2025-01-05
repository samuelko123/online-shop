import { test, expect } from '@playwright/test';

test("When I click the CTA link, I will be redirected to the Product Listing Page.", async ({ page }) => {
  // Arrange
  await page.goto('http://localhost:5000');
  await expect(page).toHaveTitle("Online Shop");

  // Act
  const button = page.getByRole("button", { name: "Shop Now" });
  await button.click();

  // Assert
  const heading = page.getByRole('heading', { name: 'Products' })
  await expect(heading).toBeVisible();
});
