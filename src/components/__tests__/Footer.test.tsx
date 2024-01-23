import { render } from '@testing-library/react';
import { Footer } from '../Footer';

describe('Footer', () => {
    it('should render', () => {
        // before
        const { asFragment } = render(<Footer />);
        // result
        expect(asFragment()).toMatchSnapshot();
    });
});