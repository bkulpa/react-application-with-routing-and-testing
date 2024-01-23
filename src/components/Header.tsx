import { NavLink } from 'react-router-dom';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <>
      <NavLink className='navlink' to="/">Home</NavLink>
      <NavLink className='navlink' to="/about">About</NavLink>
      <NavLink className='navlink' to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </>
  );
};
