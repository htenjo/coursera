(function () {
  console.log("Hey I'm running.... ");

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i=0; i<names.length; i++) {
    var name = names[i];
    var currentDiv;

    if(name.charAt(0).toLowerCase() === "j"){
      byeSpeaker.speak(name);
    }else{
      helloSpeaker.speak(name);
    }
  }
})();