import './App.css';
import TwitterFollowCard from './TwitterFollowCard';

function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <div className='App'>
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={true}
        userName='SheylaPDV'
        name='Sheyla Perez del Valle'
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing={true}
        userName='AlbertoBuenavida'
        name='Alberto Buenavida'
      />
    </div>
  );
}

export default App;
