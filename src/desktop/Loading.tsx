interface LoadingProps {
  percentage: number;
}

export default function Loading({ percentage }: LoadingProps) {
  return (
    <div className="loading">
      <p className="loading__percentage">{Math.floor(percentage)} %</p>
    </div>
  );
}
