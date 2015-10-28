Package.describe({
  summary: "server-side http(s) proxy",
  name: "lalomartins:http-proxy",
  version: "0.1.0",
  git: "https://github.com/lalomartins/meteor-http-proxy.git"
});

Npm.depends({
  'proxy-middleware': '0.15.0'
});

Package.onUse(function(api) {
  api.addFiles('wrap.js', 'server');
  api.export('Proxy', 'server');
});
