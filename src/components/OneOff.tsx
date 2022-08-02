import { useEffect, useState } from "react";
import { OneOffAchievement } from "./Achievements";

interface OneOffProps {
  achievement: OneOffAchievement;
  setAchievementPoints: (points: number) => void;
}

const OneOff = ({
  achievement: { name, pointValue },
  setAchievementPoints,
}: OneOffProps): JSX.Element => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setAchievementPoints(checked ? pointValue : 0);
  }, [checked]);

  return (
    <div>
      <label>{name}</label>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
  );
};

export { OneOff };
