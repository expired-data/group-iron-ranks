type Threshold = {
  amount: number;
  points: number;
};

export type OneOffAchievement = {
  name: string;
  pointValue: number;
};

export type CumulativeAchievement = {
  name: string;
  pointValue: Threshold[];
};

const Diaries: CumulativeAchievement = {
  name: "Diary Tasks",
  pointValue: [
    {
      amount: 150,
      points: 1,
    },
    {
      amount: 300,
      points: 2,
    },
    {
      amount: 400,
      points: 3,
    },
    {
      amount: 492,
      points: 4,
    },
  ],
};

const CombatAchievements: CumulativeAchievement = {
  name: "CA Tasks",
  pointValue: [
    {
      amount: 35,
      points: 2,
    },
    {
      amount: 75,
      points: 3,
    },
    {
      amount: 135,
      points: 5,
    },
    {
      amount: 250,
      points: 5,
    },
  ],
};

const TotalLevel: OneOffAchievement = {
  name: "2200 Total",
  pointValue: 5,
};

const QuestCape: OneOffAchievement = {
  name: "Quest Cape",
  pointValue: 3,
};

const InfernalCape: OneOffAchievement = {
  name: "Infernal Cape",
  pointValue: 5,
};

export { CombatAchievements, Diaries, TotalLevel, QuestCape, InfernalCape };
