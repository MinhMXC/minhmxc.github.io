import nextSvg from "../assets/next.svg";
import backSvg from "../assets/back.svg";

interface NavGroupProps {
  backOnClick: () => void;
  nextOnClick: () => void;
}

export default function NavGroup({ backOnClick, nextOnClick }: NavGroupProps) {
  return (
    <div className="mb-nav-group">
      <div className="mb-nav" onClick={backOnClick}>
        <img src={backSvg} />
      </div>
      <div className="mb-nav" onClick={nextOnClick}>
        <img src={nextSvg} />
      </div>
    </div>
  );
}
