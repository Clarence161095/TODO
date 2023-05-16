import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input } from '../../components/Material.component';
import {
  DEFAULT_SETTINGS_COLOR,
  selectSetting,
  setState,
  Setting,
} from '../../store/settingReducer';

export default function SettingComponent() {
  const settingGlobal: Setting = useSelector(selectSetting);
  const dispatch = useDispatch();
  const [setting, setSetting] = useState(settingGlobal);

  return (
    <div className="flex flex-col items-center gap-1 border-[1px] md:px-10 md:py-5 mt-10 m-2">
      <h1 className="md:text-[45px] text-3xl m-2">Setting Color of Page</h1>
      <Input
        className="md:w-[55vw] w-[90vw]"
        attributes={{
          type: 'text',
          alt: 'text color',
          placeholder: `Text color: ${settingGlobal.textColor}`,
          value:
            setting?.textColor === settingGlobal.textColor ? '' : setting?.textColor,
          onChange: (e: any) =>
            setSetting({ ...setting, textColor: e.target.value }),
        }}
      />
      <Input
        className="md:w-[55vw] w-[90vw]"
        attributes={{
          type: 'text',
          alt: 'Background color code',
          placeholder: `Background color: ${settingGlobal.backgroundColor}`,
          value:
            setting?.backgroundColor === settingGlobal.backgroundColor
              ? ''
              : setting?.backgroundColor,

          onChange: (e: any) =>
            setSetting({ ...setting, backgroundColor: e.target.value }),
        }}
      />
      <Input
        className="md:w-[55vw] w-[90vw]"
        attributes={{
          type: 'text',
          alt: 'Navigator color code',
          placeholder: `Navigator color code: ${settingGlobal.navigatorColor}`,
          value:
            setting?.navigatorColor === settingGlobal.navigatorColor
              ? ''
              : setting?.navigatorColor,

          onChange: (e: any) =>
            setSetting({ ...setting, navigatorColor: e.target.value }),
        }}
      />
      <div className="flex flex-row gap-3">
        <Button
          className="bg-[#2980b9] pt-2"
          onClick={() => dispatch(setState(DEFAULT_SETTINGS_COLOR))}
        >
          Reset
        </Button>
        <Button
          className="bg-[#27ae60] pt-2"
          onClick={() => dispatch(setState(setting))}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
