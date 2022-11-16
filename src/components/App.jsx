import { user } from '../data';
import { Profile } from './Profile';

export const App = () => {
  return (
    <div
      className="bg-slate-200"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile {...user} />
    </div>
  );
};
