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
      <div>
        <div>
          <div id="Email" className="homeBox">
            <div className="containerLeft">
              <p>Phishing email assessment</p>
              <p className="border-8">Assessment score: {email_score} / {email_size}</p>
            </div>
            <div className="containerRight">
              <Link href="/assess_email">
                <button className="button">Email</button>
              </Link> 
            </div>
          </div>
          <div id="text" className="homeBox">
            <div className="containerLeft">
              <p>Phishing Text assessment</p>
              <p className="border-8" >Assessment score: {text_score} / {text_size} </p>
            </div>
            <div className="containerRight">
              <Link href="/assess_text">
                <button className="button">Text</button>
              </Link> 
            </div>
          </div>
          <div id="ads" className="homeBox">
            <div className="containerLeft">
              <p>Scam advertisements assessment</p>
              <p className="border-8">Assessment score: {ads_score} / {ad_size}</p>
            </div>
            <div className="containerRight">
              <Link href="/assess_ads">
                <button className="button">Scam Ads</button>
              </Link> 
            </div>
          </div>           
        </div>
      </div>
    </main>
  );
}