"use client"
import data_json from '../../public/data.json';
import { UpdateTestScore } from '../handlers/handleScoreUpdate';

const assessmentQuestions = data_json.AssessmentQuestions.emails;
const assessmentType: string = 'email';

var counter = 0;

let correct: number = 0;
let incorrect: number = 0;
let answerSelected: boolean = false;

// Backend team look here: \/\/\/\/\/\/\/\/\/\/\/\/\/
function onEndAssesment() {
  let continue_button = document.getElementById("continueButton") as HTMLButtonElement;
  continue_button.onmousemove = () => {
    window.location.href = "/home";};
  // Put end assessment logic here.

  UpdateTestScore(assessmentType, correct, 5);
}

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

function resetButtons() {
  let phish_button = document.getElementById("phishButton") as HTMLButtonElement;
  let legit_button = document.getElementById("legitButton") as HTMLButtonElement;
  let continue_button = document.getElementById("continueButton") as HTMLButtonElement;

  const defaultButtonStyle = "";

  phish_button.className = defaultButtonStyle;
  phish_button.disabled = false;
  legit_button.className = defaultButtonStyle;
  legit_button.disabled = false;
  continue_button.style.visibility = "hidden";
  answerSelected = false;
}

function onPhishingSelected() {
  let phish_value = assessmentQuestions[counter].phishing;

  if (answerSelected) return;
  displayContinueBttn();
  annotateImage();
  updateCorrectCounters(phish_value);
}

function onLegitSelected() {
  let phish_value = assessmentQuestions[counter].phishing;

  if (answerSelected) return;
  displayContinueBttn();
  annotateImage();
  updateCorrectCounters(!phish_value);
}

function annotateImage() {
  let image_element = document.getElementById("example_image") as HTMLImageElement;
  image_element.src=assessmentQuestions[counter].location_annotate;
}

function displayContinueBttn() {
  answerSelected = true;
  let continue_button = document.getElementById("continueButton") as HTMLButtonElement;
  let phish_button = document.getElementById("phishButton") as HTMLButtonElement;
  let legit_button = document.getElementById("legitButton") as HTMLButtonElement;
  continue_button.style.visibility="visible";
  phish_button.disabled = true;
  legit_button.disabled = true;
}

function next(){
  counter++;
  if (counter >= Object.keys(assessmentQuestions).length - 1) {
    let continue_button = document.getElementById("continueButton") as HTMLButtonElement;
    continue_button.textContent = "End Assessment";
  }
  if (counter >= Object.keys(assessmentQuestions).length){
    counter = Object.keys(assessmentQuestions).length - 1;
    onEndAssesment();
    return;
  }
  else {
    answerSelected = false;
  }

  // get all the elements to be modified
  resetButtons();

  let image_element = document.getElementById("example_image") as HTMLImageElement
  image_element.src=assessmentQuestions[counter].location
}

export default function assess_email() {
    return (
      <main>
      <div className={"assessment-body"}>
            <div id="questionBox">
              <img id="example_image" src="/emails/email1.png"></img>
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
