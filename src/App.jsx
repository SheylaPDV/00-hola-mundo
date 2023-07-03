import './App.css';
function App() {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de Sheyla'
          src='https://unavatar.io/twitter/kikobeats'
        />
        <div className='tw-followCard-info'>
          <strong>Sheyla Pérez del Valle</strong>
          <span className='tw-followCard-infoUserName'>@sheylapdv</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>Seguir</button>
      </aside>
    </article>
  );
}

export default App;
