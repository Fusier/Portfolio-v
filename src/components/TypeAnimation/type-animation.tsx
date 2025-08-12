import { TypeAnimation } from "react-type-animation";
import "./type-animation.scss";

const TypeAnimationComponent = () => {
  return (
    <TypeAnimation
      sequence={["Hi, nice to meet you. I'm Samu"]}
      wrapper="h4"
      speed={30}
      cursor={false}
      className="animation"
      repeat={0}
    />
  );
};

export default TypeAnimationComponent;
