import React from 'react';
import { Sliders } from 'react-feather';

const MenuButton = (): JSX.Element => (
  <button className="fixed top-0 left-0 z-20 text-purple-200 m-4">
    <Sliders size={30} />
  </button>
);

export default MenuButton;
