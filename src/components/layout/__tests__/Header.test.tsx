import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '../Header';

describe('Header component', () => {
  it('toggles the mobile menu on button click', () => {
    render(<Header />);

    // Initially, the mobile menu should be hidden
    const mobileMenu = screen.queryByRole('navigation', { name: /mobile navigation/i });
    expect(mobileMenu).toBeNull();

    // Find the menu button
    const menuButton = screen.getByLabelText(/toggle menu/i);

    // Click the button to open the menu
    fireEvent.click(menuButton);

    // Now the mobile menu should be visible
    const mobileMenuVisible = screen.getByRole('navigation', { name: /mobile navigation/i });
    expect(mobileMenuVisible).toBeInTheDocument();

    // Click the button again to close the menu
    fireEvent.click(menuButton);

    // The mobile menu should be hidden again
    const mobileMenuHidden = screen.queryByRole('navigation', { name: /mobile navigation/i });
    expect(mobileMenuHidden).toBeNull();
  });
});
