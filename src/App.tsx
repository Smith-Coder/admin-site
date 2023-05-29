
import './App.css'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import RouteConfig from './RouteConfig';

function App() {
  return (
    <div>
      <Header message='Admin Site'></Header>
      <RouteConfig />
      <Footer message='© 2023 Your Company. All rights reserved.'></Footer>
    </div>
  )
}

export default App
