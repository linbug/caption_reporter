
document.addEventListener('DOMContentLoaded', function(){


    document.getElementById("buttonfcc").addEventListener("click", function(){
        console.log('lol');
        chrome.tabs.create({ "url":"https://consumercomplaints.fcc.gov/hc/en-us/requests/new?ticket_form_id=36040" });
    });

    document.getElementById("buttonyou").addEventListener("click", function(){
        console.log('lol');
        var youtab = chrome.tabs.create({ "url":"https://www.youtube.com/caption_notification" });

    });

});