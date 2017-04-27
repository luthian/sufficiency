'use strict';
/* Utility functions and variables */

var Util = {} || Util;
Util.ETHICAL = 0;
Util.SOMEWHAT_ETHICAL = 1;
Util.SOMEWHAT_UNETHICAL = 2;
Util.UNETHICAL = 3;

Util.RECIPROCITY = 0;
Util.SOCIAL_PROOF = 1;
Util.COMMITMENT = 2;
Util.LIKING = 3;
Util.AUTHORITY = 4;
Util.SCARCITY = 5;

Util.ethicalOptions = [
        { text: 'Ethical', value: Util.ETHICAL, definition: "All pertinent information is included allowing you to make an informed decision." },
        { text: 'Somewhat ethical', value: Util.SOMEWHAT_ETHICAL, definition: "Some information is missing but it won't change your ability to make an informed decision. If it were included, it wouldn't your lower confidence in your decision." },
        { text: 'Somewhat unethical', value: Util.SOMEWHAT_UNETHICAL, definition: "Some information is missing and it is relevant to, or would lower confidence in, your decision if it were known." },
        { text: 'Unethical', value: Util.UNETHICAL, definition: "Outright deception or information is missing that is highly relevant and changes, or destroys confidence in, your decision." }
        ];

Util.persuasiveTypes = [
        { text: 'Reciprocity', definition: 'Reciprocation recognizes that people feel indebted to those who do something for them or give them a gift.', value: Util.RECIPROCITY },
        { text: 'Social Proof', definition: 'When people are uncertain about a course of action, they tend to look to those around them to guide their decisions and actions. They especially want to know what everyone else is doing – especially their peers.',  value: Util.SOCIAL_PROOF },
        { text: 'Commitment and Consistency', definition: 'People strive for consistency in their commitments. They also prefer to follow pre-existing attitudes, values and actions.',  value: Util.COMMITMENT },
        { text: 'Liking', definition: 'People prefer to say yes to those they know and like. People are also more likely to favor those who are physically attractive, similar to themselves, or who give them compliments.',  value: Util.LIKING },
        { text: 'Appeal to Authority', definition: 'People respect authority. They want to follow the lead of real experts.',  value: Util.AUTHORITY },
        { text: 'Scarcity and Urgency', definition: 'The less there is of something, the more valuable it is. The more rare and uncommon a thing, the more people want it.',  value: Util.SCARCITY }
        ];

Util.testimonials = [
  {tPic: "Rectangle_1", tName: "Arthur Medina", tTitle: "Account Executive"},
  {tPic: "Rectangle_2", tName: "Rosie Gibson", tTitle: "CEO at GibsonCo"},
  {tPic: "Rectangle_3", tName: "Francis Pearson",tTitle: "CMO at MegaAcme"},
  {tPic: "Rectangle_4", tName: "Manny Jefferson",tTitle: "Marketing Wizard"},
  {tPic: "Rectangle_5", tName: "Betsy Williamson", tTitle: "Sales Director"},
  {tPic: "Rectangle_6", tName: "Jennifer D'Antonio", tTitle: "Entrepreneur"}
]

/* return a random integer between 0 and max */
Util.getRandomNum = function(max) {
  return (Math.floor(Math.random() * (max + 1)));
};

Util.chooseRandomElement = function(type, ethicalLevel, choices) {
  var index = Util.getRandomNum(choices[type][ethicalLevel].length - 1); // arrays are zero based
  return (Util.chooseElement(index, type, ethicalLevel, choices));
};

Util.chooseElement = function(index, type, ethicalLevel, choices) {
  if (choices[type] && choices[type][ethicalLevel] && choices[type][ethicalLevel][index]) {
    return choices[type][ethicalLevel][index];
  }
  else {
    return (Util.chooseRandomElement(type, ethicalLevel, choices));
  }
};

var Default = {} || Default;

