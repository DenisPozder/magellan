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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://w.eventlin.com/widget/widget30.min.js" onLoad={console.log("Ucitana je skripta")}></script>
        <link rel="stylesheet" href="https://w.eventlin.com/widget/widget30.min.css" />
      </head>
      <body className={montserrat.className}>
          <Header />
            {children}
          <Footer />
      </body>
    </html>
  )
}
