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

var tips = {sell: 'Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain', 
upgrade:'Except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure consequences',
advertise: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti',
dontknow: 'am libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus',
customizedWebsite: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',};


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