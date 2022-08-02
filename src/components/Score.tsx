interface ScoreProps {
  score: number;
}

type Rank = {name: string, points: number, months: number}

const Ranks: Rank[] = [
    { 
        name: "Noob", 
        points: 0,
        months: 0 
    }, 
    { 
        name: "Goon", 
        points:  2,
        months: 0
    },
    { 
        name: "Knight", 
        points: 6,
        months: 0, 
    }, 
    { 
        name: "Paladin", 
        points: 14, 
        months: 2 
    },
    { 
        name: "Legend", 
        points: 20,
        months: 2
    }, 
    { 
        name: "Myth", 
        points: 28, 
        months: 4
    },
    { 
        name: "Crusader", 
        points: 33,
        months: 4
    }, 
    { 
        name: "Beast", 
        points: 38,
        months: 6
    }
]

const Score = ({ score }: ScoreProps): JSX.Element => {
  return <><div>Your score is {score}. <Months score={score} /></div></>;
};

const Months = ({score}: ScoreProps): JSX.Element => { 
    const eligibleRanks = Ranks.filter(({points}) => points <= score);
    const bestPerMonth: {[key: number]: Rank} = eligibleRanks.reduce((acc, val) =>{ if(acc[val.months] === undefined || acc[val.months].points < val.points) { acc[val.months] = val; } return acc;}, {} as {[key: number]: Rank})
    
    return <div>{Object.entries(bestPerMonth).reverse().map(([months, rank], index) => <div>{(index === 0 ? 'This': "If not this") + ` gives you the rank of ${Number(months) > 0 ? `${rank.name} given that you have ${rank.months} months in the clan`: `${rank.name}`}`}</div>)}</div>
}

export { Score };
