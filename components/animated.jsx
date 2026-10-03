import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { propTypes } from "react-bootstrap/esm/Image";
import { Project_Card } from '../components/project_Card';
import Logos from "../src/img/logos.png"
import preview from "../src/img/holidayreviewshot.mp4"
import holidaylogo from "../src/img/Logo5.png"


export function Animated(params) {
  return (

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
      >
        <Project_Card projectlogo={holidaylogo}
problems= " Due to increasing concerns about our digital safety, sharing
                  our memories doesn't feel like a decision to make lightly
                  anymore. Our memories can easily be lost in the endless storage of the
                  cloud" 
solutions=" Creating a digital album to keep our private memories
                  organized without the risks of sharing them publicly.
                  A modern solution for the digital nomad that values online
                  safety while cherishing their best memories." 
img_id="tools" img_src={Logos} 
videosrc={preview}/>
      </motion.div>
   
  );
}
