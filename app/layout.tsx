import '@/app/ui/global.css';
import { Navbar } from '@/app/ui/navbar';
import { Footer } from '@/app/ui/footer';

export const metadata = {
  title: 'Mystro Security Services | Professional Security Solutions',
  description:
    'Mystro Security Services — a division of Mystro Services LLC. Providing professional security guard services, event security, patrol services, and customized security solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-grid">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
