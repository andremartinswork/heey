import React, { useEffect, useState } from 'react';

import {
  ParallaxProvider
} from 'react-scroll-parallax';

import {
  Banner,
  Intro,
  Services,
  Projects,
  Liked,
} from '../components/organisms';

import bannerContent from '../components/organisms/banner/content';
import introContent from '../components/organisms/intro/content';
import servicesContent from '../components/organisms/services/content';
import projectContent from '../components/organisms/projects/content';
import likedContent from '../components/organisms/liked/content';

import { motion } from 'framer-motion';

const transition = { duration: 4, ease: [0.43, 0.13, 0.23, 0.96] }

export default function Index() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
    document.querySelector('body').classList.add('done');
  }, [])

  const variants = {
    mounted: { opacity: 1 },
    unmounted: { opacity: 0 },
  }

  return (
    <ParallaxProvider>
      {/* <motion.div
         animate={mounted ? "mounted" : "unmounted"}
         variants={variants}
         transition={transition}
      > */}
        <Banner {...bannerContent} />
        <Intro {...introContent} />
        <Services {...servicesContent} />
        <Projects {...projectContent} />
        <Liked {...likedContent} />
      {/* </motion.div> */}
    </ParallaxProvider>
  )
}
