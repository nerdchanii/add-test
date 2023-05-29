import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Intro from './pages/Intro'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Logout from './pages/Logout'
import News from './pages/News'
import Followers from './pages/Followers'
import Explore from './pages/Explore'
import Username from './pages/[username]'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/intro" component={Intro} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/logout" component={Logout} />
        <Route path="/news" component={News} />
        <Route path="/followers" component={Followers} />
        <Route path="/explore" component={Explore} />
        <Route path="/:username" component={Username} />
      </Switch>
    </Router>
  )
}

export default App
