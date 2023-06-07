import { useState, useEffect } from 'react'
import './styles/global.css'
import './styles/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { Routes, Route } from 'react-router-dom'
import { Login } from './components/auth/Login'

// Vakil search, chennai, Mr. Praveen

// import './styles.css'
// import IMAGE from './react.png'
// import LOGO from './logo.svg'
// import { Counter } from './ClickCounter'
// import { atom, selector, useRecoilState } from 'recoil'

// export interface contri {
//   id?: string
//   type: string
//   created_at: string
//   public: boolean
// }

// const todoState = atom({
//   key: 'repos',
//   default: [] as contri[],
// })

// export const infoValue = selector({
//   key: 'infoValue',
//   get: ({ get }) => ({
//     total: get(todoState).length,
//     completed: get(todoState).filter((todo: contri) => todo.public).length,
//     notCompleted: get(todoState).filter((todo: contri) => !todo.public).length,
//   }),
// })

type MembersListProps = {
  members: {
    name: string
    attendance: number
    totalProblems: number
    solvedProblems: number
  }[]
}

const totalProblems = 14

let membersList = [
  {
    name: 'Sagar',
    attendance: 50,
    totalProblems: totalProblems,
    solvedProblems: 1,
  },
  {
    name: 'Vikash',
    attendance: 100,
    totalProblems: totalProblems,
    solvedProblems: 11,
  },
  {
    name: 'Harsh',
    attendance: 100,
    totalProblems: totalProblems,
    solvedProblems: 12,
  },
  {
    name: 'Sumit',
    attendance: 50,
    totalProblems: totalProblems,
    solvedProblems: 0,
  },
  {
    name: 'Ramgopal',
    attendance: 75,
    totalProblems: totalProblems,
    solvedProblems: 1,
  },
  {
    name: 'Punjika',
    attendance: 100,
    totalProblems: totalProblems,
    solvedProblems: 2,
  },
  {
    name: 'Manish',
    attendance: 25,
    totalProblems: totalProblems,
    solvedProblems: 0,
  },
  {
    name: 'Dependra',
    attendance: 0,
    totalProblems: totalProblems,
    solvedProblems: 0,
  },
  {
    name: 'Nagendra',
    attendance: 25,
    totalProblems: totalProblems,
    solvedProblems: 0,
  },
  {
    name: 'Prakash',
    attendance: 0,
    totalProblems: totalProblems,
    solvedProblems: 0,
  },
  {
    name: 'Rujman',
    attendance: 0,
    totalProblems: totalProblems,
    solvedProblems: 0,
  },
]

membersList = membersList.sort((a: any, b: any) =>
  a.solvedProblems < b.solvedProblems ? 1 : -1
)

export const App = () => {
  const [rerender, setRerender] = useState(false)
  console.log(process.env.BACKEND_URL)
  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const codeParam = urlParams.get('code')

    async function getAccessToken() {
      await fetch(
        process.env.BACKEND_URL + '/getAccessToken?code=' + codeParam,
        {
          method: 'GET',
        }
      )
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          if (data.access_token) {
            localStorage.setItem('accessToken', data.access_token)
            setRerender(!rerender)
          }
        })
    }

    if (codeParam && localStorage.getItem('accessToken') == null) {
      getAccessToken()
    }
  }, [])

  return (
    <>
      {/* <Link to="/">Home</Link>
      <Link to="/login">About</Link> */}
      <Routes>
        <Route path="/" element={<LeaderBoard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

const LeaderBoard = () => {
  const [members] = useState(membersList)

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
      })
  }

  return (
    <>
      <div className="container">
        <main className="main">
          {localStorage.getItem('accessToken') ? (
            <div>
              <h3>we have access token</h3>
              {localStorage.getItem('accessToken')}

              <h4>Get user data from github API</h4>
              <button onClick={getUserData}>Get user data</button>
            </div>
          ) : (
            <div>
              <h3>user isnot logged in</h3>
            </div>
          )}
          <div style={{ width: '70%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3 style={{ color: '#F1734A' }}>
                <FontAwesomeIcon
                  icon={faTrophy}
                  size="lg"
                  style={{ color: '#f1734a', marginRight: '10px' }}
                />
                OPENBOARD
              </h3>
              <div style={{ display: 'flex', justifyContent: 'end' }}>
                <div
                  style={{
                    padding: '10px',
                    margin: '10px 0 10px 0',
                    background: '#FDEEEF',
                    width: '150px',
                    borderRadius: '30px 0 0 30px',
                    textAlign: 'center',
                    color: '#F47079',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  Week
                </div>
                <div
                  style={{
                    padding: '10px',
                    margin: '10px 0 10px 0',
                    background: 'white',
                    width: '150px',
                    borderRadius: '0 30px 30px 0',
                    textAlign: 'center',
                    color: '#061157',
                    cursor: 'pointer',
                  }}
                >
                  Month
                </div>
              </div>
            </div>
            <div className={'table-container'}>
              <table>
                <thead>
                  <tr>
                    <th style={{ color: '#8CBCBE', textAlign: 'left' }}>
                      Name
                    </th>
                    <th style={{ color: '#8CBCBE' }}>Rank</th>
                    <th style={{ color: '#8CBCBE' }}>Attendance</th>
                    <th style={{ color: '#8CBCBE' }}>Solved Problems</th>
                    <th style={{ color: '#8CBCBE' }}>Total Problems</th>
                  </tr>
                </thead>
                <TableBody members={members} />
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

function TableBody(props: MembersListProps) {
  return (
    <tbody>
      {props.members.map((member, i) => (
        <tr key={i} className={i < 3 ? 'rank-holders' : ''}>
          <td
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div>
              <FontAwesomeIcon
                icon={faCircleUser}
                size="2xl"
                style={{ color: '8198c1', marginRight: '10px' }}
              />
            </div>
            {member.name}
          </td>
          <td
            style={{
              textAlign: 'center',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            {i == 0 ? (
              <FontAwesomeIcon
                bounce
                icon={faTrophy}
                style={{ color: '#ffd700' }}
                size="2xl"
              />
            ) : i == 1 ? (
              <FontAwesomeIcon
                icon={faTrophy}
                style={{ color: '#c0c0c0' }}
                size="xl"
              />
            ) : i == 2 ? (
              <FontAwesomeIcon
                icon={faTrophy}
                style={{ color: '#964b00' }}
                size="xl"
              />
            ) : (
              i + 1
            )}
          </td>
          <td
            style={{
              textAlign: 'center',
              // fontSize: '18px',
              // fontWeight: 'bold',
            }}
          >
            {member.attendance}
          </td>
          <td style={{ textAlign: 'center' }}>{member.solvedProblems}</td>
          <td style={{ textAlign: 'center' }}>{member.totalProblems}</td>
        </tr>
      ))}
    </tbody>
  )
}
