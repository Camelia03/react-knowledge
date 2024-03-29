import React, { Component } from 'react'

class MethodAsPropsParent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true,
      }
    }

    handleSignIn = () => {
        this.setState({
            isLoggedIn : true,
        })
        console.log(this)
    }

    handleSignOut = () => {
        this.setState({
          isLoggedIn: false,
        });
        console.log(this);
      };
    
      // single method that handles both SignIn and SignOut
      toggleIsLoggedIn = () => {
        this.setState((prevState) => ({
          isLoggedIn: !prevState.isLoggedIn,
        }));
      };
    
  render() {
    return (
      <div>
        <MethodAsPropsChild 
        isLoggedIn={this.state.isLoggedIn}
        handleSignIn={this.handleSignIn}
        handleSignOut={this.handleSignOut}
        />
      </div>
    );
  }
}

export default MethodAsPropsParent
