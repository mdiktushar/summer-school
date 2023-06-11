import { useState } from "react";
import { motion } from "framer-motion";

const Album = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div>
      <h2 className="text-center font-bold text-4xl m-10">Album</h2>
      <hr />
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:mx-20 my-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="card w-90 bg-base-100 shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <figure>
            <img
               className="object-cover h-48 w-96"
              src={`https://www.musicalwiz.com/wp-content/uploads/Children-Play-Musical-Instruments.jpg`}
              alt=""
            />
          </figure>
        </motion.div>

        <motion.div
          className="card w-90 bg-base-100 shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <figure>
            <img
               className="object-cover h-48 w-96"
              src={`https://cdn.shopify.com/s/files/1/0557/0556/7432/articles/instrument-for-children.jpg?v=1635428668`}
              alt=""
            />
          </figure>
        </motion.div>

        <motion.div
          className="card w-90 bg-base-100 shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <figure>
            <img
               className="object-cover h-48 w-96"
              src={`https://images.squarespace-cdn.com/content/v1/5e7b68367fe380051bdb2450/02f17feb-d96b-4fbd-8f45-735f271090b0/pexels-yan-krukau-8192092+%281%29.jpg?format=1000w`}
              alt=""
            />
          </figure>
        </motion.div>

        <motion.div
          className="card w-90 bg-base-100 shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <figure>
            <img
               className="object-cover h-48 w-96"
              src={`https://cms-tc.pbskids.org/parents/articles/Whats-the-Right-Age-to-Begin-Music-Lessons.jpg`}
              alt=""
            />
          </figure>
        </motion.div>

        <motion.div
          className="card w-90 bg-base-100 shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <figure>
            <img
               className="object-cover h-48 w-96"
              src={`https://www.nammfoundation.org/sites/default/files/styles/project_article_primary_721x405/public/files/2020-06/12_720x405_UkuleleGirl.jpg?itok=TA0Udngl`}
              alt=""
            />
          </figure>
        </motion.div>

        <motion.div
          className="card w-90 bg-base-100 shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <figure>
            <img
               className="object-cover h-48 w-96"
              src={`https://www.musicparentsguide.com/wp-content/uploads/2015/01/kids-playing-music5-300x200.jpg`}
              alt=""
            />
          </figure>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:mx-20 my-5"></div>
    </div>
  );
};

export default Album;
