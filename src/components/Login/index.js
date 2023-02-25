// Write your code here
import './index.css'

const Login = props => {
  const {onClickLogin} = props
  return (
    <button type="button" className="btn" onClick={onClickLogin}>
      Login
    </button>
  )
}

export default Login
