import Link from "next/link"

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="div3">
        <p>Welcome!</p>
        <h className="body">This is a page to test your knowledge in identifying different types of scams. Here you can learn to spot scams so that you can stay safe online.</h>
        <p></p>
        <Link href="/login-register">
          <button className="button">Continue to site</button>
        </Link>
      </div>

    </main>
  )
}
