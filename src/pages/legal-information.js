import React, { useEffect } from 'react';

import {
  BannerLegal,
  Legal
} from '../components/organisms';

import bannerLegalContent from '../components/organisms/bannerLegal/content';
import legalContent from '../components/organisms/legal/content';

export default function LegalInformation() {
  useEffect(() => {
    document.querySelector('body').classList.add('done');
  }, [])

  return (
    <>
      <BannerLegal {...bannerLegalContent} />
      <Legal {...legalContent} />
    </>
  )
}
