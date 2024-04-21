import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'KodeMonk',
  description: 'KodeMonk - My place on internet',
  icons: '/favicon.ico',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // maximumScale: 1,
  // userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
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
