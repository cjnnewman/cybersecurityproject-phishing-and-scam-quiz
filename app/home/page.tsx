import Link from "next/link";

// will need to have page auto call DB fetch function to fill the following variables
let email_score = 4
let text_score = 3
let ads_score = 5

// update these with the max assessment score
let email_size = 5
let text_size = 5
let ad_size = 5

export default function Home() {
  return (
    
    <main>
      <div className="topBar">
        <div className="container">
          <div className="boxLeft">
            <h1>Cybersecurity Assessment</h1> 
          </div>
          <div className="boxRight">
            <Link href="/">
              <button className="button">Logout</button>
            </Link> 
          </div>
        </div>
      </div>
      <div>
          <div>
            <div id="Email" className="homeBox">

              <div className="containerLeft">
                <p>Phishing email assessment</p>
                <p>Assessment score: {email_score} / {email_size}</p>
              </div>
              <div className="containerRight">
                <Link href="/email">
                  <button className="button">Email</button>
                </Link> 
              </div>
            </div>
            <div id="text" className="homeBox">
              <div className="containerLeft">
                <p>Phishing Text assessment</p>
                <p >Assessment score: {text_score} / {text_size} </p>
              </div>
              <div className="containerRight">
                <Link href="/text">
                  <button className="button">Text</button>
                </Link> 
              </div>
            </div>
            <div id="ads" className="homeBox">
              <div className="containerLeft">
                <p>Scam advertisements assessment</p>
                <p>Assessment score: {ads_score} / {ad_size}</p>
              </div>
              <div className="containerRight">
                <Link href="/ads">
                  <button className="button">Scam Ads</button>
                </Link> 
              </div>
            </div>           
          </div>
        </div>
    </main>
  );
}