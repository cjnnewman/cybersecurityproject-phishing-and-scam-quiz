import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
  <main>
    <div>
      <p>
        According to the University of Michigan Institute for Healthcare Policy and Innovation, in a survey of people ages 50-80 years old, 75% of 
        them reported having encountered an attempt at scamming them via phone, text, email, or mail. 30% reported that they were a victim of scams. 
        This Assessment hopes to help members of the elderly population analyze their scam recognition skills.
      </p>
      <div>
        <Image className="image" src="/shocked_man_with_phone.jpeg" alt="image of a shocked man with phone in hand" width={500} height={1000} />
        <Link href="/login-register">
          <button className="button">Continue to Site!</button>
        </Link>
      </div>
    </div>
  </main>
  )
}
