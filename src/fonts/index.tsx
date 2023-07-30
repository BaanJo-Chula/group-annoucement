import localFont from 'next/font/local';
import { IBM_Plex_Sans_Thai } from 'next/font/google';
export const salapao = localFont({
  src: [
    {
      path: './salapaoFonts/MN-SALAPAO.ttf',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: './salapaoFonts/MN-SALAPAO-Italic.ttf',
      weight: 'normal',
      style: 'italic',
    },
    {
      path: './salapaoFonts/MN-SALAPAO-Bold.ttf',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: './salapaoFonts/MN-SALAPAO-Bold-Italic.ttf',
      weight: 'bold',
      style: 'italic',
    },
  ],
  variable: '--font-salapao ',
});

export const ibmthai = IBM_Plex_Sans_Thai({
  subsets: ['thai'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-ibmthai',
});
