var placesInTab = {
  init: function () {
    var boolHideOriginal = nsPreferences.getBoolPref("extensions.places-in-tab.hideOriginal", false);

    if (boolHideOriginal) {
      document.getElementById("menu_showAllHistory").style.display = "none";
      document.getElementById("bookmarksShowAll").style.display    = "none";
    }
  },

  showBookmarks: function (event) {
    query.leftPane = "AllBookmarks";
    openUILink("chrome://places-in-tab/content/places.xul", event, false, true);
  },

  showHistory: function (event) {
    query.leftPane = "History";
    openUILink("chrome://places-in-tab/content/places.xul", event, false, true);
  }
};

Components.utils.import("resource://places-in-tab/vars.js");
window.addEventListener("load", placesInTab.init, false);
