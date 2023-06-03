(function(window) {
  var speakWord = "Adiós";
  
  var ByeSpeaker = {
    speak: function(name) {
      console.log(speakWord + " " + name);
    }
  };

  window.ByeSpeaker = ByeSpeaker;
})(window);
