var ALL_QUESTIONS = {
  whyAreYouHere:{
    question: 'Why are you here',
    options: {
      iHaveTech: 'I have tech', 
      iNeedTech: 'I need tech'
      }
  },
  iNeedTech:{
    question: 'What do you need?',
    options: {
      website: 'A website',
      socialMedia: 'Social media'
    }
  },
  website: {
    question: 'What do you want your website to do?',
     options: {
            sell: 'To sell things', 
            upgrade: 'Ugrade an existing website', 
            advertise: 'To advertise my business', 
            dontknow: 'I don\'t know! I just want to be on the internet!', 
            customizedWebsite: 'Heavily customized website'
    },
    ajaxCall: true
  }
}; 

var tips = {sell: 'sellsellsellsellsellsellsellsellsellsellsellsellsellsellsellsellsell', 
upgrade:'upgradeupgradeupgradeupgradeupgradeupgradeupgradeupgradeupgradeupgradeupgrade',
advertise: 'advertiseadvertiseadvertiseadvertiseadvertiseadvertiseadvertiseadvertiseadvertise',
dontknow: 'dontknowdontknowdontknowdontknowdontknowdontknowdontknowdontknowdontknowdontknowdontknowdontknow',
customizedWebsite: 'customizedWebsitecustomizedWebsitecustomizedWebsitecustomizedWebsitecustomizedWebsitecustomizedWebsitecustomizedWebsite',};


$(document).ready(function(){
    $("body").on('mouseenter','.Option', function(event){
      $(this).find('small').show(1000);
    });
    $("body").on('mouseleave','.Option', function(event){
      $(this).find('small').hide(500);
    });
});


window.ALL_QUESTIONS = ALL_QUESTIONS;
window.tips = tips;