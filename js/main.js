'use strict';
/* Utility functions */

var Util = {} || Util;
Util.ETHICAL = 0;
Util.SOMEWHAT_ETHICAL = 1;
Util.SOMEWHAT_UNETHICAL = 2;
Util.UNETHICAL = 3;

/* return a random integer between 0 and max */
Util.getRandomNum = function(max) {
  return (Math.floor(Math.random() * (max + 1)));
};

Util.chooseElement = function(ethicalLevel, choices) {
  if (choices[ethicalLevel]) {
    var index = Util.getRandomNum(choices[ethicalLevel].length - 1); // arrays are zero based
    return choices[ethicalLevel][index];
  }
  else {
    return "No choices available at ethical level '" + ethicalLevel + "'";
  }
};

var Default = {} || Default;

Default.choices = [];
Default.choices[Util.ETHICAL] = ["Ethical", "Ethical1", "Ethical2", "Ethical3", "Ethical4"];
Default.choices[Util.SOMEWHAT_ETHICAL] = ["Somewhat Ethical", "Somewhat Ethical1", "Somewhat Ethical2", "Somewhat Ethical3"];
Default.choices[Util.SOMEWHAT_UNETHICAL] = ["Somewhat Unethical", "Somewhat Unethical1", "Somewhat Unethical2"];
Default.choices[Util.UNETHICAL] = ["Unethical", "Unethical1"];

Default.ethicalLevel = Util.SOMEWHAT_ETHICAL;

/* Create custom VUE componenets first */
var bus = new Vue({}) // This empty Vue model will serve as our event bus.

/* Wrapper component that shows the local ethical level controls */

Vue.component('ethical-controls', {
  template: '
  <span :class="classObject">
    <slot>
    <p>No child template specified!</p>
    </slot>
  </span>
',
  props: {
      level: {
        type: Number,
        default: Default.ethicalLevel
      },
      open: {
        type: Boolean,
        default: false
      }
  },
  data: function() {
    return {
      newEthicalLevel: this.level,
      userDisagrees: false
    };
  },
  computed: {
    classObject: function() {
      var classes = {controlsWrapper: true};
      if (this.open) {
        classes.open = true;
        switch (this.level) {
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
  created: function() {
    var self = this;
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
      choices: {
        type: Array,
        default: function () {
          return Default.choices;
        }
      }
  },
  data: function() {
    return {
      ethicalLevel: this.level
    };
  },
  computed: {
    msg: function() {
      return Util.chooseElement(this.ethicalLevel, this.choices);
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

/* Create VUE instances for various parts of the page */
var app = new Vue({
  el: '#app',
  data: {
    ethicalLevel: Default.ethicalLevel,
    controlsOpen: false
  },
  methods: {
    toggleControls: function () {
      this.controlsOpen = !this.controlsOpen;
    }
  },
  created: function() {
    var self = this;
// Listen for outside changes to the ethical level 
    bus.$on('set-controls-visibility', function (isOpen) {
      self.controlsOpen = isOpen;
    });
  }
});

