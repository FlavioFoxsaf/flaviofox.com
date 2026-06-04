import Portfolio from './Portfolio';
import { dictionaries } from '@/i18n/dictionaries';

export default function Home() {
  return <Portfolio dict={dictionaries.en} lang="en" />;
}
