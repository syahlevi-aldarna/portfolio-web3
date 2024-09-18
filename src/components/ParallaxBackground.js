import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const ParallaxContainer = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const Star = styled.div`
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  opacity: ${props => props.opacity};
`;

const Planet = styled(animated.div)`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.background};
  box-shadow: inset -25px -25px 40px rgba(0,0,0,.5);
`;

function ParallaxBackground() {
  const containerRef = useRef(null);
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const x = (clientX / width) * 2 - 1;
      const y = (clientY / height) * 2 - 1;
      set({ xy: [x, y] });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [set]);

  const stars = Array.from({ length: 200 }, (_, i) => ({
    size: Math.random() * 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.8 + 0.2,
  }));

  const planetProps = useSpring({
    from: { scale: 0.8, rotate: 0 },
    to: async (next) => {
      while (true) {
        await next({ scale: 1.2, rotate: 360 });
        await next({ scale: 0.8, rotate: 0 });
      }
    },
    config: { duration: 20000 },
  });

  return (
    <ParallaxContainer ref={containerRef} style={{ transform: xy.to((x, y) => `translate3d(${x * 10}px, ${y * 10}px, 0)`) }}>
      {stars.map((star, i) => (
        <Star
          key={i}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
          }}
        />
      ))}
      <Planet
        style={{
          width: '100px',
          height: '100px',
          right: '10%',
          top: '20%',
          background: 'linear-gradient(45deg, #ff6b6b, #feca57)',
          transform: planetProps.scale.to(s => `scale(${s})`),
          rotate: planetProps.rotate.to(r => `${r}deg`),
        }}
      />
      <Planet
        style={{
          width: '60px',
          height: '60px',
          left: '15%',
          bottom: '25%',
          background: 'linear-gradient(45deg, #54a0ff, #5f27cd)',
          transform: planetProps.scale.to(s => `scale(${s * 0.8})`),
          rotate: planetProps.rotate.to(r => `${-r * 0.7}deg`),
        }}
      />
    </ParallaxContainer>
  );
}

export default ParallaxBackground;