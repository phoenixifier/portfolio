import '@/styles/globals.css';

import { AnimatePresence, motion } from 'framer-motion';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import Transition from '@/components/Transition';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />;
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export default MyApp;
