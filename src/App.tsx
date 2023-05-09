import { useState } from 'react'
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
    name: 'Vicky',
    attendance: 4,
    totalProblems: 5,
    solvedProblems: 2,
  },
  {
    name: 'Vikash',
    attendance: 4,
    totalProblems: 5,
    solvedProblems: 1,
  },
  // {
  //   name: 'Vikash',
  //   prMerge: 6,
  //   typeingSpeed: 7,
  //   keyboardOrMouse: 'Low',
  //   leetcodeScore: 0,
  // },
  // {
  //   name: 'Harsh',
  //   prMerge: 7,
  //   typeingSpeed: 28,
  //   keyboardOrMouse: 'Low',
  //   leetcodeScore: 0,
  // },
  // {
  //   name: 'Saransh',
  //   prMerge: 0,
  //   typeingSpeed: 40,
  //   keyboardOrMouse: 'Low',
  //   leetcodeScore: 0,
  // },
  // {
  //   name: 'Asif',
  //   prMerge: 4,
  //   typeingSpeed: 0,
  //   keyboardOrMouse: 'Low',
  //   leetcodeScore: 0,
  // },
  // {
  //   name: 'Arpit',
  //   prMerge: 0,
  //   typeingSpeed: 73,
  //   keyboardOrMouse: 'Low',
  //   leetcodeScore: 0,
  // },
]

membersList = membersList.sort((a: any, b: any) =>
  a.solvedProblems < b.solvedProblems ? 1 : -1
)

export const App = () => {
  const [members] = useState(membersList)
  // const [contri, setContri] = useRecoilState(todoState)
  // useEffect(async () => {
  //   const url = 'https://api.github.com/users/Anubhav311/events'
  //   const resp = await fetch(url)
  //   const result = await resp.json()
  //   setContri(result)
  // }, [])

  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ]

  return (
    <>
      <Greet name="Anubhav" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      {/* {contri.map((todo) => (
        <div key={todo.id}>
          <div>{todo.id}</div>
          <div>{todo.type}</div>
          <div>{todo.created_at}</div>
          <div>{todo.public}</div>
        </div>
      ))} */}
      <div className="container">
        <main className="main">
          <div>
            <div>
              <h3>Epvi Engineering Leader Board</h3>
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

// string, number and boolean types
type GreetProps = {
  name: string
  messageCount: number
  isLoggedIn: boolean
}

function Greet(props: GreetProps) {
  return (
    <h1>
      {props.isLoggedIn
        ? `Hello {props.name}. You have {props.messageCount} unread messages.`
        : 'Welcome Guest'}
    </h1>
  )
}

// object props
type PersonProps = {
  name: {
    first: string
    last: string
  }
}

function Person(props: PersonProps) {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  )
}

// list props
type PersonListProps = {
  names: {
    first: string
    last: string
  }[]
}

function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((name, i) => (
        <h2 key={i}>
          {name.first} {name.last}
        </h2>
      ))}
      <h2>Bruce Wayne</h2>
      <h2>Clark Kent</h2>
      <h2>Princes Diana</h2>
    </div>
  )
}
