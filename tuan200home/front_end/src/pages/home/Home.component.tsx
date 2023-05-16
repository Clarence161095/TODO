import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MenuCmp from '../../components/Menu.component';
import { authReset } from '../../store/authReducer';
import { localStoreClearLoginInfo } from '../../store/localstore';
import Navigator from '../common/Navigator.component';
import SteakPage from '../feature/Steak.component';

const SettingComponent = React.lazy(() => import('../setting/Setting.component'));

const Home = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [setting, setSetting] = useState({
    isOpen: false,
    listSetting: [
      {
        name: 'Setting',
        onClick: () => {
          navigate('/setting');
          setSetting({ ...setting, isOpen: false });
        },
      },
      {
        name: 'Logout',
        onClick: () => {
          localStoreClearLoginInfo();
          dispatch(authReset());
          setSetting({ ...setting, isOpen: false });
        },
      },
    ],
  });

  return (
    <div className="relative responsive-small-phone">
      <Navigator></Navigator>

      <div className="flex flex-row justify-end">
        <i
          className="fixed right-2 top-2 bi bi-gear text-2xl hover:scale-[1.2]
                hover:cursor-pointer z-50"
          onClick={() => setSetting({ ...setting, isOpen: !setting.isOpen })}
        ></i>
      </div>

      <MenuCmp
        listMenu={setting.listSetting}
        closeMenu={() => setSetting({ ...setting, isOpen: false })}
        toggleMenu={setting.isOpen}
      />

      <Routes>
        <Route path="/setting" element={<SettingComponent />} />
        <Route path="/steak" element={<SteakPage />} />
      </Routes>
    </div>
  );
};

export default Home;
