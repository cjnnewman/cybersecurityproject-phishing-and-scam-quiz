"use client"
import data_json from '../../public/data.json';

var counter = 0
var assessment_type = 0

let correct: number = 0;
let incorrect: number = 0;
let answerSelected: boolean = false;

function updateCorrectCounters(wasCorrect: boolean) {
  if (wasCorrect) {
    correct++;
    console.log("User chose correctly.");
  }
  else {
    incorrect++;
    console.log("User chose incorrectly.");
  }
}

function markCorrect(button: HTMLElement, isCorrect: boolean) {

}

function onPhishingSelected() {
  let phish_value = data_json.AssessmentQuestions.ads[counter].phishing;

  if (answerSelected) return;
  displayContinueBttn();
  annotateImage();
  updateCorrectCounters(phish_value);
}

function onLegitSelected() {
  let phish_value = data_json.AssessmentQuestions.ads[counter].phishing;

  if (answerSelected) return;
  displayContinueBttn();
  annotateImage();
  updateCorrectCounters(!phish_value);
}

function annotateImage() {
  let image_element = document.getElementById("example_image") as HTMLImageElement;
  image_element.src=data_json.AssessmentQuestions.ads[counter].location_annotate;
}

function displayContinueBttn() {
  answerSelected = true;
  let continue_button = document.getElementById("continueButton") as HTMLElement;
  continue_button.style.visibility="visible";
}

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
  counter++;
  if (counter >= Object.keys(data_json.AssessmentQuestions.ads).length){
    // This is where the end assessment would be!
    counter = Object.keys(data_json.AssessmentQuestions.ads).length - 1;
    return;
  }
  else {
    answerSelected = false;
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
                <button id="phishButton" onClick={onPhishingSelected} className={""}>Phishing</button>
                <button id="legitButton" onClick={onLegitSelected} className={""}>Legit</button>
                <button id="continueButton" className ="buttonHidden" onClick={next}>Continue</button>
            </div>


          </div>

        </div>
      

    </main>
  );
}
