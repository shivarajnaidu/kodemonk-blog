import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import '@/styles/globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KodeMonk',
  description: 'KodeMonk - My place on internet',
  viewport: 'width=device-width, initial-scale=1',
  icons: '/favicon.ico',
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
