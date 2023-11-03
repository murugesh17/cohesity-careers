//import './globals.css'
import Header from './components/header'
import Footer from './components/footer'

import 'bootstrap/dist/css/bootstrap.css'
import { Inter } from 'next/font/google'
import { EXAMPLE_PATH, CMS_NAME } from '@/lib/constants'
import './styles/main.css'

export const metadata = {
  title: `Careers Cohesity`,
  description: `Open positions, jobs, Employment opportunities `,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
