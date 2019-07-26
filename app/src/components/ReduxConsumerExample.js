import React from "react";
import PropTypes from 'prop-types';
import { ReactReduxContext } from 'react-redux'
import { connect } from 'react-redux';

import {
  buttonClickExample
} from '../actions/';

//Connect redux state to props
export default connect( (state) => {
  return {
    example: state.example
   }
})(class ConsumerExample extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){

    return(
      <ReactReduxContext.Consumer>
        {({ store }) =>
          <div>
          <button onClick={()=>{
            store.dispatch({
              type:"EXAMPLE",
              value:"NOOOOICE"});
          }}>
            {this.props.example}
          </button>
          <button onClick={()=>{
            console.log('click');
            store.dispatch(buttonClickExample('Nice'))
          }}>
            {this.props.example}
          </button>
          </div>
        }
      </ReactReduxContext.Consumer>
    )
  }
});
