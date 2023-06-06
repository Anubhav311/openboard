import { App } from './App'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'

// const container = document.getElementById('root')
const root = createRoot(document.getElementById('root'))
// console.log(container)
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>
)
