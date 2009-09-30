Components.utils.import("resource://places-in-tab/vars.js");

var placesInTab = {
  init: function () {
    if (nsPreferences.getBoolPref("extensions.places-in-tab.hide-original-menu-items", false)) {
      placesInTab.hideOriginal(document);
    }
  },

  showBookmarks: function (event) {
    query.leftPane = "AllBookmarks";
    openUILink("chrome://places-in-tab/content/places.xul", event, false, true);
  },

  showHistory: function (event) {
    query.leftPane = "History";
    openUILink("chrome://places-in-tab/content/places.xul", event, false, true);
  },

  hideOriginal: function (t) {
    t.getElementById("menu_showAllHistory").style.display = "none";
    t.getElementById("bookmarksShowAll").style.display    = "none";
  },

  showOriginal: function (t) {
    t.getElementById("menu_showAllHistory").style.display = "-moz-box";
    t.getElementById("bookmarksShowAll").style.display    = "-moz-box";
  },

  loadPrefs: function () {
    document.getElementById("hide-original-menu-items").checked = nsPreferences.getBoolPref("extensions.places-in-tab.hide-original-menu-items", false);
  },

  savePrefs: function () {
    var boolHideOriginal = document.getElementById("hide-original-menu-items").checked;
    nsPreferences.setBoolPref("extensions.places-in-tab.hide-original-menu-items", boolHideOriginal);

    if (boolHideOriginal) {
      placesInTab.hideOriginal(window.opener.opener.document);
    } else {
      placesInTab.showOriginal(window.opener.opener.document);
    }
  }
};

window.addEventListener("load", placesInTab.init, false);
