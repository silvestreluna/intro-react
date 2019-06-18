import React from 'react';


import './GoatCorral.scss';

class GoatCorral extends React.Component {
  render() {
    return (
      <div>
        <button>GOATCORRAL</button>
        {console.error(this.props.goats)}
      </div>
    );
  }
}

export default GoatCorral;
