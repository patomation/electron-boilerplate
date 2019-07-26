import React from "react";

import ReduxConsumerExample from './components/ReduxConsumerExample.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (
      <div>
        <header>
          <h1>React + Redux</h1>
          <ReduxConsumerExample/>
        </header>

      </div>

    );
  }
}
