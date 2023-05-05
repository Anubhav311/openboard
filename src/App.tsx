// import './styles.css'
import { useEffect } from 'react'
// import IMAGE from './react.png'
// import LOGO from './logo.svg'
// import { Counter } from './ClickCounter'
import { atom, selector, useRecoilState } from 'recoil'

export interface contri {
  id?: string
  type: string
  created_at: string
  public: boolean
}

const todoState = atom({
  key: 'repos',
  default: [] as contri[],
})

export const infoValue = selector({
  key: 'infoValue',
  get: ({ get }) => ({
    total: get(todoState).length,
    completed: get(todoState).filter((todo: contri) => todo.public).length,
    notCompleted: get(todoState).filter((todo: contri) => !todo.public).length,
  }),
})

export const App = () => {
  const [contri, setContri] = useRecoilState(todoState)
  useEffect(async () => {
    const url = 'https://api.github.com/users/Anubhav311/events'
    const resp = await fetch(url)
    const result = await resp.json()
    setContri(result)
  }, [])

  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  return (
    <>
      <Greet name="Anubhav" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      {contri.map((todo) => (
        <div key={todo.id}>
          <div>{todo.id}</div>
          <div>{todo.type}</div>
          <div>{todo.created_at}</div>
          <div>{todo.public}</div>
        </div>
      ))}
    </>
  )
}

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
