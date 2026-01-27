import React, { useState, useRef } from "react";
import "./Card.scss";
import { CardMedia } from "@mui/material";

interface CardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, link, image }) => {
  const [hover, setHover] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [touching, setTouching] = useState(false);
  const touchStartTime = useRef(0);
  const startPos = useRef({ x: 0, y: 0 });

  const updateMousePosition = (
    clientX: number,
    clientY: number,
    target: HTMLElement
  ) => {
    const rect = target.getBoundingClientRect();
    setMouse({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
  };

  return (
    <div
      className={`card ${hover ? "card--hovered" : ""}`}
      style={
        {
          "--mouse-x": `${mouse.x}px`,
          "--mouse-y": `${mouse.y}px`,
        } as React.CSSProperties
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={(e) =>
        updateMousePosition(e.clientX, e.clientY, e.currentTarget)
      }
      onClick={() => {
        window.open(link, "_blank");
      }}
      onTouchStart={(e) => {
        const touch = e.touches[0];
        touchStartTime.current = Date.now();
        startPos.current = { x: touch.clientX, y: touch.clientY };
        updateMousePosition(touch.clientX, touch.clientY, e.currentTarget);
        setTouching(true);
        setHover(true);
      }}
      onTouchMove={(e) => {
        if (!touching) return;
        const touch = e.touches[0];
        updateMousePosition(touch.clientX, touch.clientY, e.currentTarget);
      }}
      onTouchEnd={(e) => {
        const touch = e.changedTouches[0];
        const duration = Date.now() - touchStartTime.current;
        const moved =
          Math.abs(startPos.current.x - touch.clientX) > 10 ||
          Math.abs(startPos.current.y - touch.clientY) > 10;

        if (duration < 500 && !moved) setTouching(false);
        setHover(false);
      }}
    >
      <div className="card__content">
        <div className="card__info-wrapper">
          <CardMedia
            component="img"
            height="200"
            image={image}
            className="card__image"
          />
          <div className="card__info">
            <h3>{title}</h3>
            <div className="card__title">
              <h4>{description}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
