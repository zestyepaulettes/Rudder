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

var tips = {sell: 'sell sell sell sell sell sell sellv sellsells ellsell sellsel lsellsel lsellsell', 
upgrade:'upgradeup gradeup gradeupg radeupg radeupgrad eupgradeupgr adeupgradeupgr adeupgrade',
advertise: 'adver ti seadve rtise advertisea dvertisea dvert iseadvert iseadv ertisead vertiseadvertise',
dontknow: 'dontknowdontk nowdont knowdon tkno wdontknowd k now dontknowdont knowdontkn owd ontknowdontknowdontknow',
customizedWebsite: 'cust om izedWebs itecust omi z edWebsit ecus t omizedWebsitecus tomize dWebsit ecusto edWebsite dWebsite',};


$(document).ready(function(){
    $('body').on('mouseenter','.option', function(event){
      $(this).find('small').show(200);
    });
    $('body').on('mouseleave','.option', function(event){
      $(this).find('small').hide(100);
    });
});


window.ALL_QUESTIONS = ALL_QUESTIONS;
window.tips = tips;