import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

type NavItemProps = {
  icon: IconProp;
  to?: string;
  inNewTab?: boolean;
  isExpanded: boolean;
  label?: string;
  onClick?: any;
};

export default function NavItem(props: NavItemProps) {
  const active = useLocation().pathname === props.to;
  let animationDuration = props.isExpanded
    ? "duration-[500ms]"
    : "duration-[500ms]";

  function handleClickEvent(e: React.MouseEvent<HTMLDivElement>) {
    if (props.onClick) {
      props.onClick();
    }
  }

  return (
    <Link
      to={props.to ?? "#"}
      className="flex no-underline text-mediumGray hover:text-highlight"
      target={props.inNewTab ? "_target" : "_self"}
    >
      <div
        onClickCapture={handleClickEvent}
        className={`ml-[10%] relative flex bg-darkerGray h-12 lg:h-12 items-center border-2 border-${
          active ? "mediumGray" : "darkerGray"
        } text-mediumGray rounded-lg transition-all ${animationDuration} ${
          props.isExpanded ? "w-[80%]" : "w-12"
        } overflow-hidden`}
      >
        <div className={`ml-[11px] mr-[10px] transition-all duration-300`}>
          <FontAwesomeIcon size="lg" icon={props.icon} />
        </div>
        <div className="flex h-[50px] items-center justify-center">
          <div
            className={`transition-opacity ${animationDuration} ${
              props.isExpanded ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="whitespace-nowrap text-lg font-semibold">
              {props.label}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
