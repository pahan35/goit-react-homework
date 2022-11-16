import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const COLOR_PALLET = ['bg-cyan-500', 'bg-orange-500', 'bg-purple-500', 'bg-rose-500', 'bg-sky-400']

class ColorPicker {
  _colors = [];

  constructor(colors) {
    this._colors = [...colors];
  }

  pick() {
    if (this._colors.length === 0) {
      throw new Error('No colors left');
    }
    const colorIndex = Math.floor(Math.random() * this._colors.length)
    const color = this._colors[colorIndex];
    this._colors.splice(colorIndex, 1);
    return color;
  }
}

const StatItem = ({colorClass, label, percentage}) => (
  <li className={clsx('flex flex-col py-2 px-4', colorClass)}>
    <span className="text-sm text-center">{label}</span>
    <span className="text-xl text-center">{percentage}%</span>
  </li>
)

export const Statistics = ({stats, title}) => {
  const statsWithColor = useMemo(() => {
    const colorPicker = new ColorPicker(COLOR_PALLET);
    return stats.map((stat) => ({ ...stat, colorClass: colorPicker.pick() }));
  }, [stats])

  return (
    <section className="w-72 min-w-fit flex flex-col items-center">
      {title && <h2 className="uppercase text-slate-500 text-xl bg-white font-bold w-full p-6 text-center">{title}</h2>}

      <ul className="text-white grid grid-flow-col auto-cols-fr min-w-full">
        {statsWithColor.map(({id, ...stat}) => (
          <StatItem key={id} {...stat} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
  title: PropTypes.string,
}
