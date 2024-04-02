"use client"
const data_json = require('../../../public/data.json');

var counter = 0
var assessment_type = 0



function testButtonPress(){
  let phish_button = document.getElementById("phishButton") as HTMLElement
  let legit_button = document.getElementById("legitButton") as HTMLElement
  let continue_button = document.getElementById("continueButton") as HTMLElement


  let image_element = document.getElementById("example_image") as HTMLImageElement
  image_element.src=data_json.AssessmentQuestions[0].ads[counter].location_annotate

  let phish_value = data_json.AssessmentQuestions[0].ads[counter].phishing

  // if example is phishing
  if (phish_value == true){ 
    phish_button.style.background="green"
    legit_button.style.background="red"
    continue_button.style.visibility="visible"
  }

  // if example is legit
  else{ 
    phish_button.style.background="red"
    legit_button.style.background="green"
    continue_button.style.visibility="visible"
  }
}

function next(){
  if (counter+1 < Object.keys(data_json.AssessmentQuestions[0].ads).length){

    // This is where the end assessment would be!
    counter++
  }
  else{
    counter =0
  }

  // get all the elements to be modified
  let phish_button = document.getElementById("phishButton") as HTMLElement
  let legit_button = document.getElementById("legitButton") as HTMLElement
  let continue_button = document.getElementById("continueButton") as HTMLElement

  let image_element = document.getElementById("example_image") as HTMLImageElement
  image_element.src=data_json.AssessmentQuestions[0].ads[counter].location

  // reset CSS
  phish_button.style.background="blue"
  legit_button.style.background="blue"
  continue_button.style.visibility="hidden"
}

import Link from "next/link";

export default function Home() {
  return (
    <main>

      <div id="topBar" className="div1">
        <h1>Cybersecurity Assessment</h1> 
        <Link href="/">
          <button>Logout</button>
        </Link> 
      </div>

      <div>
          <div id="questionBox" className="div1">

            <Link href="/home">
              <button>Home</button>
            </Link>

            <img id="example_image" src="/ads/ad1.png"></img>

            <button id="phishButton" onClick={testButtonPress}>Phishing</button>

            <button id="legitButton" onClick={testButtonPress}>Legit</button>

            <button id="continueButton" className ="buttonHidden" onClick={next}>Continue</button>


          </div>

        </div>
      

    </main>
  );
}
