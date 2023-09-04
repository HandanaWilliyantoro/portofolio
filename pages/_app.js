import '@/styles/globals.css'

import {motion} from 'framer-motion'
import { GlobalStyles } from 'twin.macro'

export default function App({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
    >
      <main>
        <GlobalStyles />
        <Component {...pageProps} />
      </main>
    </motion.div>
  )
}
