import { render } from '@testing-library/react';
import { About } from '../About';

describe('About', () => {
    it('should render', () => {
        // before
        const { asFragment } = render(<About title="About Us">children</About>);
        // result
        expect(asFragment()).toMatchSnapshot();
    });
});