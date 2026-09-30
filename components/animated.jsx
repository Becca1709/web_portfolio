import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";


export function Animated(params) {
  return (
    <div className="project-cont">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
      >
          <div className="mockups">
            <div className="info">
              <img width="300px" src="../src/img/Logo5.png" />
              <h4>Problem</h4>
              <div>
                <p>
                  {" "}
                  Due to increasing concerns about our digital safety, sharing
                  our memories doesn't feel like a decision to make lightly
                  anymore.
                </p>
                <p>
                  Our memories can easily be lost in the endless storage of the
                  cloud.
                </p>
              </div>
              <h4>Solution</h4>
              <div>
                <p>
                  {" "}
                  Creating a digital album to keep our private memories
                  organized without the risks of sharing them publicly.
                </p>{" "}
                <p>
                  {" "}
                  A modern solution for the digital nomad that values online
                  safety while cherishing their best memories.
                </p>
              </div>
              <img id="tools" src="../src/img/logos.png" width="200px" />
            </div>
          </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
      >
        <h1> Watch preview </h1>

        <div className="video">
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <video
              src="../src/img/holidayreviewshot.mp4"
              width="90%"
              height="auto"
              controls
              autoPlay
              muted
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
