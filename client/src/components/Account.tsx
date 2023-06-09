import { useEffect } from 'react'
import { userAtom } from '../atoms'
import { Navbar } from './Navbar'
import { useRecoilState } from 'recoil'
import '../styles/account.css'

// export interface contri {
//   id?: string
//   type: string
//   created_at: string
//   public: boolean
// }

export function Account() {
  const [user, setUser] = useRecoilState(userAtom)

  useEffect(() => {
    getUserData()
    console.log('getUserData called')
  }, [])

  async function getUserData() {
    await fetch(process.env.BACKEND_URL + '/getUserData', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + `${localStorage.getItem('accessToken')}`, //Bearer Access Token
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setUser({
          name: data.name,
          avatar: data.avatar_url,
          username: data.login,
          followers: data.followers,
          following: data.following,
          twitter: data.twitter_username,
          github: data.html_url,
          linkedin: data.linkedin_username,
          youtube: data.youtube_username,
        })
      })
  }

  return (
    <div className="container">
      <Navbar />
      <div className="main">
        <div style={{ marginBottom: '10px' }}>
          <img
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '100%',
            }}
            src={user.avatar}
            alt="avatar"
          />
        </div>
        <div className={'account-items-container'}>
          <div className="item-container">
            <h5>Name</h5>
            <p>{user.name}</p>
          </div>
          <div className="item-container">
            <h5>Username</h5>
            <p>{user.username}</p>
          </div>
          <div className="item-container">
            <h5>Followers</h5>
            <p>{user.followers}</p>
          </div>
          <div className="item-container">
            <h5>Following</h5>
            <p>{user.following}</p>
          </div>
          <div className="item-container">
            <h5>Twitter</h5>
            <p>{user.twitter}</p>
          </div>
          <div className="item-container">
            <h5>Github</h5>
            <p>{user.github}</p>
          </div>
          <div className="item-container">
            <h5>Linkedin</h5>
            <p>{user.linkedin}</p>
          </div>
          <div className="item-container">
            <h5>Youtube</h5>
            <p>{user.youtube}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
