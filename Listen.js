"use strict";

class Listen {
  constructor() {
      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
      var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'en-US';
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;
      this.debug=true;
      this.recognition.addEventListener('result', this.onResult)
      this.recognition.addEventListener('speechend', this.onSpeechEnd)
      this.recognition.addEventListener('nomatch', this.onNoMatch)
      this.recognition.addEventListener('error', this.onError)
  }
  listen(){
    this.recognition.start();
  }
  onSpeechEnd(e) {
    //firing?
    if(this.debug){
      console.info("onSpeechEnd", e);
    }
    //this.recognition.stop();
    
  }
  onNoMatch(e) {
    //not firing?
    if(this.debug){
      console.info("onNoMatch", e);
    }
    
  }
  onError(e) {
    //not firing?
    console.warn(e.error, "just happened");
  }
  onResult(e) {
    let question = e.results[0][0].transcript;
    if(this.debug){
      console.log(e);
    }
    //console.log(e, 'Confidence: ' + e.results[0][0].confidence, question);
    console.log(question);
    }
}
let l = new Listen();