Default.choices = [];
Default.choices[Util.RECIPROCITY] = [];
Default.choices[Util.RECIPROCITY][Util.ETHICAL] = ["<reason='States this is their own opinion'>We think</reason> this is the best set of courses on the market today but don't take our word for it! Download <reason='Clearly states what they are giving you'>Parts 1 and 2</reason> of the first course and see for yourself."];
Default.choices[Util.RECIPROCITY][Util.SOMEWHAT_ETHICAL] = ["<reason='States this is their own opinion'>We think</reason> this is the best set of courses on the market today but don't take our word for it! Download <reason='Clearly states what they are giving you but it might not be enough to judge the courses.'>the intro</reason> to the first course and see for yourself."];
Default.choices[Util.RECIPROCITY][Util.SOMEWHAT_UNETHICAL] = ["<reason='States this as fact with no justification'>This is the best</reason> set of courses on the market today but don't take our word for it! Download <reason='Doesn\'t state how representative those twenty minutes are'>twenty minutes</reason> of the first course and see for yourself."];
Default.choices[Util.RECIPROCITY][Util.UNETHICAL] = ["<reason='States this as fact with no justification'>This is the best</reason> set of courses on the market today but don't take our word for it! Download <reason='They aren't offering you any part of the real courses'>this mini version</reason> of the first course and see for yourself."];

