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
      <body className="bg-gradient-to-r from-blue-500 to-teal-700"> 
        <nav>
          <div className="topBar">
            {!!session && <Logout />}
            {!session && <Link href="/login-register">Login</Link>}
            <div className="container">
              <div className="boxLeft">
                <h1>Cybersecurity Assessment</h1> 
              </div>
              <div className="boxRight">
                <Link href="/">
                  <button className="button">Welcome</button>
                </Link> 
                <Link href="/">
                  <button className="button">Home</button>
                </Link> 
                <Link href="/">
                  <button className="button">Logout</button>
                </Link> 
              </div>
            </div>
          </div>
          
        </nav>
        {children}
      </body>
    </html>
  );
}
