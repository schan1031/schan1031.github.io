import React from 'react';

export default class DraftRoyale extends React.Component {
  render() {
    return(
      <div className='main-panel animated fadeIn'>
        <h2>DraftRoyale</h2>
        <a target='_blank' href='http://www.draftroyale.co/'>
          <img src='./assets/DraftRoyale.png' width='600'/>
        </a>
        <p>DraftRoyale is a web-app inspired by daily fantasy games, such as DraftKings. DraftRoyale requires no real money to play. DraftRoyale is built on a Ruby and Rails backend, with a React/Redux cycle front end.</p>
      </div>
    );
  }
}
