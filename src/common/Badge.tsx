import { MpBadge } from "../types";

interface BadgeProps {
  badge: MpBadge;
}

export default function Badge({ badge }: BadgeProps) {
  return (
    <div key={badge.name} className="badge" style={{ backgroundColor: badge.color }}>
      <span className="badge__text">{badge.name}</span>
    </div>
  );
}
