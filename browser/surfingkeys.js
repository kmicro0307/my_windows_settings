const {
  mapkey,
  imap,
  imapkey,
  aceVimMap,
  getClickableElements,
  vmapkey,
  map,
  unmap,
  unmapAllExcept,
  cmap,
  vmap,
  vunmap,
  addSearchAlias,
  removeSearchAlias,
  tabOpenLink,
  readText,
  Clipboard,
  Front,
  Hints,
  Visual,
  RUNTIME,
} = api;

/// an example to create a new mapping `ctrl-y`
mapkey("<Ctrl-y>", "Show me the money", function () {
  Front.showPopup(
    "a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close)."
  );
});
// an example to replace `T` with `gt`, click `Default mappings` to see how `T` works.
// 除外するサイトの設定，復数設定する場合は|で区切る
settings.blacklistPattern = /.typingx0.net\/.*|.e-typing.ne.jp\/.*/i;
// settings.blacklistPattern = /.e-typing.ne.jp\/.*/i;
settings.hintAlign = "left";

addSearchAlias("L", "Im feeling lucky", "https://duckduckgo.com/?q=\\");
addSearchAlias("X", "download", "https://www.google.com/search?q=download+");
addSearchAlias("Z", "google trend", "trends.google.com/trends/explore?q=");

map("gt", "T");
map("h", "S");
map("l", "D");
//map('s', 'v');
imap("<Ctrl-@>", "<Esc>");
vmap("<Ctrl-@>", "<Esc>");
map("<Ctrl-@>", "<Esc>");
map("<Alt-,>", "<<");
map("<Alt-.>", ">>");
//map('o', 't');
// map("t", "og");
cmap("<Ctrl-@>", "<Esc>");
map("f", "af");
vmap("H", "0");
vmap("L", "$");
vmapkey("J", "10j");
vmapkey("K", "10k");
//map('K', '10k');

// unmap('f')
unmap("-");
// mapkey('f', '#Open a link in active tab', function() {
//     Hints.create("", Hints.dispatchMouseClick, {tabbed: true, active: false});
// });
// mapkey("f", "Open link in current tab", () => Hints.create("*[href]", (e) => location.assign(e.href)));
mapkey("F", "Open a link in non-active new tab", function () {
  Hints.create("", Hints.dispatchMouseClick, { tabbed: true, active: false });
});

settings.prevLinkRegex = /((<<prev(ious)?)|前へ|前のページ+)/i;
settings.nextLinkRegex = /((>>|next)|>|次へ|次のページ+)/i;
map("<Ctrl-x>", "x");
unmap(";t");
vunmap("t");
// an example to remove mapkey `Ctrl-i`
unmap("<Ctrl-i>");

// an example to remove mapkey `Ctrl-i`
unmap("<Ctrl-i>");

unmap("M");
mapkey("M", "Copy title and link to markdown", () => {
  Clipboard.write(`[${document.title}](${window.location.href})`);
});

mapkey("yo", "Copy title and link for Obsidian", () => {
  Clipboard.write(`🔖 ${document.title} \n${window.location.href}`);
});

// set theme
settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`; /// an example to create a new mapping `ctrl-y`
mapkey("<Ctrl-y>", "Show me the money", function () {
  Front.showPopup(
    "a well-known phrase uttered by characters in the 1996 film Jerry Maguire (Escape to close)."
  );
});
// an example to replace `T` with `gt`, click `Default mappings` to see how `T` works.
// 除外するサイトの設定，復数設定する場合は|で区切る
settings.blacklistPattern = /.typingx0.net\/.*|.e-typing.ne.jp\/.*/i;
// settings.blacklistPattern = /.e-typing.ne.jp\/.*/i;
settings.hintAlign = "left";

map("gt", "T");
map("h", "S");
map("l", "D");
//map('s', 'v');
imap("<Ctrl-@>", "<Esc>");
vmap("<Ctrl-@>", "<Esc>");
map("<Ctrl-@>", "<Esc>");
map("<Alt-,>", "<<");
map("<Alt-.>", ">>");
//map('o', 't');
// map("t", "og");
cmap("<Ctrl-@>", "<Esc>");
map("f", "af");
vmap("H", "0");
vmap("L", "$");
vmapkey("J", "10j");
vmapkey("K", "10k");
//map('K', '10k');

//unmap('f')
unmap("-");
//mapkey('f', '#Open a link in active tab', function() {
//    Hints.create("", Hints.dispatchMouseClick, {tabbed: true, active: false});
//});
// mapkey("f", "Open link in current tab", () => Hints.create("*[href]", (e) => location.assign(e.href)));
settings.prevLinkRegex = /((<<prev(ious)?)|前へ|前のページ+)/i;
settings.nextLinkRegex = /((>>|next)|>|次へ|次のページ+)/i;
map("<Ctrl-x>", "x");
unmap(";t");
vunmap("t");
// an example to remove mapkey `Ctrl-i`
unmap("<Ctrl-i>");

// an example to remove mapkey `Ctrl-i`
unmap("<Ctrl-i>");

unmap("M");
mapkey("M", "Copy title and link to markdown", () => {
  Clipboard.write(`[${document.title}](${window.location.href})`);
});

mapkey("yb", "Copy title and link for Backlog", () => {
  var ticket_number =
    document.getElementsByClassName("ticket__key-number")[0].textContent;
  var title = document.getElementsByClassName("markdown-body")[0].textContent;
  var url = window.location.href;
  Clipboard.write(`[${ticket_number} ${title}](${url})`);
});

mapkey("yo", "Copy title and link for Obsidian", () => {
  Clipboard.write(`🔖 ${document.title} \n${window.location.href}`);
});

// Tree Style Tabs

const tstId = "treestyletab@piro.sakura.ne.jp";

var myUrls = [
  {
    title: "Home Page",
    url: "https://docs.google.com",
  },
];

mapkey("oU", "#test search", function () {
  Front.openOmnibar({ type: "History", myUrls });
});

// タブを1段階上昇させる
mapkey("<Shift-Tab>", "outdent parent tab", () => {
  browser.runtime.sendMessage(tstId, {
    type: "outdent",
    tab: "current",
  });
});

// set theme
settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`;
