
import './App.css'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import RouteConfig from './RouteConfig';
// import Sample1 from './Sample/Sample';
// import EmployeeList from './Sample/EmployeeList';
// import UserListSimple from './Sample/UserListSimple';

function App() {
  return (
    <div>
      <Header message='Admin Site'></Header>
      <RouteConfig />
      <Footer message='© 2023 Your Company. All rights reserved.'></Footer>
      {/* <Sample1></Sample1>
      <EmployeeList></EmployeeList> */}
      {/* <UserListSimple></UserListSimple> */}
    </div>
  )
}

export default App
