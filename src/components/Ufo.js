import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

function Ufo() {
  const ufoRef = useRef();

  const { rotation } = useSpring({
    from: { rotation: [0, 0, 0] },
    to: { rotation: [0, Math.PI * 2, 0] },
    loop: true,
    config: { duration: 10000 },
  });

  useFrame((state, delta) => {
    ufoRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <animated.group ref={ufoRef} position={[0, 0, -5]} rotation={rotation}>
      <mesh>
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <meshStandardMaterial color="#00ff9f" />
      </mesh>
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#00b8ff" />
      </mesh>
    </animated.group>
  );
}

export default Ufo;