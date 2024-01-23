import { FC, ReactNode } from 'react';

export type TProps = {
    title: string;
    children: ReactNode;
};

export const About: FC<TProps> = ({ title, children }) => {
    return (
        <>
            <h2>{title}</h2>
            {children}
        </>
    )
}