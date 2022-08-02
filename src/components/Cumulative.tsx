import { useEffect, useState } from "react";
import { CumulativeAchievement } from "./Achievements";

interface CumulativeProps {
  achievement: CumulativeAchievement;
  setAchievementPoints: (points: number) => void;
}

const Cumulative = ({
  achievement,
  setAchievementPoints,
}: CumulativeProps): JSX.Element => {
  const [checkedIndex, setCheckedIndex] = useState(-1);

  useEffect(() => {
    setAchievementPoints(
      checkedIndex == -1
        ? 0
        : achievement.pointValue.reduce(
            (acc, { points }, index) =>
              index <= checkedIndex ? acc + points : acc,
            0
          )
    );
  }, [checkedIndex]);

  return (
    <>
      {achievement.pointValue.map(({ amount }, index) => {
        return (
          <div>
            <label>
              {amount} {achievement.name}
            </label>
            <input
              type="checkbox"
              checked={checkedIndex >= index}
              onChange={() => {
                if (checkedIndex >= index) {
                  setCheckedIndex(index - 1);
                } else {
                  setCheckedIndex(index);
                }
              }}
            />
          </div>
        );
      })}
    </>
  );
};

export { Cumulative };
