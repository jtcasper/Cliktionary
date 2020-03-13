browser.menus.create({
  id: "cliktionary",
  title: "Cliktionary",
  contexts: ["selection"]
});

browser.menus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "cliktionary":
      browser.tabs.create({url: `https://en.wiktionary.org/wiki/${info.selectionText}`});
      break;
  }
});
