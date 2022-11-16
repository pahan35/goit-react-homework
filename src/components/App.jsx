import { friends, statistics, user } from '../data';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';

export const App = () => {
  return (
    <div
      className="bg-slate-200 flex flex-col py-24 gap-24 overflow-scroll"
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
    </div>
  );
};
