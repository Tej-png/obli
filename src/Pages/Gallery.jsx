import React from "react";
import Card from "../components/Card/Card";
import NavBar from "../components/Navbar/NavBar";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

function Gallery({ width, selected, setSelected }) {
  let num = [1, 2, 3, 4, 5];
  const { docs } = useFirestore("images");

  const handleCloseImg = (e) => {
    if (e.target.classList.contains("selected-img")) {
      setSelected(null);
    }
  };

  return (
    <div className="gallery">
      <NavBar width={width}></NavBar>

      <div className="container cards">
        <h1 className="gallery-header">Artworks</h1>
        {docs && (
          <motion.div className="row" layout>
            {docs.map((card) => (
              <motion.div
                key={card.id}
                className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                onClick={() => setSelected(card.url)}
              >
                <Card selected={selected} url={card.url}></Card>
              </motion.div>
            ))}
          </motion.div>
        )}
        {selected && (
          <motion.div
            className="selected-img"
            onClick={handleCloseImg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.img src={selected} initial={{y:'-1000px'}} animate={{ y:0}} transition={{ delay:0.2}}></motion.img>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
