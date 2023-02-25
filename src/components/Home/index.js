// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout onClickLogout={this.onClickButton} />
          ) : (
            <Login onClickLogin={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
