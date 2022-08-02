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
      <OneOff
        achievement={TotalLevel}
        setAchievementPoints={setAchievementPointsFn("Total")}
      />
      <br />
      <OneOff
        achievement={QuestCape}
        setAchievementPoints={setAchievementPointsFn("QuestCape")}
      />
      <br />
      <OneOff
        achievement={InfernalCape}
        setAchievementPoints={setAchievementPointsFn("InfernalCape")}
      />
      <br />

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
