import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const FriendListItem = ({avatar, isOnline, name}) => (
  <li className="flex items-center bg-white m-2 px-3 py-2 shadow shadow-slate-500 gap-2">
    <span className={clsx('border-8 w-1 h-1 rounded-full', isOnline ? 'border-green-600' : 'border-red-500')}></span>
    <img className="rounded bg-yellow-900" src={avatar} alt="User avatar" width="48" />
    <p className="text-xl">{name}</p>
  </li>
);

export const FriendList = ({friends}) => (
  <ul className="bg-white w-72">
    {friends.map((friend) => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
);



const friendPropType = {
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

FriendListItem.propTypes = friendPropType;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape(friendPropType)),
}

