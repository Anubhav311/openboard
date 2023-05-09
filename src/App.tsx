import { useState } from 'react'
import './styles/global.css'
import './styles/home.css'
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

let membersList = [
  {
    name: 'Sagar',
    attendance: 2,
    totalProblems: 10,
    solvedProblems: 4,
  },
  {
    name: 'Vikash',
    attendance: 2,
    totalProblems: 10,
    solvedProblems: 5,
  },
  {
    name: 'Harsh',
    attendance: 2,
    totalProblems: 10,
    solvedProblems: 6,
  },
  {
    name: 'Sumit',
    attendance: 2,
    totalProblems: 10,
    solvedProblems: 1,
  },
  {
    name: 'Ramgopal',
    attendance: 2,
    totalProblems: 10,
    solvedProblems: 5,
  },
  {
    name: 'Punjika',
    attendance: 2,
    totalProblems: 10,
    solvedProblems: 2,
  },
]

membersList = membersList.sort((a: any, b: any) =>
  a.solvedProblems < b.solvedProblems ? 1 : -1
)

export const App = () => {
  const [members] = useState(membersList)

  return (
    <>
      <div className="container">
        <main className="main">
          <div>
            <div>
              <h3>DSA Mastery Leader Board</h3>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Attendance</th>
                    <th>Solved Problems</th>
                    <th>Total Problems</th>
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
        <tr key={i}>
          <td
            style={{
              textAlign: 'center',
              fontSize: '18px',
              fontWeight: 'bold',
            }}
          >
            {i + 1}
          </td>
          <td>{member.name}</td>
          <td
            style={{
              textAlign: 'center',
              fontSize: '18px',
              fontWeight: 'bold',
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
