import { FC, ReactNode } from 'react';

export type TProps = {
  title: string;
  children: ReactNode;
};

export const Home: FC<TProps> = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      <img src={require("../img/ts.jpg")} alt={"TypeScript"} />
      {children}
    </>
  );
};
