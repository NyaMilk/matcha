import { useState } from "react";
import "./App.css";
import {
  Checkbox,
  Dropdown,
  Icon,
  IconsName,
  Radio,
  SelectType,
} from "./shared/components/components";

function App() {
  const listItems = ["Test", "Test2", "Test3"];
  const checkedListItems = ["Test2"];

  const [isShowDropdown, setShowDropdown] = useState(false);
  const [isShowDropdownRadio, setShowDropdownRadio] = useState(false);

  const handleDropdownModal = () => {
    setShowDropdown(!isShowDropdown);
  };

  const handleDropdownModalRadio = () => {
    setShowDropdownRadio(!isShowDropdownRadio);
  };

  return (
    <div>
      <Icon className="fill" name={IconsName.BELL} />
      <Icon className="fill" name={IconsName.CLOSE} />
      <Icon className="fill" name={IconsName.DONE} />
      <Icon className="fill" name={IconsName.HEART} />
      <Icon className="fill" name={IconsName.HOME} />
      <Icon className="fill" name={IconsName.MENU} />
      <Icon className="fill" name={IconsName.MESSAGE} />
      <Icon className="stroke" name={IconsName.MOON} />
      <Icon className="fill" name={IconsName.PENCIL} />
      <Icon className="stroke" name={IconsName.SUN} />
      <Icon className="fill" name={IconsName.USER} />

      <Radio>Test</Radio>
      <Radio hidden>Test</Radio>
      <Radio disabled>Test</Radio>

      <Checkbox name="test1">Test</Checkbox>
      <Checkbox name="test3" hidden />
      <Checkbox name="test4" hidden>
        Test
      </Checkbox>
      <Checkbox name="test5" disabled />
      <Checkbox name="test5" disabled>
        Test
      </Checkbox>

      {/*<Select list={listItems}/>*/}
      {/*<Select list={listItems} defaultChecked={checkedListItems}/>*/}
      {/*<Select type={SelectType.SINGLE} list={listItems} name='test'/>*/}
      {/*<Select type={SelectType.SINGLE} list={listItems} name='test2' defaultChecked={listItems[1]}/>*/}

      <Dropdown
        className="customDropdown"
        list={listItems}
        activated={isShowDropdown}
        onClick={handleDropdownModal}
        hidden
      />

      <Dropdown
        className="customDropdown"
        list={listItems}
        activated={isShowDropdownRadio}
        onClick={handleDropdownModalRadio}
        type={SelectType.SINGLE}
        hidden
      />
    </div>
  );
}

export default App;
