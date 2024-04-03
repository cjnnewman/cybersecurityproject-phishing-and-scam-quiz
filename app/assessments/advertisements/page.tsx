"use client"
import data_json from '../../../public/data.json';

var counter = 0
var assessment_type = 0



function testButtonPress(){
  let phish_button = document.getElementById("phishButton") as HTMLElement
  let legit_button = document.getElementById("legitButton") as HTMLElement
  let continue_button = document.getElementById("continueButton") as HTMLElement


  let image_element = document.getElementById("example_image") as HTMLImageElement
  image_element.src=data_json.AssessmentQuestions.ads[counter].location_annotate

  let phish_value = data_json.AssessmentQuestions.ads[counter].phishing

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
  if (counter+1 < Object.keys(data_json.AssessmentQuestions.ads).length){

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
  image_element.src=data_json.AssessmentQuestions.ads[counter].location

  // reset CSS
  phish_button.style.background="blue"
  legit_button.style.background="blue"
  continue_button.style.visibility="hidden"
}

import Link from "next/link";

export default function Home() {
  return (
    <main>

    <div id="topBar" className={""}>
      <h1 className={""}>Cybersecurity Assessment</h1> 
      <Link href="/home">
          <button className={"bg-cyan-800 hover:bg-cyan-700"}>Home</button>
      </Link>
      <Link href="/">
        <button className={"bg-red-600 hover:bg-red-500 mr-2"}>Logout</button>
      </Link> 
    </div>

    <div className={"assessment-body"}>
          <div id="questionBox">

            <img id="example_image" src="/ads/ad1.png"></img>
            <div className={"assessment-buttons sm:flex-row"}>
                <button id="phishButton" onClick={testButtonPress} className={""}>Phishing</button>
                <button id="legitButton" onClick={testButtonPress} className={""}>Legit</button>
                <button id="continueButton" className ="buttonHidden" onClick={next}>Continue</button>
            </div>


          </div>

        </div>
      

    </main>
  );
}
