
 import Navbar from './Navbar'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Help from '../pages/Help'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Publish from '../pages/Publish'
function App() {
  return (
    <div>
  <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/Home' component={Home} />
        <Route path='/Publish' component={Publish} />
        <Route path='/Help' component={Help} />
        <Route path='/Profile' component={Profile} />
        
      </Routes>
    </Router>
     {/*<Greet />
     <Cart />
     <ShoppingList />
      <Greet name="Bruce" heroname="Batman">
      <p>This is children props</p>
      </Greet>
      <Greet name="Clarck" heroname="superman" >
        <button>Action</button>
      </Greet> 
      <Greet name="Diana"  heroname="Miraculous" />
      <Welcome name="Didi"  heroname="Mira" />
  */}
    </div>
  );
}

export default App;
