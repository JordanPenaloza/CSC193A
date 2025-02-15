/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * This function initializes the event listeners for Encrypt and Reset buttons
   * Called when the window loads to ensure DOM is fully constructed
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    const button1 = document.getElementById("encrypt-it")
    const button2 = document.getElementById("reset");

    if (button1) {
      button1.addEventListener("click", handleEncrypt);
    }
    else {
      console.warn("Button with ID 'encrypt-it' not found.")
    }

    if (button2) {
      button2.addEventListener("click", handleReset)
    }
    else {
      console.warn("Button with ID 'reset' not found.");
    }

  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  /**
   * Encrypts text in input area using shift cipher by calling shiftCipher function
   * displays result
   */
  function handleEncrypt() {
    const textBox = document.getElementById("input-text");
    const output = document.getElementById("result");
    if (textBox && output) {
      const inputText = textBox.value;
      const encryptedText = shiftCipher(inputText);
      output.textContent = encryptedText;
    }
    else {
      console.error("Textarea or result element not found.");
    }
  }
  /**
   * Resets the text area making it blank
   */
  function handleReset() {
    const textBox = document.getElementById("input-text");
    if (textBox) {
      textBox.value = "";
    }
  }
  /**
   * Takes the input text as a parameter and shifts it by 1 charcode
   * @param {string} text - input text
   * @returns {string} - encrypted text
   */
  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";

    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      }
      else if (text[i] == 'z'){
        result += 'a';
      }
      else {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }
})();
