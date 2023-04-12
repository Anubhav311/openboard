import { App } from './App'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'

// const container = document.getElementById('root')
const root = createRoot(document.getElementById('root'))
// console.log(container)
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
)
