import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import Logout from './logout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FGCU Cyber Awareness',
  description: 'A site dedicated to informing individuals of current phishing and social engineering attacks',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
      <html lang="en">
      <body>
      <nav>
        <div className="topBar">
          <div className="container">
            <div className="boxLeft">
              <h1>Cybersecurity Assessment</h1>
            </div>
            <div className="boxRight">
              <Link href="/">
                <button id="welcome_button" className="button">Welcome</button>
              </Link>
              <Link href="/home">
                <button id="home_button" className="button">Home</button>
              </Link>
              {!!session && <Logout />}
              {!session && <Link href="/login-register">
                <button id="login_button" className='button'>Login</button>
                </Link>}
            </div>
          </div>
        </div>

      </nav>
      {children}
      </body>
      </html>
  );
}
