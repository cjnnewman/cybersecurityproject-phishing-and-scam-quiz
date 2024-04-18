import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function LoginRegisterPage() {
  const session = await getServerSession();
  if (session) {
    redirect('./dashboard');
  }
  return (
    <main>
      <div>
          <div id="questionBox" className="div3">
          <div className="loginbuttons">
          <label>Register an Account:</label>
          <p></p>
            <Link href="/signup">
                <button>Sign Up</button>
              </Link> 
          </div>
              
          <div className="loginbuttons">
          <label>Continue with Existing Account:</label>
          <p></p>
            <Link href="/login">
                <button>Log In</button>
              </Link> 
          </div>
          </div>
        </div>
    </main>
  )
}