import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Magellan',
  description: 'Ovo je globalna deskripcija',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header />
            {children}
          <Footer />
      </body>
    </html>
  )
}
