import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The Info is: {props.info}</p>
  </div>
)

const AuthInfo = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
          <WrappedComponent {...props}/>
        ) :
          <p>You must be a member for service</p>
      }
    </div>
  )
}

const Auth = AuthInfo(Info);

ReactDOM.render(<Auth isAuthenticated={true} info='this is balabala' />, document.getElementById('app'));