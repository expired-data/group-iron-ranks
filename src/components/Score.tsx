interface ScoreProps {
  score: number;
}

const Ranks: {name: string, points: number}[] = [
    { 
        name: "Noob", 
        points: 0
    }, 
    { 
        name: "Goon", 
        points:  2
    },
    { 
        name: "Knight", 
        points: 6
    }, 
    { 
        name: "Paladin", 
        points: 14
    },
    { 
        name: "Legend", 
        points: 20
    }, 
    { 
        name: "Myth", 
        points: 28
    },
    { 
        name: "Crusader", 
        points: 33
    }, 
    { 
        name: "Beast", 
        points: 38
    }
]

const Score = ({ score }: ScoreProps): JSX.Element => {
  return <div>Your score is {score}. This gives you the rank of {Ranks.filter(({points}) => points <= score).at(-1)?.name} </div>;
};

export { Score };