Default.choices[Util.SOCIAL_PROOF] = []
Default.choices[Util.SOCIAL_PROOF][Util.ETHICAL] = ["We surveyed all our customers <reason='The minimum number of surveys is specified'>(over 200 and growing!)</reason> and <reason='The minimum number of positive responses is specified'>over 75%</reason> increased conversions by at <reason='The minimum increase is both reasonable and specified'>least 10%</reason>.", "We've got <reason='Accurate and neutral'>21K Facebook Likes!</reason>"];
Default.choices[Util.SOCIAL_PROOF][Util.SOMEWHAT_ETHICAL] = ["We surveyed <reason='No minimum given but we're told it is all of their customers. This can be misleading if they have a very small customer base.
'>all our customers</reason> and <reason='No minimum given but it is above 50%'>most</reason> increased conversions by at <reason='The minimum increase is both reasonable and specified'>least 10%</reason>.", "We have <reason='Doesn\'t specify how many of their customers are loyal or devoted>some of the</reason> most loyal and devoted customers; they <reason='Not all of the likes necessarily came from customers'>liked us</reason> 21K times on Facebook"];
Default.choices[Util.SOCIAL_PROOF][Util.SOMEWHAT_UNETHICAL] = ["We <reason='No number or criterion given at all'>surveyed customers</reason> and <reason='No number given but probably over 50%'>many</reason> increased conversions by at <reason='The minimum increase is both reasonable and specified'>least 10%</reason>.", "21K Facebook Likes <reason='Yes they can. Likes don\'t mean the product is effective'>can\'t</reason> be wrong! <reason='These are unrelated; Facebook Likes can be gotten a lot of different ways'>which shows</reason> they <i>love</i> these courses!"];
Default.choices[Util.SOCIAL_PROOF][Util.UNETHICAL] = ["<reason='No reason given to back this up'>You'll</reason> increase conversions by at <reason='Number is suspect and no reason given'>least 50%</reason>!", "With 21K Facebook Likes, <reason='Likes don't mean anyone is buying the product, let alone competitors'>your competitors</reason> are buying these! If you want <reason='Competitors buying these courses doesn\'t mean they are effective or that you need them, too'>to stay in the game</reason>, you need these courses, too!"];

Default.choices[Util.COMMITMENT] = []
Default.choices[Util.COMMITMENT][Util.ETHICAL] = ["<reason='Doesn\'t assume they know what your goals are'>If you</reason> want to be the best marketer you can be, <reason='Clearly states that this is their opinion'>we think</reason> these courses <reason='Clear that the courses might not help'>may</reason> help you reach that goal!"];
Default.choices[Util.COMMITMENT][Util.SOMEWHAT_ETHICAL] = ["<reason='Assumes they know what your goals are'>You</reason> want to be the best marketer you can be and <reason='Clearly states that this is their opinion'>we think</reason> these courses <reason='Assumes the courses will help with that goal'>can</reason> help you reach that goal!"];
Default.choices[Util.COMMITMENT][Util.SOMEWHAT_UNETHICAL] = ["<reason='Unsubstantiated praise'>You are already a good marketer</reason> but you want to be great and these courses <reason='Assumes the courses will help with that goal'>will</reason> help you reach that goal!"];
Default.choices[Util.COMMITMENT][Util.UNETHICAL] = ["<reason='Unsubstantiated lavish praise'>You</reason> are already an awesome marketer but <reason='States this as unsubstantialed fact'>these courses</reason> <reason='Assumes the courses will make you better'>will</reason> loft you to new heights!"];

Default.choices[Util.LIKING] = []
Default.choices[Util.LIKING][Util.ETHICAL] = ["We're marketers and <reason='Admits it is only <em>likely</em> that their experience is like other marketers'>most likely</reason> face <reason='Does not assume all challenges are the shared'>many of</reason> the same challenges and difficulties other marketers do. We created these courses to share what we've learned on our marketing journey."];
Default.choices[Util.LIKING][Util.SOMEWHAT_ETHICAL] = ["We're marketers, <reason='Assumes you are a marketer, which is reasonable given the site'>too</reason>, and <reason='Admits it is only <em>likely</em> that their experience is like other marketers'>most likely</reason> face <reason='Assumes all challenges are the shared'>the</reason> same challenges and difficulties <reason='Assumes you are a marketer, which is reasonable given the site'>you</reason> do. We created these courses to share what we've learned on our marketing journey."];
Default.choices[Util.LIKING][Util.SOMEWHAT_UNETHICAL] = ["We were good marketers, <reason='Asserts you are a good marketer'>too</reason>, and <reason='Asserts their experience is like yours'>face the</reason> same challenges and difficulties <reason='Assumes you are a marketer, which is reasonable given the site'>you</reason> do. We created these courses to <reason='Asserts the courses will definitely help you'>make you</reason> awesome!"];
Default.choices[Util.LIKING][Util.UNETHICAL] = ["We're awesome marketers, <reason='Asserts you are an awesome marketer'>too</reason>, and <reason='Asserts their experience is like yours'>face the</reason> same challenges and difficulties <reason='Assumes you are a marketer, which is reasonable given the site'>you</reason> do. These courses <reason='Asserts the courses will definitely help you'>will make you</reason> more awesome!"];

Default.choices[Util.AUTHORITY] = []
Default.choices[Util.AUTHORITY][Util.ETHICAL] = ["<reason='Clear that not everyone advocates this approach'>Some</reason> of the top marketers in the field recommend continuing to learn and try new ways to market. These courses <reason='Clear that the courses aren't the only way and might not apply to you'>could be</reason> one such way."];
Default.choices[Util.AUTHORITY][Util.SOMEWHAT_ETHICAL] = ["<reason='Clear that not everyone advocates this approach but imply a lot do'>Many</reason> of the top marketers in the field recommend continuing to learn and try new ways to market. These courses <reason='Clear that the courses aren't the only way'>are</reason> one such way."];
Default.choices[Util.AUTHORITY][Util.SOMEWHAT_UNETHICAL] = ["<reason='Unsubstantiated, and unlikely, claim that <em>all</em> marketers agree on this'>All</reason> of the top marketers in the field recommend continuing to learn and try new ways to market. These courses are <reason='Unsubstantiated claim that this the best way'>the best</reason> way available."];
Default.choices[Util.AUTHORITY][Util.UNETHICAL] = ["<reason='Unsubstantiated, and unlikely, claim that the <em>best</em> marketers agree on this'>The best</reason> marketers in the field recommend you get these courses as they are <reason='Unsubstantiated claim that this the best way'>the best</reason> way to level up as a marketer!"];

Default.choices[Util.SCARCITY] = []
Default.choices[Util.SCARCITY][Util.ETHICAL] = ["Buy this bundle of courses now and save <reason='The price to which the discount applies is specified'>20% off the list price</reason>. This offer expires <reason='The time the offer expires is given'>promptly on Friday at midnight</reason>.", "<reason='Clearly states that this is their opinion'>We think</reason> these courses are so powerful that we don't want extra competition so we're only selling <reason='Clearly states number of copies to be sold'>2000</reason> copies. There are only <reason='Clearly states number of copies available'>187</reason> left so get yours today!"];
Default.choices[Util.SCARCITY][Util.SOMEWHAT_ETHICAL] = ["Buy this bundle of courses now and save <reason='The price to which the discount applies isn\'t specified'>20%</reason>. This offer expires on <reason='The time the offer expires isn\'t given but a day is given'>Friday</reason>.", "<reason='Clearly states that this is their opinion'>We know</reason> these courses are so powerful that we don't want extra competition so we're only selling <reason='Clearly states number of copies to be sold'>2000</reason> copies. There are under <reason='Doesn't clear state number of copies available'>100</reason> left so get yours today!"];
Default.choices[Util.SCARCITY][Util.SOMEWHAT_UNETHICAL] = ["Buy this bundle of courses now and save <reason='The price to which the discount applies isn\'t specified'>20%</reason>. This offer expires <reason='The time or day the offer expires isn\'t given'>soon</reason>.", "These courses are <reason='Unsubstantiated claim'>so powerful</reason> that we don't want extra competition so we're only selling <reason='Clearly states number of copies to be sold but the number is quite low'>1000</reason> copies. There are only <reason='Doesn't clear state number of copies available'>a few</reason> left so get yours today!"];
Default.choices[Util.SCARCITY][Util.UNETHICAL] = ["Buy this bundle of courses now and save <reason='The price to which the discount applies isn\'t specified and the discount is suspiciously large'>80% over what others are paying</reason>. <reason='No reason is given for the urgency'>Don't delay</reason>!", "These courses are <reason='Unsubstantiated claim'>so powerful</reason> that we don't want extra competition so we're only selling <reason='Clearly states number of copies to be sold but the number is unreasonably low'>100</reason> copies. They are <reason='Doesn't clear state number of copies available'>almost gone</reason> so get yours today!"];

Default.ethicalLevel = Util.ETHICAL;
Default.persuasiveType = Util.AUTHORITY;

var Testimonials = {} || Testimonials;

Testimonials.choices = [];
Testimonials.choices[Util.RECIPROCITY] = [];
Testimonials.choices[Util.RECIPROCITY][Util.ETHICAL] = ["Ethical reciprocity", "Ethical1 reciprocity", "Ethical2 reciprocity", "Ethical3 reciprocity", "Ethical4 reciprocity"];
Testimonials.choices[Util.RECIPROCITY][Util.SOMEWHAT_ETHICAL] = ["Somewhat Ethical reciprocity", "Somewhat Ethical reciprocity1", "Somewhat Ethical reciprocity2", "Somewhat Ethical reciprocity3"];
Testimonials.choices[Util.RECIPROCITY][Util.SOMEWHAT_UNETHICAL] = ["Somewhat UnEthical reciprocity", "Somewhat UnEthical reciprocity1", "Somewhat UnEthical reciprocity2"];
Testimonials.choices[Util.RECIPROCITY][Util.UNETHICAL] = ["Unethical", "Unethical1"];

Testimonials.choices[Util.SOCIAL_PROOF] = []
Testimonials.choices[Util.SOCIAL_PROOF][Util.ETHICAL] = ["<reason='Clear that not all their friends recommend the courses'>Some</reason> of my friends kept telling me about how great these courses were and <reason='Clear that this is their opinion'>I think</reason> they were right! I only wish I'd listened to them earlier!"];
Testimonials.choices[Util.SOCIAL_PROOF][Util.SOMEWHAT_ETHICAL] = ["<reason='Clear that not all their friends recommend the courses'>Many</reason> of my friends kept telling me about how great these courses were and they were <reason='Asserts with without proof but since it is a testmonial, it is implied that it is an opinion'>right</reason>! I only wish I'd listened to them earlier!"];
Testimonials.choices[Util.SOCIAL_PROOF][Util.SOMEWHAT_UNETHICAL] = ["<reason='Unlikely that all their friends recommend this'>All</reason> of my friends kept telling me about how great these courses were and they were <reason='Asserts with without proof but since it is a testmonial, it is implied that it is an opinion'>right</reason>! You <reason='Asserted without proof'>need</reason> these courses right now!"];
Testimonials.choices[Util.SOCIAL_PROOF][Util.UNETHICAL] = ["<reason='Unlikely that all their friends recommend this'>All</reason> of my friends said these courses helped them <reason='Asserted without proof and is unlikely'>boost conversions 50% or more!</reason>! You <reason='Asserted without proof'>need</reason> these courses right now!"];

Testimonials.choices[Util.COMMITMENT] = []
Testimonials.choices[Util.COMMITMENT][Util.ETHICAL] = ["<reason='Clear they are speaking for themselves'>I'm committed</reason> to being the best at what I do and <reason='Clear that this is their opinion'>I'll bet</reason> you're the same. These courses are <reason='Only claims they are one way of improving'>one more way</reason> I'm upping my game and <reason='Clear that the courses are worth the money'>they've paid for themselves</reason> already!"];
Testimonials.choices[Util.COMMITMENT][Util.SOMEWHAT_ETHICAL] = ["<reason='Clear they are speaking for themselves'>I'm committed</reason> to being the best at what I do and <reason='Clear that this is their opinion'>I'll bet</reason> you're the same. These courses were <reason='Asserted without proof but since it is a testimonial, it is just their opinion'>a great way</reason> to up my game; <reason='Clear that the courses are worth the money'>they've paid for themselves</reason> already!"];
Testimonials.choices[Util.COMMITMENT][Util.SOMEWHAT_UNETHICAL] = ["<reason='Clear they are speaking for themselves'>I'm committed</reason> to being the best at what I do and <reason='Asserted without proof'>you're</reason> the same. These courses were <reason='Asserted without proof but since it is a testimonial, it is just their opinion'>an awesome way</reason> to up my game and <reason='Clear that the courses are worth the money'>they've paid for themselves twice</reason> already!"];
Testimonials.choices[Util.COMMITMENT][Util.UNETHICAL] = ["<reason='Clear they are speaking for themselves'>I'm committed</reason> to being the best at what I do and <reason='Asserted without proof'>you're</reason> the same. These courses were <reason='Asserted without proof and seems unlikely'>the only way</reason> to up my game and <reason='Seems unlikely the courses have helped this much>they've paid for themselves many times over</reason> already!"];

Testimonials.choices[Util.LIKING] = []
Testimonials.choices[Util.LIKING][Util.ETHICAL] = ["<reason='Clear that this is their opinion'>I'm sure</reason> we're the same in that we both want to be better at marketing. These courses <reason='Clearly using their own experience'>taught me</reason> some new principals and techniques that <reason='Clearly using their own experience'>I've</reason> used successfully ever since. Do yourself a favour and pick these up now!"];
Testimonials.choices[Util.LIKING][Util.SOMEWHAT_ETHICAL] = ["<reason='Clear that this is their opinion'>I'm sure</reason> we're the same in that we both want to be better at marketing. These courses <reason='Clearly using their own experience'>taught me</reason> some new principals and techniques and they <reason='Clear that this is only a possibility'>can probably</reason> do the same for you. Do yourself a favour and pick these up now!"];
Testimonials.choices[Util.LIKING][Util.SOMEWHAT_UNETHICAL] = ["<reason='Asserted without proof'>We're</reason>the same; we both want to be better at marketing. These courses <reason='Clearly using their own experience'>taught me</reason> some new principals and techniques and they <reason='Asserts without proof'>will</reason> do the same for you. Do yourself a favour and pick these up now!"];
Testimonials.choices[Util.LIKING][Util.UNETHICAL] = ["<reason='Asserted without proof'>We're</reason>the same; we both want to be better at marketing. These courses are<reason='Unlikely they are secrets>taught me the inners secrets</reason> of the best marketers and they <reason='Asserts without proof'>will</reason> do the same for you. Get these up now while you still can!"];

Testimonials.choices[Util.AUTHORITY] = []
Testimonials.choices[Util.AUTHORITY][Util.ETHICAL] = ["<reason='Clear that this is their opinion'>I think</reason> the folks who put these courses together are very good marketers so when they said this bundle will improve my marketing, <reason='Clearly using their own experience'>I believed</reason> them. I wasn't disappointed and <reason='Clear that this is their opinion'>I'm sure</reason> you won't be, either!"];
Testimonials.choices[Util.AUTHORITY][Util.SOMEWHAT_ETHICAL] = ["<reason='Clear that this is their opinion'>I think</reason> the folks who put these courses together are some of the <reason='Asserted without proof but clearly an opinion'>best</reason> marketers out there so when they said this bundle will improve my marketing, <reason='Clearly using their own experience'>I believed</reason> them. I wasn't disappointed and <reason='Clear that this is their opinion'>I'm sure</reason> you won't be, either!"];
Testimonials.choices[Util.AUTHORITY][Util.SOMEWHAT_UNETHICAL] = ["<reason='Asserted without proof'>The folks</reason> who put these courses together are some of the <reason='Asserted without proof but clearly an opinion'>best</reason> marketers out there so when they said this bundle will improve my marketing, <reason='Clearly using their own experience'>I believed</reason> them. I wasn't disappointed and <reason='Asserted without proof'>you</reason> won't be, either!"];
Testimonials.choices[Util.AUTHORITY][Util.UNETHICAL] = ["<reason='Asserted without proof'>The folks</reason> who put these courses together the <reason='Asserted without proof'>best</reason> marketers out there so when they said this bundle will improve my marketing, <reason='Clearly using their own experience'>I believed</reason> them. I wasn't disappointed and <reason='Asserted without proof'>you</reason> won't be, either!"];

Testimonials.choices[Util.SCARCITY] = []
Testimonials.choices[Util.SCARCITY][Util.ETHICAL] = ["<reason='Clearly attributing the information to the site rather than stating it as a fact'>They said</reason> there are a limited number of these bundles available and once they're gone, they're gone! <reason='Clearly their own experience'>I've</reason> been very pleased with these courses and highly recommend them."];
Testimonials.choices[Util.SCARCITY][Util.SOMEWHAT_ETHICAL] = ["<reason='Clearly attributing the information to the site rather than stating it as a fact'>They said</reason> there are a limited number of these bundles available and once they're gone, they're gone! <reason='Clearly their own experience'>I've</reason> been very pleased with these courses and you will <reason='Clearly states this as a possibility'>probably</reason> be, too."];
Testimonials.choices[Util.SCARCITY][Util.SOMEWHAT_UNETHICAL] = ["<reason='Asserted without proof'>There</reason> are a limited number of these bundles available and once they're gone, they're gone! <reason='Asserted without proof but since it is a testimonial, it can be assumed to opinion'>Most everyone I know</reason> been very pleased with these courses and you will <reason='Asserted without proof'>be</reason>, too."];
Testimonials.choices[Util.SCARCITY][Util.UNETHICAL] = ["<reason='Asserted without proof'>There</reason> are a limited number of these bundles available and once they're gone, they're gone! <reason='Asserted without proof but since it is a testimonial, it can be assumed to opinion'>Everyone here</reason> been very pleased with these courses and you <reason='Asserted without proof'>definitely will be</reason>, too."];

Testimonials.ethicalLevel = Util.SOMEWHAT_ETHICAL;
Testimonials.persuasiveType = Util.AUTHORITY;

var CTAs = {} || CTAs;

CTAs.choices = [];
CTAs.choices[Util.SCARCITY] = []
CTAs.choices[Util.SCARCITY][Util.ETHICAL] = ["Save <reason='The price to which the discount applies is specificd'>20% off the list price</reason> if you order <reason='The time the offer expires is given'>by Friday at midnight</reason>."];
CTAs.choices[Util.SCARCITY][Util.SOMEWHAT_ETHICAL] = ["Save <reason='The price to which the discount applies is specificd'>20%</reason> til <reason='The time the offer expires isn\'t given but the day is'>Friday</reason>.", "Somewhat Ethical Scarcity1"];
CTAs.choices[Util.SCARCITY][Util.SOMEWHAT_UNETHICAL] = ["Save <reason='The price to which the discount applies is specificd'>20%</reason> if you order <reason='Neither the time nor the date that the offer expires is given'>soon</reason>!"];
CTAs.choices[Util.SCARCITY][Util.UNETHICAL] = ["Save <reason='The price to which the discount applies isn\'t specified and the discount is suspiciously large'>80%</reason>. <reason='No reason is given for the urgency'>Don't delay</reason>!"];

CTAs.ethicalLevel = Util.SOMEWHAT_UNETHICAL;
CTAs.persuasiveType = Util.SCARCITY;

var Social = {} || Social;

Social.choices = [];
Social.choices[Util.SOCIAL_PROOF] = []
Social.choices[Util.SOCIAL_PROOF][Util.SOMEWHAT_ETHICAL] = ["Social media share counts block"];

Social.ethicalLevel = Util.SOMEWHAT_ETHICAL;
Social.persuasiveType = Util.SOCIAL_PROOF;

var Customer = {} || Customer;

Customer.choices = [];
Customer.choices[Util.RECIPROCITY] = []
Customer.choices[Util.RECIPROCITY][Util.SOMEWHAT_ETHICAL] = ["Customer appreciation block"];

Customer.ethicalLevel = Util.SOMEWHAT_ETHICAL;
Customer.persuasiveType = Util.RECIPROCITY;
