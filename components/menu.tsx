import React from 'react';
import classNames from 'classnames';
import { Config } from '../logic/main';

type Props = {
  config: Config;
  setConfig: React.Dispatch<React.SetStateAction<Config>>;
  start: () => void;
  open: boolean;
}

const Menu = (props: Props): JSX.Element => {
  const {
    config,
    setConfig,
    start,
    open,
  } = props;

  return (
    <div
      id="menu"
      className={classNames(
        'bg-purple-900 fixed z-10 top-0 left-0 h-screen flex flex-col pt-20 px-4',
        { open },
      )}
    >
      <div className="flex justify-between my-1">
        <label htmlFor="width" className="text-purple-300 text-sm mr-4">
          Width
        </label>
        <input
          className="bg-purple-200 text-purple-700 rounded text-sm px-1 w-24"
          name="width"
          id="width"
          type="number"
          min="0"
          step="1"
          value={config.width}
          onChange={(event) => setConfig({
            ...config,
            width: parseInt(event.target.value, 10),
          })}
        >
        </input>
      </div>
      <div className="flex justify-between my-1">
        <label htmlFor="height" className="text-purple-300 text-sm mr-4">
          Height
        </label>
        <input
          className="bg-purple-200 text-purple-700 rounded text-sm px-1 w-24"
          name="height"
          id="height"
          type="number"
          min="0"
          step="1"
          value={config.height}
          onChange={(event) => setConfig({
            ...config,
            height: parseInt(event.target.value, 10),
          })}
        >
        </input>
      </div>
      <div className="flex justify-between my-1">
        <label htmlFor="rule" className="text-purple-300 text-sm mr-4">
          Rule
        </label>
        <select
          className="bg-purple-200 text-purple-700 rounded text-sm w-24"
          name="rule"
          id="rule"
          onChange={(event) => setConfig({
            ...config,
            rule: event.currentTarget.value,
          })}
        >
          <option value="30">30</option>
          <option value="90">90</option>
        </select>
      </div>
      <div className="flex justify-between my-1">
        <label htmlFor="initial-row" className="text-purple-300 text-sm mr-4">
          Initial row
        </label>
        <select
          className="bg-purple-200 text-purple-700 rounded text-sm w-24"
          name="initial-row"
          id="initial-row"
          onChange={(event) => setConfig({
            ...config,
            initialRow: event.currentTarget.value,
          })}
        >
          <option value="single-cell">Single cell</option>
          <option value="random">Random</option>
        </select>
      </div>
      <div className="flex justify-between my-1">
        <label htmlFor="pixel-size" className="text-purple-300 text-sm mr-4">
          Pixel size
        </label>
        <input
          className="bg-purple-200 text-purple-700 rounded text-sm px-1 w-24"
          name="pixel-size"
          id="pixel-size"
          type="number"
          min="0"
          step="1"
          value={config.pixelSize}
          onChange={(event) => setConfig({
            ...config,
            pixelSize: parseInt(event.target.value, 10),
          })}
        >
        </input>
      </div>
      <div className="flex justify-between my-1">
        <label htmlFor="delay" className="text-purple-300 text-sm mr-4">
          Delay
        </label>
        <input
          className="bg-purple-200 text-purple-700 rounded text-sm px-1 w-24"
          name="delay"
          id="delay"
          type="number"
          min="0"
          step="1"
          value={config.delay}
          onChange={(event) => setConfig({
            ...config,
            delay: parseInt(event.target.value, 10),
          })}
        >
        </input>
      </div>
      <button className="text-purple-300 hover:text-purple-200 font-bold rounded mt-8" onClick={start}>
        Start
      </button>
    </div>
  );
};

export default Menu;
