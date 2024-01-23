import { render } from '@testing-library/react';
import { Contact } from '../Contact';

describe('Contact', () => {
    it('should render Submit button', () => {
        const { getByTestId } = render(<Contact />);
        const form = getByTestId('form');
        expect(form).toBeTruthy();
    });

    it('should render Name input', () => {
        const { getByTestId } = render(<Contact />);
        const name = getByTestId('name');
        expect(name).toBeTruthy();
    });

    it('should render Email input', () => {
        const { getByTestId } = render(<Contact />);
        const email = getByTestId('email');
        expect(email).toBeTruthy();
    });

    it('should render Message input', () => {
        const { getByTestId } = render(<Contact />);
        const message = getByTestId('message');
        expect(message).toBeTruthy();
    });
});