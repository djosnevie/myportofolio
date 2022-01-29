import React from "react";
import Social from "../Social";
import SocialTwo from "../SocialTwo";
import Particles from "react-tsparticles";
import ReactTyped from "react-typed";

const SliderDarkParticles = () => {
  return (
    //    HERO
    <div className="beny_tm_hero" id="home">
      <div className="frame-layout__particles dark">
        <Particles
          id="tsparticles"
          options={{
            backgroundMode: {
              enable: true,
              zIndex: 1,
            },
            fullScreen: {
              enable: false,
              zIndex: -1,
            },
            fpsLimit: 70,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.4,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ddd",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 30,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 6,
              },
            },

            detectRetina: true,
          }}
        />
      </div>
      {/* End particle animation */}
      <div className="background">
        <div
          className="image"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/9.jpg"
            })`,
          }}
        ></div>
        <div className="overlay"></div>
      </div>
      {/* End bg */}

      <div className="go-to go-to-next">
        <a href="#about">
          <span></span>
        </a>
      </div>
      {/* End animated goto button */}

      <div className="container">
        <div className="content">
          <div className="content_inner">
            <h3 className="name">Hi! I'm Iqra</h3>
            <h1 className="job">
              <span className="typer-toper">
                <ReactTyped
                  loop
                  typeSpeed={150}
                  backSpeed={60}
                  strings={["Photographer", "Designer", "Developer"]}
                  smartBackspace
                  shuffle={false}
                  backDelay={1}
                  fadeOut={false}
                  fadeOutDelay={100}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />
              </span>
              <br /> <span>Based In Canada.</span>
            </h1>
            <p className="text">
              I'm developer focused on crafting user‑friendly experiences, I am
              passionate about building excellent software that improves the
              lives of those around me.
            </p>
            <div className="mobile_social">
              <Social />
            </div>
            {/* End .social */}

            <div className="beny_tm_button">
              <a className="anchor" href="#about">
                <span className="wrapper">
                  <span className="first">Get Started</span>
                  <span className="second">Get Started</span>
                </span>
              </a>
            </div>
            {/* End beny_tm_button */}
          </div>
        </div>
      </div>
      {/* End .container */}

      <div className="social">
        <SocialTwo />
      </div>
      {/* End .social */}
    </div>
    //HERO
  );
};

export default SliderDarkParticles;
