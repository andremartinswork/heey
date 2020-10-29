import React from 'react';

import { 
  ParallaxProvider
} from 'react-scroll-parallax';

import {
  Banner,
  Intro,
  Projects
} from '../components/organisms';

import bannerContent from '../components/organisms/banner/content';
import introContent from '../components/organisms/intro/content';
import projectContent from '../components/organisms/projects/content';

export default function Index() {
  return (
    <ParallaxProvider>
      <Banner {...bannerContent} />
      <Intro {...introContent} />
      <Projects {...projectContent} />
    </ParallaxProvider>
  )
}
