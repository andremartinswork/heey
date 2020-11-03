import React from 'react';

import {
  BannerLegal,
  Legal
} from '../components/organisms';

import bannerLegalContent from '../components/organisms/bannerLegal/content';
import legalContent from '../components/organisms/legal/content';

export default function LegalInformation() {
  return (
    <>
      <BannerLegal {...bannerLegalContent} />
      <Legal {...legalContent} />
    </>
  )
}
