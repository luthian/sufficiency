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
        { text: 'Ethical', value: Util.ETHICAL },
        { text: 'Somewhat ethical', value: Util.SOMEWHAT_ETHICAL },
        { text: 'Somewhat unethical', value: Util.SOMEWHAT_UNETHICAL },
        { text: 'Unethical', value: Util.UNETHICAL }
        ];

Util.persuasiveTypes = [
        { text: 'Reciprocity', value: Util.RECIPROCITY },
        { text: 'Social Proof', value: Util.SOCIAL_PROOF },
        { text: 'Commitment and Consistency', value: Util.COMMITMENT },
        { text: 'Liking', value: Util.LIKING },
        { text: 'Appeal to Authority', value: Util.AUTHORITY },
        { text: 'Scarcity and Urgency', value: Util.SCARCITY }
        ];

/* return a random integer between 0 and max */
Util.getRandomNum = function(max) {
  return (Math.floor(Math.random() * (max + 1)));
};

Util.chooseElement = function(type, ethicalLevel, choices) {
  if (choices[type] && choices[type][ethicalLevel]) {
    var index = Util.getRandomNum(choices[type][ethicalLevel].length - 1); // arrays are zero based
    return choices[type][ethicalLevel][index];
  }
  else {
    return "No choices available for type '" + type + "' and ethical level '" + ethicalLevel + "'";
  }
};

var Default = {} || Default;

Default.choices = [];
Default.choices[Util.RECIPROCITY] = [];
Default.choices[Util.RECIPROCITY][Util.ETHICAL] = ["Ethical reciprocity", "Ethical1 reciprocity", "Ethical2 reciprocity", "Ethical3 reciprocity", "Ethical4 reciprocity"];
Default.choices[Util.RECIPROCITY][Util.SOMEWHAT_ETHICAL] = ["Somewhat Ethical reciprocity", "Somewhat Ethical reciprocity1", "Somewhat Ethical reciprocity2", "Somewhat Ethical reciprocity3"];
Default.choices[Util.RECIPROCITY][Util.SOMEWHAT_UNETHICAL] = ["Somewhat UnEthical reciprocity", "Somewhat UnEthical reciprocity1", "Somewhat UnEthical reciprocity2"];
Default.choices[Util.RECIPROCITY][Util.UNETHICAL] = ["Unethical", "Unethical1"];

Default.choices[Util.SOCIAL_PROOF] = []
Default.choices[Util.SOCIAL_PROOF][Util.ETHICAL] = ["Ethical Social Proof", "Ethical Social Proof1", "Ethical Social Proof2", "Ethical Social Proof3", "Ethical Social Proof4"];
Default.choices[Util.SOCIAL_PROOF][Util.SOMEWHAT_ETHICAL] = ["Somewhat Ethical Social Proof", "Somewhat Ethical Social Proof1", "Somewhat Ethical Social Proof2", "Somewhat Ethical Social Proof3"];
Default.choices[Util.SOCIAL_PROOF][Util.SOMEWHAT_UNETHICAL] = ["Somewhat UnEthical Social Proof", "Somewhat UnEthical Social Proof1", "Somewhat UnEthical Social Proof2"];
Default.choices[Util.SOCIAL_PROOF][Util.UNETHICAL] = ["UnEthical Social Proof", "UnEthical Social Proof1"];

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
Default.choices[Util.AUTHORITY][Util.ETHICAL] = ["Ethical Authority", "Ethical Authority1", "Ethical Authority2", "Ethical Authority3", "Ethical Authority4"];
Default.choices[Util.AUTHORITY][Util.SOMEWHAT_ETHICAL] = ["Somewhat Ethical Authority", "Somewhat Ethical Authority1", "Somewhat Ethical Authority2", "Somewhat Ethical Authority3"];
Default.choices[Util.AUTHORITY][Util.SOMEWHAT_UNETHICAL] = ["Somewhat UnEthical Authority", "Somewhat UnEthical Authority1", "Somewhat UnEthical Authority2"];
Default.choices[Util.AUTHORITY][Util.UNETHICAL] = ["UnEthical Authority", "UnEthical Authority1"];

