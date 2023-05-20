import React from 'react';
import { useSpring, animated } from 'react-spring';

function Bubble() {
  const [props, set] = useSpring(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    from: { top: '-10%', left: '-10%' },
    config: { duration: 15000 ,mass: 1, tension: 170, friction: 26 , },
    reset: true,
  }));
  setInterval(() => {set({ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` })},15000)
  return (
    <animated.div
      style={{
        position: 'fixed',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        zIndex: "-1",
        ...props,
      }}
      onMouseEnter={() => set({ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` })}
      
    />
  );
}

export default function Burbujas() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
      <Bubble />
    </div>
  );
}