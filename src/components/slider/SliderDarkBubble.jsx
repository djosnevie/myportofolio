import React from "react";
import Social from "../Social";
import SocialTwo from "../SocialTwo";
import Particles from "react-tsparticles";
import ReactTyped from "react-typed";

const SliderDarkBubble = () => {
  return (
    //    HERO
    <div className="beny_tm_hero" id="home">
      <div className="frame-layout__particles">
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

            particles: {
              number: {
                value: 0,
              },
              color: {
                value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
              },
              shape: {
                type: ["circle", "square"],
              },
              opacity: {
                value: {
                  max: 1,
                  min: 0,
                },
                animation: {
                  enable: true,
                  speed: 2,
                  startValue: "max",
                  destroy: "min",
                },
              },
              size: {
                value: { min: 3, max: 7 },
              },
              life: {
                duration: {
                  sync: true,
                  value: 5,
                },
                count: 1,
              },
              move: {
                enable: true,
                gravity: {
                  enable: true,
                  acceleration: 20,
                },
                speed: {
                  min: 25,
                  max: 50,
                },
                drift: {
                  min: -2,
                  max: 2,
                },
                decay: 0.05,
                direction: "none",
                outModes: {
                  default: "destroy",
                  top: "none",
                },
              },
              rotate: {
                value: {
                  min: 0,
                  max: 360,
                },
                direction: "random",
                move: true,
                animation: {
                  enable: true,
                  speed: 60,
                },
              },
              tilt: {
                direction: "random",
                enable: true,
                move: true,
                value: {
                  min: 0,
                  max: 360,
                },
                animation: {
                  enable: true,
                  speed: 60,
                },
              },
              roll: {
                darken: {
                  enable: true,
                  value: 25,
                },
                enable: true,
                speed: {
                  min: 15,
                  max: 25,
                },
              },
              wobble: {
                distance: 30,
                enable: true,
                move: true,
                speed: {
                  min: -15,
                  max: 15,
                },
              },
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                resize: true,
              },
            },
            detectRetina: true,
            background: {
              color: "#000",
            },
            responsive: [
              {
                maxWidth: 700,
                options: {
                  particles: {
                    move: {
                      speed: 20,
                      decay: 0.1,
                    },
                  },
                  emitters: [
                    {
                      direction: "top-right",
                      rate: {
                        delay: 0.1,
                        quantity: 3,
                      },
                      position: {
                        x: 0,
                        y: 50,
                      },
                      size: {
                        width: 0,
                        height: 0,
                      },
                    },
                    {
                      direction: "top-left",
                      rate: {
                        delay: 0.1,
                        quantity: 3,
                      },
                      position: {
                        x: 100,
                        y: 50,
                      },
                      size: {
                        width: 0,
                        height: 0,
                      },
                    },
                  ],
                },
              },
            ],
            emitters: [
              {
                direction: "top-right",
                rate: {
                  delay: 0.1,
                  quantity: 10,
                },
                position: {
                  x: 0,
                  y: 50,
                },
                size: {
                  width: 0,
                  height: 0,
                },
              },
              {
                direction: "top-left",
                rate: {
                  delay: 0.1,
                  quantity: 10,
                },
                position: {
                  x: 100,
                  y: 50,
                },
                size: {
                  width: 0,
                  height: 0,
                },
              },
            ],
          }}
        />
      </div>
      {/* End particle animation */}
      <div className="background">
        <div
          className="image"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/slider/2.jpg"
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
            <h3 className="name">Hi! I'm Smith.</h3>
            <h1 className="job">
              <span className="typer-toper">
                <ReactTyped
                  loop
                  typeSpeed={180}
                  backSpeed={100}
                  strings={["Youtuber", "Designer", "Developer"]}
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
              <br /> <span>Based In Australia.</span>
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

export default SliderDarkBubble;
