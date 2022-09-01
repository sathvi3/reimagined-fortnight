import './App.css';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <li className='no-bullet'><a href='http://ec2-3-110-220-190.ap-south-1.compute.amazonaws.com:3000/gateway-onboarding'> Gateway </a></li>
        <li className='no-bullet'><a href='http://ec2-3-110-220-190.ap-south-1.compute.amazonaws.com:3000/device-profile'> Device Profile </a></li>
        <li className='no-bullet'><a href='http://ec2-3-110-220-190.ap-south-1.compute.amazonaws.com:3000/application'> Application </a></li>
        <li className='no-bullet'><a href='http://ec2-3-110-220-190.ap-south-1.compute.amazonaws.com:3000/device-onboarding'> Device </a></li>
        <li className='no-bullet'><a href='http://ec2-3-110-220-190.ap-south-1.compute.amazonaws.com:3000/frames'> Frames </a></li>
      </nav>
      <AppRouter />
    </div>
  );
}

export default App;
