import React from 'react';

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

export default function Index() {
  return (
    <ParallaxProvider>
      <Banner {...bannerContent} />
      <Intro {...introContent} />
      <Services {...servicesContent} />
      <Projects {...projectContent} />
      <Liked {...likedContent} />
    </ParallaxProvider>
  )
}
