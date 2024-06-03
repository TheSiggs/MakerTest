import React from 'react';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('renders the store title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Kilkimi Whiskies Online Store/i);
    expect(titleElement).toBeInTheDocument();
});

test('adds items to the cart', async () => {
    render(<App />);

    // Wait for the inventory to be populated
    await waitFor(() => {
        expect(screen.getAllByText('Add to Cart').length).toBeGreaterThan(0);
    });

    const addButton = screen.getAllByText('Add to Cart')[0];
    act(() => {
        fireEvent.click(addButton);
    });

    const cartItem = screen.getAllByText(/Arran 10 years old/i)[1];
    expect(cartItem).toBeInTheDocument();

    const cartTotal = document.getElementById('cart-total');
    expect(cartTotal).toHaveTextContent('Total: $79.99');
});

test('calculates 4 for 3 discount correctly', async () => {
    render(<App />);

    // Wait for the inventory to be populated
    await waitFor(() => {
        expect(screen.getAllByText('Add to Cart').length).toBeGreaterThan(0);
    });

    const addButtons = screen.getAllByText('Add to Cart');
    const johnnieWalkerButton = addButtons[2];


    act(() => {
        // Add 4 Johnnie Walker Green Label to the cart
        for (let i = 0; i < 4; i++) {
            fireEvent.click(johnnieWalkerButton);
        }
    });

    const cartTotal = document.getElementById('cart-total');
    expect(cartTotal).toHaveTextContent('Total: $227.97');
});

test('adds a free bottle of Deanston if total exceeds $500', async () => {
    render(<App />);

    // Wait for the inventory to be populated
    await waitFor(() => {
        expect(screen.getAllByText('Add to Cart').length).toBeGreaterThan(0);
    });

    const addButtons = screen.getAllByText('Add to Cart');
    const arranButton = addButtons[0];

    // Add 8 Arran 10 years old to the cart (79.99 * 8 = 639.92)
    act(() => {
        for (let i = 0; i < 8; i++) {
            fireEvent.click(arranButton);
        }
    });

    const cartItem = screen.getAllByText(/Deanston 12 years old/i)[1];
    expect(cartItem).toBeInTheDocument();

    const cartTotal = document.getElementById('cart-total');
    expect(cartTotal).toHaveTextContent('Total: $639.92');
});

test('can only add one Kilkerran 12 years old', async () => {
    render(<App />);

    // Wait for the inventory to be populated
    await waitFor(() => {
        expect(screen.getAllByText('Add to Cart').length).toBeGreaterThan(0);
    });

    const addButtons = screen.getAllByText('Add to Cart');
    const kilkerranButton = addButtons[3];


    act(() => {
        for (let i = 0; i < 4; i++) {
            fireEvent.click(kilkerranButton);
        }
    });

    const cartTotal = document.getElementById('cart-total');
    expect(cartTotal).toHaveTextContent('Total: $89.99');
});

test('bulk buy works', async () => {
    render(<App />);

    // Wait for the inventory to be populated
    await waitFor(() => {
        expect(screen.getAllByText('Add to Cart').length).toBeGreaterThan(0);
    });

    const addButtons = screen.getAllByText('Add to Cart');
    const arranButton = addButtons[0];


    act(() => {
        for (let i = 0; i < 13; i++) {
            fireEvent.click(arranButton);
        }
    });

    const cartTotal = document.getElementById('cart-total');
    expect(cartTotal).toHaveTextContent('Total: $975.00');
    expect(screen.getAllByText('$75.00'));
});