import React from 'react';
import { Sliders } from 'react-feather';
import classNames from 'classnames';

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuButton = (props: Props): JSX.Element => {
  const { open, setOpen } = props;
  return (
    <button
      id="menu-button"
      className={classNames(
        'fixed top-0 left-0 z-20 m-2 p-2 rounded-full',
        { open },
      )}
      onClick={() => setOpen(!open)}
    >
      <Sliders size={30} />
    </button>
  );
};

export default MenuButton;
