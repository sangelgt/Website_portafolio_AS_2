import { test, expect } from '@playwright/test';

test.describe('Header Mobile Navigation', () => {
 feat/mobile-nav-cta-fix-12874876577088451490
 main
  const pages = [
    { name: 'Home', path: '/index.html' },
    { name: 'Methodology', path: '/methodology.html' },
    { name: 'Diagnostics', path: '/diagnostics.html' },
  ];

  for (const pageInfo of pages) {
    test(`should toggle the mobile menu on ${pageInfo.name} page`, async ({ page }) => {
      // Navigate to the page
      await page.goto(pageInfo.path);

      // Set the viewport to a mobile size
      await page.setViewportSize({ width: 375, height: 667 });

      // Find the mobile menu button and the mobile menu
      const mobileMenuButton = page.locator('#mobile-menu-button');
      const mobileMenu = page.locator('#mobile-menu');

      // Initially, the mobile menu should be hidden
      await expect(mobileMenu).toBeHidden();

      // Click the mobile menu button to show the menu
      await mobileMenuButton.click();

      // Now, the mobile menu should be visible
      await expect(mobileMenu).toBeVisible();

      // Click the mobile menu button again to hide the menu
      await mobileMenuButton.click();

      // Finally, the mobile menu should be hidden again
      await expect(mobileMenu).toBeHidden();
    });
  }
 feat/mobile-nav-cta-fix-12874876577088451490
 main
});
