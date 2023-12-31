import './App.css';
import PropTypes from 'prop-types';
function TwitterFollowCard({ formatUserName, userName, name }) {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de Sheyla'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>
            {formatUserName(userName)}
          </span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>Seguir</button>
      </aside>
    </article>
  );
}

TwitterFollowCard.propTypes = {
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  formatUserName: PropTypes.string.isRequired,
};

export default TwitterFollowCard;
