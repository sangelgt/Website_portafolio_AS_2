import { test, expect } from '@playwright/test';

test.describe('Visual Regression Testing', () => {
  const pages = [
    { name: 'Home', path: '/index.html' },
    { name: 'Methodology', path: '/methodology.html' },
    { name: 'Case Study', path: '/case-study.html' },
    { name: 'Recursos', path: '/recursos.html' },
    { name: 'Diagnostics', path: '/diagnostics.html' },
  ];

  for (const page of pages) {
    test(`Screenshot of ${page.name}`, async ({ page: playwrightPage }) => {
      await playwrightPage.goto(page.path);
      await expect(playwrightPage).toHaveScreenshot({ fullPage: true });
    });
  }
});
