// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GrpcWeb title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GrpcWeb/i);
    expect(titleElement).toBeInTheDocument();
});
