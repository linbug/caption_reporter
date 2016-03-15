
//wait until the popup is loaded
document.addEventListener('DOMContentLoaded', function(){

    //if the FCC button is pressed, open the FCC complaints tab
    document.getElementById("buttonfcc").addEventListener("click", function(){
        console.log('lol');
        chrome.tabs.create({ "url":"https://consumercomplaints.fcc.gov/hc/en-us/requests/new?ticket_form_id=36040" });
    });

    //if the YouTube tab is pressed, open the YouTube complaints tab
    document.getElementById("buttonyou").addEventListener("click", function(){
        console.log('lol');
        var youtab = chrome.tabs.create({ "url":"https://www.youtube.com/caption_notification" });

    });

});