import { MpBadge } from "../../types";

interface BadgesProps {
  badges: MpBadge[];
}

export default function Badges({ badges }: BadgesProps) {
  return (
    <div className="badges">
      {badges.map(badge => (
        <div className="badges__badge" style={{ backgroundColor: badge.color }}>
          <span>{badge.name}</span>
        </div>
      ))}
    </div>
  );
}
