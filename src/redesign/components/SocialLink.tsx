import { Link } from "react-router-dom";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@mui/material/Tooltip/Tooltip";

type SocialLinkProps = {
  icon: IconProp;
  title: string;
  to: string;
};

export default function SocialLink(props: SocialLinkProps) {
  return (
    <Link
      to={props.to}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline text-mediumGray hover:text-highlight"
    >
      <div className="flex items-center justify-center w-8 lg:w-12 h-8 lg:h-12 bg-gray/90 rounded-md">
        <Tooltip title={props.title}>
          <FontAwesomeIcon icon={props.icon} size="xl" />
        </Tooltip>
      </div>
    </Link>
  );
}
