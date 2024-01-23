import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../Header';
import App from '../../App'

describe('Navlinks', () => {
    it('should show About component for /about router', () => {
        // before
        render(<BrowserRouter><Header /></BrowserRouter>);
        fireEvent.click(screen.getByText(/About/));
        render(<App />);
        // result
        expect(screen.getByText(/About Us/)).toBeInTheDocument();
    });

    it('should show Home component for / router', () => {
        // before
        render(<BrowserRouter><Header /></BrowserRouter>);
        fireEvent.click(screen.getByText(/Home/));
        render(<App />);
        // result
        expect(screen.getByText(/React Application with Routing and Testing/)).toBeInTheDocument();
    });

    it('should show Projects component for /projects router', () => {
        // before
        render(<BrowserRouter><Header /></BrowserRouter>);
        fireEvent.click(screen.getByText(/Projects/));
        render(<App />);
        // result
        expect(screen.getByText(/Check our Projects/)).toBeInTheDocument();
    });

    it('should show Contact component for /contact router', () => {
        // before
        render(<BrowserRouter><Header /></BrowserRouter>);
        fireEvent.click(screen.getByText(/Contact/));
        render(<App />);
        // result
        expect(screen.getByText(/Contact Us/)).toBeInTheDocument();
    });
});