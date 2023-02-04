import MainSection from './MainSection';
import './App.css';
import SideNav from './SideNav';
import { useState } from 'react';

function App() {
  const [active,setActive] = useState("INBOX")
  return (
    <div id='main'>
      <div className='a'>
       <h1 className='text-center p-4 m-0 fw-bold '> <em><u>TODO LIST</u></em> - <em><u>Organize Your Life & Work</u></em></h1> 
      </div>
      <header>
        <div className="row">
          <div className="col-md-3">
            <SideNav change={setActive}/>
          </div>
          <div className="col-md-9 ">
            <MainSection active={active}/>
          </div>
        </div>
      </header>
      
    </div>
  );
}

export default App;
