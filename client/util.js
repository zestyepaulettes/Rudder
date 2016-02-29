var ALL_QUESTIONS = {
  whyAreYouHere:{
    question: 'What can we help you with today?',
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

var tips = {sell: 'Click here if you would like to find people who can help you build a website to sell your products or services. Selling online can be an extremely lucrative additional revenue stream for many businesses, making you available to find by anyone accross the web. There are many different options when it comes to selling online including using what we call third-party \'widgets\' which make it easy to get up and running and are more than sufficient for most simple online transactions. \n For more complicated sales procedures (for specialized products or services), you may also consider having your own personal online shop built for you! Either way, click here to be connected with the right service providers who can definitely provide you with more information.',
upgrade: 'Click here if you\'re looking to give your existing page a revamp or want to add more functionality. We can connect you with designers who can help you give your website a refresh.',
advertise: 'If you\'re looking to try and build a bigger online presence, this is the button for you! This could mean you need a website to get more customers, you want to hear about how to make your website more attractive to drive more traffic to it (this is known as SEO- Search Engine Optimisation) or just to show off your products! Whatever you need to advertise your company, click here!',
dontknow: 'If you have no idea what you need, this is the way forward for you! You can get setup with a really straightforward and simple online solution.',
customizedWebsite: 'If you need something more heavy duty or you think you need something custom built, click here and we\'ll hook you up with one of our web whizzes (known in the business as full-stack engineers) who will be able to help you out with what you need.'};


$(document).ready(function(){
    $('body').on('mouseenter','.glyphicon', function(event){
      // $(this).find('small').fadeIn(600);
      $(this).closest('.option').find('small').fadeIn(600);
    });
    $('body').on('mouseleave','.glyphicon', function(event){
      // $(this).find('small').fadeOut(400);
      $(this).closest('.option').find('small').fadeOut(300);

    });
});


window.ALL_QUESTIONS = ALL_QUESTIONS;
window.tips = tips;
