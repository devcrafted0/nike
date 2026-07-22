import { SetStateAction, Dispatch } from "react";
import "./styles/LoadingNike.css";

interface LoadingNikeProps {
  isFinished: boolean;
  setIsFinished: Dispatch<SetStateAction<boolean>>;
}

const LoadingNike = ({ setIsFinished }: LoadingNikeProps) => {
  return (
    <div
      className="relative w-100 animate-scale-top-left"
      onAnimationEnd={() => {
        setIsFinished(true);
      }}
    >
      <h1 className="absolute left-1/3 top-1/4 text-2xl font-normal text-white">
        Nike
      </h1>
      <img
        src="/nike.png"
        alt=""
        className="w-100 recolor-to-gray absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
      />
      <img src="/nike.png" alt="" className="w-100 animate-clip-slide-right" />
    </div>
  );
};

export default LoadingNike;
