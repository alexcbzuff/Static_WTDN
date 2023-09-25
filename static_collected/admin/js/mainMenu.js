// Store references to buttons and messages
const greetingButton = document.getElementById('greetingButton');
const greetingMessage = document.getElementById('greetingMessage');
const missionButton = document.getElementById('yourMissionAtFrigus');
const missionMessage = document.getElementById('missionMessage');
const frigusProductRange = document.getElementById('frigusProductRange');
const productRangeMessage = document.getElementById('productRangeMessage');
const frigusManagementTeam = document.getElementById('frigusManagementTeam');
const managementTeamMessage = document.getElementById('managementTeamMessage');
const frigusMarket = document.getElementById('frigusMarket');
const marketMessage = document.getElementById('marketMessage');
const frigusCompanyResources = document.getElementById('frigusCompanyResources');
const companyResourcesMessage = document.getElementById('companyResourceMessage');
const frigusDistributionChannels = document.getElementById('frigusDistributionChannels');
const distributionChannelsMessage = document.getElementById('distributionChannelsMessage');
const frigusCompetitors = document.getElementById('frigusCompetitors');
const myTable = document.getElementById('myTable');
const competitorTableLabel = document.getElementById('competitorTableLabel');
const placeHolder = document.getElementById('placeHolder');
const proceed = document.getElementById('proceed');

// Add click event listeners to buttons
greetingButton.addEventListener('click', function() {
  resetAllMessages();
  greetingMessage.style.display = 'block';
});
missionButton.addEventListener('click', function() {
  resetAllMessages();
  missionMessage.style.display = 'block';
});
frigusProductRange.addEventListener('click', function() {
  resetAllMessages();
  productRangeMessage.style.display = 'block';
});
frigusManagementTeam.addEventListener('click', function() {
  resetAllMessages();
  managementTeamMessage.style.display = 'block';
});
frigusMarket.addEventListener('click', function() {
  resetAllMessages();
  marketMessage.style.display = 'block';
});
frigusCompanyResources.addEventListener('click', function() {
  resetAllMessages();
  companyResourcesMessage.style.display = 'block';
});
frigusDistributionChannels.addEventListener('click', function() {
  resetAllMessages();
  distributionChannelsMessage.style.display = 'block';
});
frigusCompetitors.addEventListener('click', function() {
  resetAllMessages();
  myTable.style.display = 'table';
  competitorTableLabel.style.display = 'block';
});
proceed.addEventListener('click', function() {
  window.location.href = 'marketUpdate.html';
});
// Helper function to hide all messages
function resetAllMessages() {
placeHolder.style.display = 'none';
  greetingMessage.style.display = 'none';
  missionMessage.style.display = 'none';
  productRangeMessage.style.display = 'none';
  managementTeamMessage.style.display = 'none';
  marketMessage.style.display = 'none';
  companyResourcesMessage.style.display = 'none';
  distributionChannelsMessage.style.display = 'none';
  myTable.style.display = 'none';
  competitorTableLabel.style.display = 'none';
}
