import { FC } from 'react';
const currentYear: number = new Date().getFullYear();

export const Footer: FC = () => {
    return (
        <p>Copyright © {currentYear} by Bartosz Kulpa </p>
    );
};
