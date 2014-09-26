(function () {
  'use strict';

  Polymer({

    //dataset: {},

    ready: function () {
      this.dataset = {
        name: 'jupe'
      };
    },

    datasetChanged: function () {
      debugger;
    },

    onItemClick: function (evt) {
      debugger;
      this.fire('item-clicked', evt.detail);
    }

  });

})();
