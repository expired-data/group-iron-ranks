import { useState } from "react";
import { Score } from "./Score";
import {
  Diaries,
  CombatAchievements,
  QuestCape,
  TotalLevel,
  InfernalCape,
} from "./Achievements";
import { Cumulative } from "./Cumulative";
import { OneOff } from "./OneOff";

const Summary = (): JSX.Element => {
  const [achievementPoints, setAchievementPoints] = useState<{
    [key: string]: number;
  }>({});

  const setAchievementPointsFn = (idx: string) => (points: number) =>
    setAchievementPoints((achievementPoints) => ({
      ...achievementPoints,
      [idx]: points,
    }));

  return (
    <>
      <div className="allTasks">
        <Cumulative
          achievement={Diaries}
          setAchievementPoints={setAchievementPointsFn("Diaries")}
        />
        <br />
        <Cumulative
          achievement={CombatAchievements}
          setAchievementPoints={setAchievementPointsFn("CAs")}
        />
        <br />
        <div className="taskContainer">
          <h1>Misc Tasks</h1>
          <OneOff
            achievement={TotalLevel}
            setAchievementPoints={setAchievementPointsFn("Total")}
          />
          <OneOff
            achievement={QuestCape}
            setAchievementPoints={setAchievementPointsFn("QuestCape")}
          />
          <OneOff
            achievement={InfernalCape}
            setAchievementPoints={setAchievementPointsFn("InfernalCape")}
          />
        </div>
      </div>
      <Score
        score={Object.values(achievementPoints).reduce(
          (acc, val) => acc + val,
          0
        )}
      />
    </>
  );
};

export { Summary };
