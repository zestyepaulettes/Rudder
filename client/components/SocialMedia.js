//This is a static page that guides the business owners to set up a few social media pages like facebook. 
var SocialMedia = (props) => (
  <div>
    <div id="facebook"className="container" className="jumbotron">
      <a className="btn btn-social-icon btn-twitter">
        <span className="fa fa-twitter"></span>
      </a>
      <h1>Do you have a Facebook page?</h1><br/>
        <p>With 1.59 billion active users monthly, Facebook is the largest social network. There are numerous benefits for opening a Facebook account for your business.</p><br/>
        <p>There are three different account options on Facebook:</p><br/>
        <p> Pages are for businesses. They are entirely open to the public. Pages can also have applications and custom tabs to help engage with your audiences. You can have as many Pages as you want and there are no limits on the numbers of fans (likes) you can have. <b>This is recommended if you plan to build long-term relationship with your customers. </b>
        </p><br/>
        <p><b>Profiles are for your personal use </b> and represent you as a person. Because of this, Facebook limits you to 5000 friends and you can ‘like’ up to 500 pages. You’re only allowed to have one personal profile. <b>This is not recommended for businesses.</b>
        </p><br/>

        <p><b>Groups are for people who share a common interest.</b> Group members can facilitate chats, upload photos to shared albums, and invite members who are friends to group events. This is recommended for you if your goal is short-term discussion or if you want to get quickly get attention, such as getting a following to support a current popular issue.
        </p><br/>

        <p>TIP: Repond to all comments to show that you are active and listening to customer response. Less than 30% of companies respond to comments, and this reflects poorly on a company.</p>
    </div><br/><br/>

    <div id="twitter"className="container" className="jumbotron">
      <h1> Do you have a Twitter account?</h1><br/>
      <p> Everything on your profile — your photo, header bio and Tweets — should reflect your business identity and personality. Use them to showcase your best content.</p><br/><br/>
      <p> 5 components of having a twitter:</p><br/>
        <p>1. Tweet<br/>
          A Tweet is a message posted on Twitter, that is 140 characters or less. It can contain text, photos, links and videos. Whenever you include any of these things they will automatically take up to 22 characters.
        </p><br/>
        <p>2. Reply<br/>
            Click ‘reply’ to respond to a Tweet. Replying to a Tweet is a nice way to build relationships with your followers and join in conversations.
        </p><br/>
        <p>3. Retweet<br/>
            A Retweet is where you choose to take a Tweet from someone else and Tweet it to your own followers. You can either do this directly with the Retweet button or you can use the Quote Tweet button to add your own message to the original Tweet.
        </p><br/>
        <p>4. Like <br/>
            Liking something is a great way of acknowledging or showing your appreciation for a Tweet. It can also be useful to use as a bookmarking tool if you want to easily find a Tweet again.
        </p><br/>
        <p>5. Hashtag <br/>
            A hashtag is any word, or phrase without spaces, beginning with the # symbol. People use hashtags to organize conversations and make it easier to find all content related to a given topic. Click on a hashtag to go directly to the search results for that term.
        </p>
    </div><br/><br/>

    <div id="yelp" className="container" className="jumbotron">
      <h1>Do you have a Yelp page?</h1> <br/>
      <p>Yelp is a powerful way to expose your business to local customers. Studies have shown that Nail Salons, Day Spa, Massage Therapy, and Restaurants benefit the most from using Yelp.</p><br/><br/>
      <p> There are several compnents to holding a successful yelp account for your business:</p> <br/>
        <p>1. Name and category<br/>
          Make sure there are no typos and that you are listed under the correct category. The most important step to garnering customers is to make your business searchable!
        </p><br/>
        <p>2. Detailed address and phone number<br/>
          Giving the most accurate information of your location and contact number is crucial for business. You want to update this info right away if it changes.
        </p><br/>
        <p>3. Include the link to your website and menu<br/>
          This step is important for winning over new customers. Having an enticing website may be factor that draws customers to your business over another business. If your business is a restaurant, be sure to include an extensive menu.
        </p><br/>
        <p>4. Have quality photos<br/>
          Include at least 20 quality photos that reflect well on your products and your location.  Many customers base their decisions on
        </p><br/>
        <p>5. Garner a lot of reviews<br/>
          According to a research 79% of people trust online reviews as much as personal recommendations and 44% of customers base their decision after reading a reviews. If you are brand new, you can optimize your yelp account by kindly enticing customers to review your business.
        </p><br/>
        <p>6. Damage control on bad reviews<br/>
          If an honest customer left a bad review, you can alleviate certain situations by firstly thanking the viewer for their honest review and apologizing.
          By contacting your reviewer and establishing a personal connection, you have a chance to mitigate the situation and maybe even change this customer’s perspective in a positive way.
          It is also possible that competitors are leaving bad reviews for their own benefit; if you suspect this, report to Yelp. Yelp recognizes this type of malpracticee and can remove it for you – if there is enough evidence.
        </p><br/>

    </div>
  </div>
);
window.SocialMedia = SocialMedia;
