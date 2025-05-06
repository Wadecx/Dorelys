import { Metadata } from 'next';
import { Dorelys } from '@/containers/home/dorelys';
import { HerobannerExpertises } from '@/containers/expertises/herobanner';
import { SavoirFaire } from '@/containers/expertises/savoirfaire';
import { Style } from '@/containers/expertises/style';
import { JmtDorure } from '@/containers/expertises/jmtdorure';
import { ScrollTop } from '@/components/common/scrolltop';
export const metadata: Metadata = {
  title: 'Expertises',
  description: '',
};

export default function HomePage() {
  return <>
  <HerobannerExpertises/>
  <SavoirFaire/>
  <Style/>
  <JmtDorure/>
  <ScrollTop/>
  </>;
}
