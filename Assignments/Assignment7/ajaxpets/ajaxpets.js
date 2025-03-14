/**
 * A webpage for fetching cute pet photos. Puppies (the best) or
 * kitties will be populated on the page after the user selects their desired
 * pet type.
 */
"use strict";
(function() {

  window.addEventListener("load", init);
  const AJAX_PETS_URL = "https://courses.cs.washington.edu/courses/cse154/webservices/pets/ajaxpets.php";

  /**
   * TODO: What do we need to initialize?
   */
  function init() {
    let radios = qsa("input[name='animal']");
    for (let i = 0; i < radios.length; i++) {
      radios[i].addEventListener("change", makeRequest);
    }
  }

  /**
   * TODO: Fetch data from the CSE 154 ajax pets api!
   */
  function makeRequest() {
    let animal = this.value;

    fetch(AJAX_PETS_URL + "?animal=" + animal)
      .then(checkStatus)
      .then(resp => resp.text())
      .then(displayPictures)
      .catch(console.error);
  }

  /**
   * TODO: Implement any other functions you need
   */
  function displayPictures(response) {
    response = response.trim().split("\n");
    clearPictures();
    for (let i = 0; i < response.length; i++) {
      let imgPath = response[i];
      let img = document.createElement("img");
      img.src = imgPath;
      img.alt = "adorable friend";
      id("pictures").appendChild(img);
    }
  }

  function clearPictures() {
    let imgs = qsa("#pictures img");
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].parentNode.removeChild(imgs[i]);
    }
  }
  /* ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} res - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  async function checkStatus(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();
