import './App.css';
import TwitterFollowCard from './TwitterFollowCard';

function App() {
  const format = (userName) => `@${userName}`;

  return (
    <div className='App'>
      <TwitterFollowCard
        formatUserName={format}
        isFollowing={true}
        userName='SheylaPDV'
        name='Sheyla Perez del Valle'
      />
      <TwitterFollowCard
        formatUserName={format}
        isFollowing={true}
        userName='AlbertoBuenavida'
        name='Alberto Buenavida'
      />
    </div>
  );
}

export default App;
