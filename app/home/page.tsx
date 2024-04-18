import Link from "next/link";
import { GetTestScores } from "../handlers/getTestScores";
import { Suspense } from "react";

// will need to have page auto call DB fetch function to fill the following variables
let email_score = 4
let text_score = 3

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
                <p id="email_score" className="border-8">Assessment score: {GetTestScores('email')} / {email_size}</p>
              </div>
              <div className="containerRight">
                <Link href="/assess_email">
                  <button id="email_assess_button" className="button">Email</button>
                </Link>
              </div>
            </div>
            <div id="text" className="homeBox">
              <div className="containerLeft">
                <p>Phishing Text assessment</p>
                <p id="test_score" className="border-8" >Assessment score: {GetTestScores('text')} / {text_size} </p>
              </div>
              <div className="containerRight">
                <Link href="/assess_text">
                  <button id="text_assess_button" className="button">Text</button>
                </Link>
              </div>
            </div>
            <div id="ads" className="homeBox">
              <div className="containerLeft">
                <p>Scam advertisements assessment</p>
                <p id="ads_score" className="border-8">Assessment score: {GetTestScores('ads')} / {ad_size}</p>
              </div>
              <div className="containerRight">
                <Link href="/assess_ads">
                  <button id="ads_assess_button" className="button">Scam Ads</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
}