interface ScoreProps {
  score: number;
}

type Rank = { name: string; points: number; months: number; iconUrl: string };

const Ranks: Rank[] = [
  {
    name: "Noob",
    points: 0,
    months: 0,
    iconUrl:
      "https://oldschool.runescape.wiki/images/Clan_icon_-_Herbologist.png?6c963",
  },
  {
    name: "Goon",
    points: 2,
    months: 0,
    iconUrl:
      "https://oldschool.runescape.wiki/images/Clan_icon_-_Goon.png?f92d8",
  },
  {
    name: "Knight",
    points: 6,
    months: 0,
    iconUrl:
      "https://oldschool.runescape.wiki/images/Clan_icon_-_Knight.png?f92d8",
  },
  {
    name: "Paladin",
    points: 14,
    months: 2,
    iconUrl:
      "https://oldschool.runescape.wiki/images/Clan_icon_-_Paladin.png?f92d8",
  },
  {
    name: "Legend",
    points: 20,
    months: 2,
    iconUrl:
      "https://oldschool.runescape.wiki/images/Clan_icon_-_Legend.png?1d9cc",
  },
  {
    name: "Myth",
    points: 28,
    months: 4,
    iconUrl:
      "https://oldschool.runescape.wiki/images/Clan_icon_-_Myth.png?1d9cc",
  },
  {
    name: "Crusader",
    points: 33,
    months: 4,
    iconUrl:
      "https://oldschool.runescape.wiki/images/Clan_icon_-_Crusader.png?87d1d",
  },
  {
    name: "Beast",
    points: 38,
    months: 6,
    iconUrl:
      "https://oldschool.runescape.wiki/images/Clan_icon_-_Beast.png?53696",
  },
];

const Score = ({ score }: ScoreProps): JSX.Element => {
  return (
    <>
      <div>
        Your score is {score}. <Months score={score} />
      </div>
    </>
  );
};

const Months = ({ score }: ScoreProps): JSX.Element => {
  const eligibleRanks = Ranks.filter(({ points }) => points <= score);
  const bestPerMonth: { [key: number]: Rank } = eligibleRanks.reduce(
    (acc, val) => {
      if (
        acc[val.months] === undefined ||
        acc[val.months].points < val.points
      ) {
        acc[val.months] = val;
      }
      return acc;
    },
    {} as { [key: number]: Rank }
  );

  return (
    <div>
      {Object.entries(bestPerMonth)
        .reverse()
        .map(([months, rank], index) => (
          <div>
            <img src={rank.iconUrl} className='rankIcon' />
            {
                Number(months) > 0
                  ? `${rank.name} (with ${rank.months} months in the clan) or `
                  : `${rank.name}`
              }
          </div>
        ))}
    </div>
  );
};

export { Score };
