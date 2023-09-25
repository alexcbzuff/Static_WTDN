// Get the elements we need to manipulate
var marketUpdateContainer = document.getElementById('market_update_container');
var actionContainer = document.getElementById('market_action_container');
var updateButton = document.getElementById('update_button');

// Load all the preloaded data from the DOM
var uncertainMarketUpdates = Array.from(document.getElementsByClassName('market-update-uncertain'));
var matureMarketUpdates = Array.from(document.getElementsByClassName('market-update-mature'));
var actionsControl = Array.from(document.getElementsByClassName('frigus-action-control'));
var actionsPrediction = Array.from(document.getElementsByClassName('frigus-action-prediction'));

// Current index for market updates and actions
var marketUpdateIndex = 0;
var actionControlIndex = 0;
var actionPredictionIndex = 0;

// Counter for market updates
var marketUpdateCount = 0;

// Choose marketUpdates randomly on page load
var marketUpdates = Math.random() < 0.5 ? uncertainMarketUpdates : matureMarketUpdates;

// Function to update the Market Update display
function updateMarketUpdate() {
  // Check if we have reached 10 market updates
  if (marketUpdateCount >= 10) {
    // Clear the screen and create the 'Proceed to the debrief' button
    marketUpdateContainer.innerHTML = "<button id='debrief'>Proceed to the debrief</button>";
    
    // Get the debrief button
    var debriefButton = document.getElementById('debrief');
  
    // Add event listener to the debrief button
    debriefButton.addEventListener('click', function() {
      // Redirect to the debrief page
      window.location.href = "/debrief/";
    });
  
    // Clear the action container
    actionContainer.innerHTML = "";
    return;
  }

  // Get the next market update from the preloaded data
  var marketUpdate = marketUpdates[marketUpdateIndex];

  // Update the H1 tag in marketUpdateContainer with new data
  marketUpdateContainer.getElementsByTagName('h1')[0].innerText = marketUpdate.dataset.marketUpdates;

  // Update the current market update index, looping back to 0 if we've gone past the end
  marketUpdateIndex = (marketUpdateIndex + 1) % marketUpdates.length;

  // Call function to update the Action buttons
  updateActionButtons();

  // Increment the market update count
  marketUpdateCount++;
}

// Function to update the Action buttons
function updateActionButtons() {
  // Get the next five control and prediction actions from the preloaded data
  var nextActions = actionsControl.slice(actionControlIndex, actionControlIndex + 5)
    .concat(actionsPrediction.slice(actionPredictionIndex, actionPredictionIndex + 5));

  // Loop through all the buttons in the Action container
  for (let i = 0; i < actionContainer.getElementsByTagName('button').length; i++) {
    // Update the button text with the new Action description
    actionContainer.getElementsByTagName('button')[i].innerText = nextActions[i].dataset.actionDescription;
  }

  // Update the current action indices, looping back to 0 if we've gone past the end
  actionControlIndex = (actionControlIndex + 5) % actionsControl.length;
  actionPredictionIndex = (actionPredictionIndex + 5) % actionsPrediction.length;
}

// Attach an 'click' event listener to the 'Proceed to next market update' button
updateButton.addEventListener('click', function() {
  updateMarketUpdate();
});

// Call updateMarketUpdate() once on page load to initialize the display
updateMarketUpdate();
