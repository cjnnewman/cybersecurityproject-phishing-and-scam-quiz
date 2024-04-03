import { getServerSession } from 'next-auth';
import LoginForm from './login_form';
import RegisterForm from './register_form';
import { redirect } from 'next/navigation';

export default async function LoginRegisterPage() {
  const session = await getServerSession();
  if (session) {
    redirect('./dashboard');
  }
  return (
    <div className='h-screen flex flex-row items-center justify-center'>
      <LoginForm />
      <RegisterForm />
    </div>
  )
}