import React from "react";
import "./Card.css";
import { motion } from "framer-motion";

function Card({ url, selected }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <img src={url} className="card-img-top card-img"></img>
    </motion.div>
  );
}

export default Card;
