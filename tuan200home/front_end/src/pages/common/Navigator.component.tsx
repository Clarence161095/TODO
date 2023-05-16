import { lowerCase } from 'lodash';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectSetting, Setting } from '../../store/settingReducer';

const MenuItem = (props: any) => {
  let navigate = useNavigate();
  return (
    <div
      className="cursor-pointer hover:text-[#3498db] hover:scale-[1.1]"
      onClick={() => navigate(`/${lowerCase(props?.name)}`)}
    >
      {props?.name}
    </div>
  );
};

const Navigator = () => {
  const setting: Setting = useSelector(selectSetting);

  return (
    <div
      className="flex flex-row items-center justify-start m-0 h-10 w-full pl-2 gap-3"
      style={{
        backgroundColor: setting.navigatorColor,
        color: setting.textColor,
      }}
    >
      <MenuItem name="Home"></MenuItem>
      <MenuItem name="Steak"></MenuItem>
    </div>
  );
};

export default Navigator;
