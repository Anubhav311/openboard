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
    console.log(result)
  }, [])

  return (
    <>
      <h1>Heading</h1>
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
  //   return (
  //     <>
  //       <h1>Edited React Typescript webpack starter templateeee</h1>
  //       {/* <img src={IMAGE} width={200} height={200} />
  //       <img src={LOGO} width={200} height={200} /> */}
  //       <Counter />
  //     </>
  //   )
}
