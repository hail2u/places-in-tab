Components.utils.import("resource://places-in-tab/vars.js");

var placesInTab = {
  showBookmarks: function (event) {
    query.leftPane = "AllBookmarks";
    openUILink("chrome://places-in-tab/content/places.xul", event, false, true);
  },

  showHistory: function (event) {
    query.leftPane = "History";
    openUILink("chrome://places-in-tab/content/places.xul", event, false, true);
  }
};
