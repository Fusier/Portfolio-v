import { TypeAnimation } from "react-type-animation";

const TypeAnimationComponent = () => {
  return (
    <TypeAnimation
      sequence={["Hi, nice to meet you. I'm Samu"]}
      wrapper="p"
      speed={30}
      cursor={false}
      style={{ fontSize: "3em", display: "inline-block", color: "white" }}
      repeat={0}
    />
  );
};

export default TypeAnimationComponent;
