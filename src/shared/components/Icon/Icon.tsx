import React, { FunctionComponent, SVGProps } from "react";
import { ReactComponent as BellIcon } from "../../../assets/icons/bell.svg";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";
import { ReactComponent as DoneIcon } from "../../../assets/icons/done.svg";
import { ReactComponent as HeartIcon } from "../../../assets/icons/heart.svg";
import { ReactComponent as HomeIcon } from "../../../assets/icons/home.svg";
import { ReactComponent as MenuIcon } from "../../../assets/icons/menu.svg";
import { ReactComponent as MessageIcon } from "../../../assets/icons/message.svg";
import { ReactComponent as MoonIcon } from "../../../assets/icons/moon.svg";
import { ReactComponent as PencilIcon } from "../../../assets/icons/pencil.svg";
import { ReactComponent as SunIcon } from "../../../assets/icons/sun.svg";
import { ReactComponent as UserIcon } from "../../../assets/icons/user.svg";

type IconType = {
  [key: string]: FunctionComponent<SVGProps<SVGSVGElement>>;
};

const ICONS: IconType = {
  bell: BellIcon,
  close: CloseIcon,
  done: DoneIcon,
  heart: HeartIcon,
  home: HomeIcon,
  menu: MenuIcon,
  message: MessageIcon,
  moon: MoonIcon,
  pencil: PencilIcon,
  sun: SunIcon,
  user: UserIcon,
};

export enum IconsName {
  BELL = "bell",
  CLOSE = "close",
  DONE = "done",
  HEART = "heart",
  HOME = "home",
  MENU = "menu",
  MESSAGE = "message",
  MOON = "moon",
  PENCIL = "pencil",
  SUN = "sun",
  USER = "user",
}

type IconProps = {
  name: IconsName;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
};

export const Icon = ({ name, className, onClick }: IconProps) => {
  const Icon = ICONS[name];

  return <Icon className={className} onClick={onClick} />;
};
