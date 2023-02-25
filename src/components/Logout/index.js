// Write your code here
import './index.css'

const Logout = props => {
  const {onClickLogout} = props
  return (
    <button type="button" className="btn" onClick={onClickLogout}>
      Logout
    </button>
  )
}

export default Logout
