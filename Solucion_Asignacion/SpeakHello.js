(function(window) {
  var speakWord = "Hola";
  
  var HelloSpeaker = {
    speak: function(name) {
      console.log(speakWord + " " + name);
    }
  };

  window.HelloSpeaker = HelloSpeaker;
})(window);
