import { test, expect } from '@playwright/test';

test.describe('CTA Redirection', () => {
  test('should redirect to the diagnostics page from the main CTAs', async ({ page }) => {
    // Navigate to the home page
    await page.goto('/index.html');

    // Click the "Obtener mi Diagnóstico" button
    await page.click('text=Obtener mi Diagnóstico');

    // Verify the URL
    await expect(page).toHaveURL('/diagnostics.html');

    // Go back to the home page
    await page.goto('/index.html');

    // Click the "Iniciar Auditoría" button
    await page.click('text=Iniciar Auditoría');

    // Verify the URL
    await expect(page).toHaveURL('/diagnostics.html');
  });
});
