import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700', '900'] })

export const metadata = {
  title: 'Magellan',
  description: 'Ovo je globalna deskripcija',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
          <Header />
            {children}
          <Footer />
      </body>
    </html>
  )
}
