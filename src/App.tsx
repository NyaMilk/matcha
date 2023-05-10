import "./App.css";
import { Icon, IconsName } from "./shared/components/Icon/Icon";

function App() {
  return (
    <div>
      <Icon className="fill" name={IconsName.BELL}></Icon>
      <Icon className="fill" name={IconsName.CLOSE}></Icon>
      <Icon className="fill" name={IconsName.DONE}></Icon>
      <Icon className="fill" name={IconsName.HEART}></Icon>
      <Icon className="fill" name={IconsName.HOME}></Icon>
      <Icon className="fill" name={IconsName.MENU}></Icon>
      <Icon className="fill" name={IconsName.MESSAGE}></Icon>
      <Icon className="stroke" name={IconsName.MOON}></Icon>
      <Icon className="fill" name={IconsName.PENCIL}></Icon>
      <Icon className="stroke" name={IconsName.SUN}></Icon>
      <Icon className="fill" name={IconsName.USER}></Icon>
    </div>
  );
}

export default App;
