interface ScoreProps {
  score: number;
}

const Score = ({ score }: ScoreProps): JSX.Element => {
  return <div>Your score is {score}</div>;
};

export { Score };
