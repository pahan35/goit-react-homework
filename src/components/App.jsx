import { friends, statistics, transactions, user } from '../data';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';

export const App = () => {
  return (
    <div
      className="bg-slate-200 flex flex-col py-24 gap-24 overflow-scroll"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <div className="bg-white p-2">
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
