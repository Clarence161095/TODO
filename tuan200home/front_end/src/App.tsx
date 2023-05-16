import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import databaseHook from './hooks/database.hook';
import RootRouter from './routers/Root.router';
import { selectSetting, Setting } from './store/settingReducer';

function App() {
  const setting: Setting = useSelector(selectSetting);

  databaseHook();
  return (
    <div
      className="relative flex flex-col min-h-screen"
      style={{ backgroundColor: setting.backgroundColor, color: setting.textColor }}
    >
      <RootRouter />
      <ToastContainer className={'responsive-small-phone'} />
    </div>
  );
}

export default App;