Default.choices[Util.SCARCITY] = []
Default.choices[Util.SCARCITY][Util.ETHICAL] = ["Ethical Scarcity", "Ethical Scarcity1", "Ethical Scarcity2", "Ethical Scarcity3", "Ethical Scarcity4"];
Default.choices[Util.SCARCITY][Util.SOMEWHAT_ETHICAL] = ["Somewhat Ethical Scarcity", "Somewhat Ethical Scarcity1", "Somewhat Ethical Scarcity2", "Somewhat Ethical Scarcity3"];
Default.choices[Util.SCARCITY][Util.SOMEWHAT_UNETHICAL] = ["Somewhat UnEthical Scarcity", "Somewhat UnEthical Scarcity1", "Somewhat UnEthical Scarcity2"];
Default.choices[Util.SCARCITY][Util.UNETHICAL] = ["UnEthical Scarcity", "UnEthical Scarcity1"];

Default.ethicalLevel = Util.ETHICAL;
Default.persuasiveType = Util.AUTHORITY;

/* Create custom VUE componenets first */
var bus = new Vue({}) // This empty Vue model will serve as our event bus.

/* Wrapper component that shows the local ethical level controls */

Vue.component('ethical-controls', {
  template: '#control-template',
  props: {
      level: {
        type: Number,
        default: Default.ethicalLevel
      },
      type: {
        type: Number,
        default: Default.persuasiveType
      },
      open: {
        type: Boolean,
        default: false
      },
      show: {
        type: Array,
        default: function() {
          return ([true, true, true, true, true, true]);
        }
      }
  },
  data: function() {
    return {
      userDisagrees: false,
      childData: {
        currentLevel: this.level,
        currentType: this.type
      },
      newEthicalLevel: this.level,
      options: Util.ethicalOptions
    };
  },
  computed: {
    classObject: function() {
      var classes = {controlsTemplateWrapper: true};
      if (this.open && this.show[this.type]) {
        classes.open = true;
        switch (this.newEthicalLevel) {
          case Util.ETHICAL:
             classes.ethical = true;
             break;
          case Util.SOMEWHAT_ETHICAL:
             classes.somewhatEthical = true;
             break;
          case Util.SOMEWHAT_UNETHICAL:
             classes.somewhatUnethical = true;
             break;
          case Util.UNETHICAL:
          default:
             classes.unethical = true;
             break;
        }
      }
      return classes;
    }
  },
  methods: {
    updateEthicalLevel: function() {
      var self = this;
    }
  }
});

/* Text persuasive element component */
Vue.component('text-element', {
  template: '<span> {{ msg }} </span>',
  props: {
      level: {
        type: Number,
        default: Default.ethicalLevel
      },
      type: {
        type: Number,
        default: Default.persuasiveType
      },
      choices: {
        type: Array,
        default: function () {
          return Default.choices;
        }
      }
  },
  computed: {
    msg: function() {
      return Util.chooseElement(this.type, this.level, this.choices);
    }
  },
  created: function() {
    var self = this;
// Listen for outside changes to the ethical level 
    bus.$on('set-ethical-level', function (newLevel) {
      self.ethicalLevel = newLevel;
    });
  }
});

/* Create Vue instances for various parts of the page */
var app = new Vue({
  el: '#app',
  data: {
    ethicalLevel: Default.ethicalLevel,
    persuasiveType: Default.persuasiveType,
    persuasiveTypes: Util.persuasiveTypes,
    controlsOpen: false,
    sidebarOpen: false,
    typesToShow: [true, true, true, true, true, true]
  },
  methods: {
    toggleControls: function () {
      this.sidebarOpen = !this.sidebarOpen;
      this.controlsOpen = this.sidebarOpen; // Force controls display to have the same state
      // show/hide the controls menu
      this.slider.slideReveal("toggle", false);
    },
    toggleTypeToShow: function (newType) {
      Vue.set(this.typesToShow, newType, !this.typesToShow[newType]);
    }
  },
  created: function() {
    var self = this;
// Listen for changes to which persuasive types to show
    bus.$on('toggle-type-to-show', function (newType) {
      Vue.set(self.typesToShow, newType, !self.typesToShow[newType]);
    });
  },
  mounted: function() {
    // init the slide-in panel jQuery plug-in
    this.slider = $('#controlMenu').slideReveal({position: "right", width: "20%"}); // slideReveal return $('#slider')
  }
});

