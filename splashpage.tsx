import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24" style={{gap:"15px"}}>
  <h1>FGCU Assessment Tool for Cybersecurity Awareness</h1>





  
<div className="welcomeBox">

<p>
  According to the University of Michigan Institute for Healthcare Policy and Innovation, in a survey of people ages 50-80 years old, 75% of them reported having encountered an attempt at scamming them via phone, text, email, or mail. 30% reported that they were a victim of scams. This Assessment hopes to help members of the elderly population analyze their scam recognition skills.
</p>
<div>
<Image className="image" src="/images/shocked man with phone.jpg" alt="image of a shocked man with phone in hand" width={500} height={1000} />
<button className="welcomeButton">
  Continue
</button>
</div>

</div>





    
    </main>
  );
}
