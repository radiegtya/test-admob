var page = tabris.create("Page", {
  title: "Hello, World!",
  topLevel: true
});

var button = tabris.create("Button", {
  text: "Native Widgets",
  layoutData: {centerX: 0, top: 100}
}).appendTo(page);

var label = tabris.create("TextView", {
  font: "24px",
  layoutData: {centerX: 0, top: [button, 50]}
}).appendTo(page);

button.on("select", function() {
  label.set("text", "Totally Rockxx!");
  
  AdMob.createBanner({
    adId: "ca-app-pub-8843274213176502/9864789271",
    position: AdMob.AD_POSITION.TOP_CENTER,
    autoShow: true
  });
});

page.open();
