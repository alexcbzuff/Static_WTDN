document.addEventListener("DOMContentLoaded", function () {
  // Define a function to handle button click and display data
  function displayData(dataDiv) {
    // Get the innerHTML of the data div
    var dataContent = dataDiv.innerHTML;

    // Set the innerHTML of data display container with the data content
    dataDisplayDiv.innerHTML = dataContent;
  }

  // Get references to the elements by their IDs
  var greetingButton = document.getElementById("greeting_button");
  var missionButton = document.getElementById("mission_button");
  var productRangeButton = document.getElementById("product_range_button");
  var managementTeamButton = document.getElementById("management_team_button");
  var marketDataButton = document.getElementById("market_data_button");
  var companyResourceButton = document.getElementById("company_resource_button");
  var competitorsButton = document.getElementById("competitors_button");
  var distributionChannelsButton = document.getElementById("distribution_channels_button");

  // Access the data display div
  var dataDisplayDiv = document.getElementById("data_display");

  // Initially, set the data display div to empty
  dataDisplayDiv.innerHTML = "";

  // Event listeners to display corresponding data
  greetingButton.addEventListener("click", function () {
    var greetingDiv = document.getElementById("greeting");
    displayData(greetingDiv);
  });

  missionButton.addEventListener("click", function () {
    var yourMissionDiv = document.getElementById("your_mission_at_frigus");
    displayData(yourMissionDiv);
  });

  productRangeButton.addEventListener("click", function () {
    var frigusProductRangeDiv = document.getElementById("frigus_product_range");
    displayData(frigusProductRangeDiv);
  });

  managementTeamButton.addEventListener("click", function () {
    var frigusManagementTeamDiv = document.getElementById("frigus_management_team");
    displayData(frigusManagementTeamDiv);
  });

  marketDataButton.addEventListener("click", function () {
    var frigusMarketDataDiv = document.getElementById("frigus_market_data");
    displayData(frigusMarketDataDiv);
  });

  companyResourceButton.addEventListener("click", function () {
    var frigusCompanyResourcesDiv = document.getElementById("frigus_company_resources");
    displayData(frigusCompanyResourcesDiv);
  });

  competitorsButton.addEventListener("click", function () {
    var frigusCompetitorDataDiv = document.getElementById("frigus_competitor_data");
    displayData(frigusCompetitorDataDiv);
  });

  distributionChannelsButton.addEventListener("click", function () {
    var frigusDistributionChannelsDiv = document.getElementById("frigus_distribution_channels");
    displayData(frigusDistributionChannelsDiv);
  });

  // Access the "myButton" and "myBox" elements
  var myButton = document.getElementById("myButton");
  var myBox = document.getElementById("myBox");

  // Event listener for myButton
  myButton.onclick = function () {
    if (myBox.style.backgroundColor === "yellow") {
      myBox.style.backgroundColor = "red";
    } else {
      myBox.style.backgroundColor = "yellow";
    }
  };
});
