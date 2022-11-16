import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const StatItem = ({isFirst, title, value}) =>
  (<li className={clsx('flex flex-col items-center py-4 w-24', !isFirst && 'border-l-2 border-solid border-slate-200')}>
    <span className='block text-sm text-slate-400'>{title}</span>
    <span className='font-bold text-base'>{value}</span>
  </li>)

export const Profile = ({avatar, username, location, stats, tag}) => (
  <div className="flex w-72 flex-col items-center shadow-xl shadow-slate-300">
    <div className="flex flex-col items-center bg-white p-8 w-full">
      <img
        src={avatar}
        alt="User avatar"
        className='rounded-full w-32 mb-8'
      />
      <p className="font-bold text-black text-xl mb-1">{username}</p>
      <p className="text-slate-400 text-base mb-1">@{tag}</p>
      <p className="text-slate-400 text-base">{location}</p>
    </div>

    <ul className='flex bg-slate-100 border-solid border-t-2 border-slate-200'>
      {[
        ['Followers', stats.followers],
        ['Views', stats.views],
        ['Likes', stats.likes],
      ].map(([title, value], i) => <StatItem key={title} isFirst={i === 0} {...{title, value}} />)}
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
}
