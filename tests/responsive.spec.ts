import { test, expect } from '@playwright/test';

test.describe('Responsive Layout Validation', () => {
  const viewports = [
    { width: 320, height: 480 }, // Mobile
    { width: 768, height: 1024 }, // Tablet
    { width: 1280, height: 720 }, // Desktop
  ];

  for (const viewport of viewports) {
    test(`should not have horizontal scroll on recursos.html at ${viewport.width}x${viewport.height}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto('/recursos.html');

      const hasHorizontalScroll = await page.evaluate(() => {
        return document.body.scrollWidth > document.body.clientWidth;
      });

      expect(hasHorizontalScroll).toBe(false);
    });
  }
});
