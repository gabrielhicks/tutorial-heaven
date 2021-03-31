import React from 'react';
import { motion } from 'framer-motion';
import RailsIcons from './RailsIcons';
import ReactIcons from './ReactIcons';
import JavascriptIcons from './JavascriptIcons';
import AngularIcons from './AngularIcons';
import VueIcons from './VueIcons';
import HtmlIcons from './HtmlIcons';

function Sidebar({ root }) {
  const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };

  const renderIcons = (category) => {
    switch (category) {
      case 'reactjs':
        return <ReactIcons />;
      case 'rails':
        return <RailsIcons />;
      case 'javascript':
        return <JavascriptIcons />;
      case 'angular':
        return <AngularIcons />;
      case 'vue':
        return <VueIcons />;
      case 'html5':
        return <HtmlIcons />;
      default:
        return <h5>Waking up the dyno...</h5>;
    }
  };

  return (
    <motion.div
      initial={{ transition: transition }}
      animate={{ zIndex: -100 }}
      exit={{ opacity: 1, transition: transition, scale: 1 }}>
      {renderIcons(root)}
    </motion.div>
  );
}

export default Sidebar;
