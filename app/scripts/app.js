(function(document) {
  'use strict';

  document.querySelector('composer-search').addEventListener('search-completed', function(evt) {
    // Perform some behaviour
    document.querySelector('#results').innerHTML = 'Search for <strong>' + evt.detail.metadata.query_parameters.q + '</strong> yeilded ' + evt.detail.data.length + ' results.';
  });

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
