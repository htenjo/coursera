(function (global){
    var helloSpeaker = {};
    var speakWord = "Hello ";

    function speak(name) {
      console.log(speakWord + name);
    }

    helloSpeaker.speak = speak;
    global.helloSpeaker = helloSpeaker;
})(window);