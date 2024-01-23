import { render } from '@testing-library/react';
import { Projects } from '../Projects';

describe('Projects', () => {
    it('should render', () => {
        // before
        const { asFragment } = render(<Projects />);
        // result
        expect(asFragment()).toMatchSnapshot();
    });
});