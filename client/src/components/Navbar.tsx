import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faRankingStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'end', padding: '15px 0px' }}
    >
      <div style={{ margin: '0px 15px' }}>
        <Link to="/">
          <FontAwesomeIcon
            icon={faRankingStar}
            size="lg"
            style={{ color: '#061157', marginRight: '10px' }}
            cursor={'pointer'}
          />
        </Link>
      </div>
      <div style={{ margin: '0px 15px' }}>
        <Link to="/account">
          <FontAwesomeIcon
            icon={faUser}
            size="lg"
            style={{ color: '#06115', marginRight: '10px' }}
            cursor={'pointer'}
          />
        </Link>
      </div>
    </div>
  )
}
