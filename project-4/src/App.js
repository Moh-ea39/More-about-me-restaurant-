import './Component/header/header.css';
import './Component/main/main.css';
import MainComponent from './Component/main/main';
import HeaderFunction  from './Component/header/header';
import LastFunction  from './Component/main/lastcomponent';
import './App.css';

function App() {
  return (
    <div className="parent">
      <HeaderFunction/>
      <MainComponent/>
      <LastFunction />
    </div>
  );
}

export default App;
