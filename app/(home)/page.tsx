import { Metadata } from 'next';
import { Herobanner } from '@/containers/home/herobanner';
import { Histoire } from '@/containers/home/histoire';
import { Savoirfaire } from '@/containers/home/savoir-faire';
import { Dorelys } from '@/containers/home/dorelys';
import { ScrollTop } from '@/components/common/scrolltop';
export const metadata: Metadata = {
  title: 'Accueil',
  description: '',
};

export default function HomePage() {
  return <>
  <Herobanner/>
  <Histoire/>
  <Savoirfaire/>
  <Dorelys/>
  <ScrollTop/>
  </>;
}
