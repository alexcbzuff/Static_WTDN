// Function to fill the data_display div with relative data
function fillDataDisplay(data) {
    var dataDisplayDiv = document.getElementById('data_display');
    dataDisplayDiv.innerHTML = data;
  }
  
  // Add click event listeners to each button
  document.getElementById('greeting_button').addEventListener('click', function () {
    var greetingData = document.getElementById('greeting').innerText;
    fillDataDisplay(greetingData);
  });
  
  document.getElementById('mission_button').addEventListener('click', function () {
    var missionData = document.getElementById('your_mission_at_frigus').innerText;
    fillDataDisplay(missionData);
  });
  
  document.getElementById('product_range_button').addEventListener('click', function () {
    var productRangeData = document.getElementById('frigus_product_range').innerHTML;
    fillDataDisplay(productRangeData);
  });
  
  document.getElementById('management_team_button').addEventListener('click', function () {
    var managementTeamData = document.getElementById('frigus_management_team').innerHTML;
    fillDataDisplay(managementTeamData);
  });
  
  document.getElementById('market_data_button').addEventListener('click', function () {
    var marketData = document.getElementById('frigus_market_data').innerHTML;
    fillDataDisplay(marketData);
  });
  
  document.getElementById('company_resource_button').addEventListener('click', function () {
    var companyResourceData = document.getElementById('frigus_company_resources').innerHTML;
    fillDataDisplay(companyResourceData);
  });
  
  document.getElementById('competitors_button').addEventListener('click', function () {
    var competitorsData = document.getElementById('frigus_competitor_data').innerHTML;
    fillDataDisplay(competitorsData);
  });
  
  document.getElementById('distribution_channels_button').addEventListener('click', function () {
    var distributionChannelsData = document.getElementById('frigus_distribution_channels').innerText;
    fillDataDisplay(distributionChannelsData);
  });
  