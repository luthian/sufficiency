'use strict';

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
      userDisagrees: false,
      childData: {
        currentLevel: this.level,
        currentType: this.type,
        currentIndex: Util.getRandomNum(this.$props.choices[this.$props.type][this.$props.level].length - 1)
      },
      newEthicalLevel: this.level,
      options: Util.ethicalOptions
    };
  },
  computed: {
    classObject: function() {
      var classes = {controlsTemplateWrapper: true};
      var ethicalLevelToUse = (this.userDisagrees ? this.newEthicalLevel : this.childData.currentLevel);
      if (this.open && this.show[this.type]) {
        classes.open = true;        
        switch (ethicalLevelToUse) {
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
      //Todo (David D'Antonio): Code to update the array of ethical strings goes here.
      bus.$emit('change-ethical-level', this.childData, this.choices, this.newEthicalLevel);
      // Clear the checkbox
      this.userDisagrees = false;
    }
  },
  updated: function() {
    // We have to re-add the tooltips each time the dom is rendered
    // because blocks controls by v-if aren't in the dom if their
    // governing condition is false
    $('[data-toggle="tooltip"]').tooltip()
  },
  beforeUpdate: function() {
    // Nuke all tooltips before we update. They will be added back
    // after the update.
    $('[data-toggle="tooltip"]').tooltip('destroy')
  }
});

/* Testimonial component */
Vue.component('testimonial-element', {
  template: '#testimonial-template',
  props: {
    index: {
      type: Number,
      default: Util.getRandomNum(Util.testimonials.length - 1)
    }
  },
  data: function() {
    return {
      tPic: "/images/testimonials/" + Util.testimonials[this.index].tPic + ".png",
      tName: Util.testimonials[this.index].tName,
      tTitle: Util.testimonials[this.index].tTitle
    }
  }
});

/* Text persuasive element component */
Vue.component('text-element', {
  template: '<span>{{ msg }}</span>',
  props: {
    index: {
      type: Number,
      default: -1
    },
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
  data: function() {
    return {
      itemIndex: (this.$props.index === -1 ? Util.getRandomNum(this.$props.choices[this.$props.type][this.$props.level].length - 1) : this.$props.index)
    }
  },
  computed: {
    msg: function() {
      return Util.chooseElement(this.itemIndex, this.type, this.level, this.choices);
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
    testimonials: Testimonials,
    ctas: CTAs,
    controlsOpen: false,
    sidebarOpen: false,
    typesToShow: [true, true, true, true, true, true],
    msg: "",
    oldLevel: "",
    newLevel:""
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
  computed: {
    terms: function() {
      return Util.chooseElement(this.itemIndex, this.type, this.level, this.choices);
      }
  },
  created: function() {
    var self = this;
// Listen for changes to which persuasive types to show
    bus.$on('toggle-type-to-show', function (newType) {
      Vue.set(self.typesToShow, newType, !self.typesToShow[newType]);
    });
// Listen for changes to ethical levels
    bus.$on('change-ethical-level', function (childData, choices, newLevel) {
      var msg = Util.chooseElement(childData.currentIndex, childData.currentType, childData.currentLevel, choices);
      self.msg = msg;
      self.oldLevel = Util.ethicalOptions[childData.currentLevel].text;
      self.newLevel = Util.ethicalOptions[newLevel].text;
      $("#voteRecorded").modal('show');
    });
  },
  mounted: function() {
    // init the slide-in panel jQuery plug-in
    this.slider = $('#controlMenu').slideReveal({position: "right", width: "20%"}); // slideReveal return $('#slider')
    $('.footer-text [data-toggle="popover"]').popover({placement: "top"});
  }
});

