import Particles from "./Particles";
import DecryptedText from "./DecryptedText";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
// import {useRef} from "react";
import Typewriter from "typewriter-effect";
import React, { useEffect, useRef, useState } from "react";

const Home = () => {

  const title = useRef();

  useGSAP(() => {
    gsap.from(title.current, {
      scale: 1,
      x: 100,
      duration: 1,
    });
  });

  return (
    <>
      <div className="h-screen px-40 bg-dark-purple relative flex flex-col items-start justify-center">
        <div className="absolute h-screen w-screen">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={300}
            particleSpread={15}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={true}
          />
        </div>
        <div
          ref={title}
          className="font-['SFpro-reg'] text-9xl text-amber-50 leading-5 "
        >
          Ameen KM
        </div>
        
        <div
          className="font-['JBmono-reg'] text-lg text-white "
          style={{ marginTop: "4rem" }}
        >
          <div className="text-white text-2xl leading-14">
          <Typewriter
            options={{
              strings: ["Web Developer", "Data Scientist", "Software Developer"],
              autoStart: true,
              loop: true,
              delay: 80,
            }}
          />
        </div>
        <div className="flex flex-col">
          <DecryptedText
            text="web developer and machine learning engineer pursuing bachelors"
            speed={30}
            sequential={true}
            maxIterations={2}
            animateOn="view"
            revealDirection="start"
            />
            <DecryptedText
            text="degree in computer science engineering at SRM university."
            speed={30}
            sequential={true}
            maxIterations={2}
            animateOn="view"
            revealDirection="start"
            />
            </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
