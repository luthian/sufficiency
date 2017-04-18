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
        { text: 'Somewhat ethical', value: Util.SOMEWHAT_ETHICAL, definition: "Some information is missing but it won't change your ability to make informed opinion. If it were included, it wouldn't your lower confidence in your decision." },
        { text: 'Somewhat unethical', value: Util.SOMEWHAT_UNETHICAL, definition: "Some information is missing and it is relevant to, or would lower confidence in, your decision if it were known." },
        { text: 'Unethical', value: Util.UNETHICAL, definition: "Outright deception or the missing information is highly relevant and changes, or destroys confidence in, in your decision." }
        ];

Util.persuasiveTypes = [
        { text: 'Reciprocity', value: Util.RECIPROCITY },
        { text: 'Social Proof', value: Util.SOCIAL_PROOF },
        { text: 'Commitment and Consistency', value: Util.COMMITMENT },
        { text: 'Liking', value: Util.LIKING },
        { text: 'Appeal to Authority', value: Util.AUTHORITY },
        { text: 'Scarcity and Urgency', value: Util.SCARCITY }
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
Default.choices[Util.RECIPROCITY][Util.ETHICAL] = ["Ethical [reason='this is a reciprocity reason']reciprocity[/reason]", "Ethical1 reciprocity", "Ethical2 reciprocity", "Ethical3 reciprocity", "Ethical4 reciprocity"];
Default.choices[Util.RECIPROCITY][Util.SOMEWHAT_ETHICAL] = ["Somewhat Ethical reciprocity", "Somewhat Ethical reciprocity1", "Somewhat Ethical reciprocity2", "Somewhat Ethical reciprocity3"];
Default.choices[Util.RECIPROCITY][Util.SOMEWHAT_UNETHICAL] = ["Somewhat UnEthical reciprocity", "Somewhat UnEthical reciprocity1", "Somewhat UnEthical reciprocity2"];
Default.choices[Util.RECIPROCITY][Util.UNETHICAL] = ["Unethical", "Unethical1"];

Default.choices[Util.SOCIAL_PROOF] = []
Default.choices[Util.SOCIAL_PROOF][Util.ETHICAL] = ["We surveyed all our customers (over 200 and growing!) and over 75% increased conversions by at least 10%.", "Ethical Social Proof1", "Ethical Social Proof2", "Ethical Social Proof3", "Ethical Social Proof4"];
Default.choices[Util.SOCIAL_PROOF][Util.SOMEWHAT_ETHICAL] = ["We surveyed all our customers and most increased conversions by at least 10%.", "Somewhat Ethical Social Proof1", "Somewhat Ethical Social Proof2", "Somewhat Ethical Social Proof3"];
Default.choices[Util.SOCIAL_PROOF][Util.SOMEWHAT_UNETHICAL] = ["We surveyed customers and many increased conversions by at least 10%.", "Somewhat UnEthical Social Proof1", "Somewhat UnEthical Social Proof2"];
Default.choices[Util.SOCIAL_PROOF][Util.UNETHICAL] = ["You'll increase conversions by at least 50%!", "UnEthical Social Proof1"];

Default.choices[Util.COMMITMENT] = []
Default.choices[Util.COMMITMENT][Util.ETHICAL] = ["Ethical commitment", "Ethical Commitment1", "Ethical Commitment2", "Ethical Commitment3", "Ethical Commitment4"];
Default.choices[Util.COMMITMENT][Util.SOMEWHAT_ETHICAL] = ["Somewhat Ethical Commitment", "Somewhat Ethical Commitment1", "Somewhat Ethical Commitment2", "Somewhat Ethical Commitment3"];
Default.choices[Util.COMMITMENT][Util.SOMEWHAT_UNETHICAL] = ["Somewhat UnEthical Commitment", "Somewhat UnEthical Commitment1", "Somewhat UnEthical Commitment2"];
Default.choices[Util.COMMITMENT][Util.UNETHICAL] = ["UnEthical Commitment", "UnEthical Commitment1"];

Default.choices[Util.LIKING] = []
Default.choices[Util.LIKING][Util.ETHICAL] = ["Ethical Liking", "Ethical Liking1", "Ethical Liking2", "Ethical Liking3", "Ethical Liking4"];
Default.choices[Util.LIKING][Util.SOMEWHAT_ETHICAL] = ["Somewhat Ethical Liking", "Somewhat Ethical Liking1", "Somewhat Ethical Liking2", "Somewhat Ethical Liking3"];
Default.choices[Util.LIKING][Util.SOMEWHAT_UNETHICAL] = ["Somewhat UnEthical Liking", "Somewhat UnEthical Liking1", "Somewhat UnEthical Liking2"];
Default.choices[Util.LIKING][Util.UNETHICAL] = ["UnEthical Liking", "UnEthical Liking1"];

Default.choices[Util.AUTHORITY] = []
Default.choices[Util.AUTHORITY][Util.ETHICAL] = ["Ethical Authority", "Ethical [reason='this is a Authority reason']Authority1[/reason] and [reason='this is also an Authority reason']Authority1 blah blah[/reason]", "Ethical Authority2", "Ethical Authority3", "Ethical Authority4"];
Default.choices[Util.AUTHORITY][Util.SOMEWHAT_ETHICAL] = ["Somewhat Ethical Authority", "Somewhat Ethical Authority1", "Somewhat Ethical Authority2", "Somewhat Ethical Authority3"];
Default.choices[Util.AUTHORITY][Util.SOMEWHAT_UNETHICAL] = ["Somewhat UnEthical Authority", "Somewhat UnEthical Authority1", "Somewhat UnEthical Authority2"];
Default.choices[Util.AUTHORITY][Util.UNETHICAL] = ["UnEthical Authority", "UnEthical Authority1"];

Default.choices[Util.SCARCITY] = []
Default.choices[Util.SCARCITY][Util.ETHICAL] = ["Buy this bundle of courses now and save 20% off the list price. This offer expires promptly on Friday at midnight.", "Ethical Scarcity1", "Ethical Scarcity2", "Ethical Scarcity3", "Ethical Scarcity4"];
Default.choices[Util.SCARCITY][Util.SOMEWHAT_ETHICAL] = ["Buy this bundle of courses now and save 20%. This offer expires on Friday.", "Somewhat Ethical Scarcity1", "Somewhat Ethical Scarcity2", "Somewhat Ethical Scarcity3"];
Default.choices[Util.SCARCITY][Util.SOMEWHAT_UNETHICAL] = ["Buy this bundle of courses now and save 20%. This offer expires soon.", "Somewhat UnEthical Scarcity1", "Somewhat UnEthical Scarcity2"];
Default.choices[Util.SCARCITY][Util.UNETHICAL] = ["Buy this bundle of courses now and save 80% over what others are paying. Don't delay as this offer is time-limited.", "UnEthical Scarcity1"];

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
Testimonials.choices[Util.SOCIAL_PROOF][Util.ETHICAL] = ["We surveyed all our customers (over 200 and growing!) and over 75% increased conversions by at least 10%.", "Ethical Social Proof1", "Ethical Social Proof2", "Ethical Social Proof3", "Ethical Social Proof4"];
Testimonials.choices[Util.SOCIAL_PROOF][Util.SOMEWHAT_ETHICAL] = ["We surveyed all our customers and most increased conversions by at least 10%.", "Somewhat Ethical Social Proof1", "Somewhat Ethical Social Proof2", "Somewhat Ethical Social Proof3"];
Testimonials.choices[Util.SOCIAL_PROOF][Util.SOMEWHAT_UNETHICAL] = ["We surveyed customers and many increased conversions by at least 10%.", "Somewhat UnEthical Social Proof1", "Somewhat UnEthical Social Proof2"];
Testimonials.choices[Util.SOCIAL_PROOF][Util.UNETHICAL] = ["You'll increase conversions by at least 50%!", "UnEthical Social Proof1"];

Testimonials.choices[Util.COMMITMENT] = []
Testimonials.choices[Util.COMMITMENT][Util.ETHICAL] = ["Ethical commitment", "Ethical Commitment1", "Ethical Commitment2", "Ethical Commitment3", "Ethical Commitment4"];
Testimonials.choices[Util.COMMITMENT][Util.SOMEWHAT_ETHICAL] = ["Somewhat Ethical Commitment", "Somewhat Ethical Commitment1", "Somewhat Ethical Commitment2", "Somewhat Ethical Commitment3"];
Testimonials.choices[Util.COMMITMENT][Util.SOMEWHAT_UNETHICAL] = ["Somewhat UnEthical Commitment", "Somewhat UnEthical Commitment1", "Somewhat UnEthical Commitment2"];
Testimonials.choices[Util.COMMITMENT][Util.UNETHICAL] = ["UnEthical Commitment", "UnEthical Commitment1"];

Testimonials.choices[Util.LIKING] = []
Testimonials.choices[Util.LIKING][Util.ETHICAL] = ["Ethical Liking", "Ethical Liking1", "Ethical Liking2", "Ethical Liking3", "Ethical Liking4"];
Testimonials.choices[Util.LIKING][Util.SOMEWHAT_ETHICAL] = ["Somewhat Ethical Liking", "Somewhat Ethical Liking1", "Somewhat Ethical Liking2", "Somewhat Ethical Liking3"];
Testimonials.choices[Util.LIKING][Util.SOMEWHAT_UNETHICAL] = ["Somewhat UnEthical Liking", "Somewhat UnEthical Liking1", "Somewhat UnEthical Liking2"];
Testimonials.choices[Util.LIKING][Util.UNETHICAL] = ["UnEthical Liking", "UnEthical Liking1"];

Testimonials.choices[Util.AUTHORITY] = []
Testimonials.choices[Util.AUTHORITY][Util.ETHICAL] = ["Ethical Authority", "Ethical Authority1", "Ethical Authority2", "Ethical Authority3", "Ethical Authority4"];
Testimonials.choices[Util.AUTHORITY][Util.SOMEWHAT_ETHICAL] = ["Somewhat Ethical Authority", "Somewhat Ethical Authority1", "Somewhat Ethical Authority2", "Somewhat Ethical Authority3"];
Testimonials.choices[Util.AUTHORITY][Util.SOMEWHAT_UNETHICAL] = ["Somewhat UnEthical Authority", "Somewhat UnEthical Authority1", "Somewhat UnEthical Authority2"];
Testimonials.choices[Util.AUTHORITY][Util.UNETHICAL] = ["UnEthical Authority", "UnEthical Authority1"];

Testimonials.choices[Util.SCARCITY] = []
Testimonials.choices[Util.SCARCITY][Util.ETHICAL] = ["Buy this bundle of courses now and save 20% off the list price. This offer expires promptly on Friday at midnight.", "Ethical Scarcity1", "Ethical Scarcity2", "Ethical Scarcity3", "Ethical Scarcity4"];
Testimonials.choices[Util.SCARCITY][Util.SOMEWHAT_ETHICAL] = ["Buy this bundle of courses now and save 20%. This offer expires on Friday.", "Somewhat Ethical Scarcity1", "Somewhat Ethical Scarcity2", "Somewhat Ethical Scarcity3"];
Testimonials.choices[Util.SCARCITY][Util.SOMEWHAT_UNETHICAL] = ["Buy this bundle of courses now and save 20%. This offer expires soon.", "Somewhat UnEthical Scarcity1", "Somewhat UnEthical Scarcity2"];
Testimonials.choices[Util.SCARCITY][Util.UNETHICAL] = ["Buy this bundle of courses now and save 80% over what others are paying. Don't delay as this offer is time-limited.", "UnEthical Scarcity1"];

Testimonials.ethicalLevel = Util.SOMEWHAT_ETHICAL;
Testimonials.persuasiveType = Util.AUTHORITY;

var CTAs = {} || CTAs;

CTAs.choices = [];
CTAs.choices[Util.RECIPROCITY] = [];
CTAs.choices[Util.RECIPROCITY][Util.ETHICAL] = ["Ethical reciprocity", "Ethical1 reciprocity", "Ethical2 reciprocity", "Ethical3 reciprocity", "Ethical4 reciprocity"];
CTAs.choices[Util.RECIPROCITY][Util.SOMEWHAT_ETHICAL] = ["Somewhat Ethical reciprocity", "Somewhat Ethical reciprocity1", "Somewhat Ethical reciprocity2", "Somewhat Ethical reciprocity3"];
CTAs.choices[Util.RECIPROCITY][Util.SOMEWHAT_UNETHICAL] = ["Somewhat UnEthical reciprocity", "Somewhat UnEthical reciprocity1", "Somewhat UnEthical reciprocity2"];
CTAs.choices[Util.RECIPROCITY][Util.UNETHICAL] = ["Unethical", "Unethical1"];

CTAs.choices[Util.SOCIAL_PROOF] = []
CTAs.choices[Util.SOCIAL_PROOF][Util.ETHICAL] = ["We surveyed all our customers (over 200 and growing!) and over 75% increased conversions by at least 10%.", "Ethical Social Proof1", "Ethical Social Proof2", "Ethical Social Proof3", "Ethical Social Proof4"];
CTAs.choices[Util.SOCIAL_PROOF][Util.SOMEWHAT_ETHICAL] = ["We surveyed all our customers and most increased conversions by at least 10%.", "Somewhat Ethical Social Proof1", "Somewhat Ethical Social Proof2", "Somewhat Ethical Social Proof3"];
CTAs.choices[Util.SOCIAL_PROOF][Util.SOMEWHAT_UNETHICAL] = ["We surveyed customers and many increased conversions by at least 10%.", "Somewhat UnEthical Social Proof1", "Somewhat UnEthical Social Proof2"];
CTAs.choices[Util.SOCIAL_PROOF][Util.UNETHICAL] = ["You'll increase conversions by at least 50%!", "UnEthical Social Proof1"];

CTAs.choices[Util.COMMITMENT] = []
CTAs.choices[Util.COMMITMENT][Util.ETHICAL] = ["Ethical commitment", "Ethical Commitment1", "Ethical Commitment2", "Ethical Commitment3", "Ethical Commitment4"];
CTAs.choices[Util.COMMITMENT][Util.SOMEWHAT_ETHICAL] = ["Somewhat Ethical Commitment", "Somewhat Ethical Commitment1", "Somewhat Ethical Commitment2", "Somewhat Ethical Commitment3"];
CTAs.choices[Util.COMMITMENT][Util.SOMEWHAT_UNETHICAL] = ["Somewhat UnEthical Commitment", "Somewhat UnEthical Commitment1", "Somewhat UnEthical Commitment2"];
CTAs.choices[Util.COMMITMENT][Util.UNETHICAL] = ["UnEthical Commitment", "UnEthical Commitment1"];

CTAs.choices[Util.LIKING] = []
CTAs.choices[Util.LIKING][Util.ETHICAL] = ["Ethical Liking", "Ethical Liking1", "Ethical Liking2", "Ethical Liking3", "Ethical Liking4"];
CTAs.choices[Util.LIKING][Util.SOMEWHAT_ETHICAL] = ["Somewhat Ethical Liking", "Somewhat Ethical Liking1", "Somewhat Ethical Liking2", "Somewhat Ethical Liking3"];
CTAs.choices[Util.LIKING][Util.SOMEWHAT_UNETHICAL] = ["Somewhat UnEthical Liking", "Somewhat UnEthical Liking1", "Somewhat UnEthical Liking2"];
CTAs.choices[Util.LIKING][Util.UNETHICAL] = ["UnEthical Liking", "UnEthical Liking1"];

CTAs.choices[Util.AUTHORITY] = []
CTAs.choices[Util.AUTHORITY][Util.ETHICAL] = ["Ethical Authority", "Ethical Authority1", "Ethical Authority2", "Ethical Authority3", "Ethical Authority4"];
CTAs.choices[Util.AUTHORITY][Util.SOMEWHAT_ETHICAL] = ["Somewhat Ethical Authority", "Somewhat Ethical Authority1", "Somewhat Ethical Authority2", "Somewhat Ethical Authority3"];
CTAs.choices[Util.AUTHORITY][Util.SOMEWHAT_UNETHICAL] = ["Somewhat UnEthical Authority", "Somewhat UnEthical Authority1", "Somewhat UnEthical Authority2"];
CTAs.choices[Util.AUTHORITY][Util.UNETHICAL] = ["UnEthical Authority", "UnEthical Authority1"];

CTAs.choices[Util.SCARCITY] = []
CTAs.choices[Util.SCARCITY][Util.ETHICAL] = ["Buy this bundle of courses now and save 20% off the list price. This offer expires promptly on Friday at midnight.", "Ethical Scarcity1", "Ethical Scarcity2", "Ethical Scarcity3", "Ethical Scarcity4"];
CTAs.choices[Util.SCARCITY][Util.SOMEWHAT_ETHICAL] = ["Buy this bundle of courses now and save 20%. This offer expires on Friday.", "Somewhat Ethical Scarcity1", "Somewhat Ethical Scarcity2", "Somewhat Ethical Scarcity3"];
CTAs.choices[Util.SCARCITY][Util.SOMEWHAT_UNETHICAL] = ["Buy this bundle of courses now and save 20%. This offer expires soon.", "Somewhat UnEthical Scarcity1", "Somewhat UnEthical Scarcity2"];
CTAs.choices[Util.SCARCITY][Util.UNETHICAL] = ["Buy this bundle of courses now and save 80% over what others are paying.", "UnEthical Scarcity1"];

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
