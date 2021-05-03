import './App.css';

import HaederManagement from './component/HaederManagement/HaederManagement';

import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div>
      <ScrollToTop smooth color="black" style={{ backgroundColor: "rgb(218, 202, 202)" }} />
      <HaederManagement></HaederManagement>
    </div>
  );
}

export default App;
