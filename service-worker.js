/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "588e048300e9741a34e5e690f988617d"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.159a933c.css",
    "revision": "037797c580992c7bd0b6b8b1caeb362d"
  },
  {
    "url": "assets/img/delete_inaccurate.65ee4735.png",
    "revision": "65ee4735c986ee802e473c7fb5f6f0ff"
  },
  {
    "url": "assets/img/delete_result.b52516f5.png",
    "revision": "b52516f5234a6880328506dc512bfb2d"
  },
  {
    "url": "assets/img/delete.64a1ea6b.png",
    "revision": "64a1ea6be73081bf0e5babca39710882"
  },
  {
    "url": "assets/img/get_all.7da51ed5.png",
    "revision": "7da51ed5cd2384edc88fab3a4b356a7f"
  },
  {
    "url": "assets/img/get_by_id.9589cb7d.png",
    "revision": "9589cb7d109cb7f9723a780bf61eb00d"
  },
  {
    "url": "assets/img/post_inaccurate.d3aaee55.png",
    "revision": "d3aaee55591d56a56b0f5e6f6ec82c02"
  },
  {
    "url": "assets/img/post_result.426e78d0.png",
    "revision": "426e78d0fe1fcf288f4395c7f0175195"
  },
  {
    "url": "assets/img/post_same_name.8a2c5519.png",
    "revision": "8a2c55198ded0aa517bc81026221da23"
  },
  {
    "url": "assets/img/post_same.f26a918b.png",
    "revision": "f26a918b0d9a44674447d6a1d47b81f1"
  },
  {
    "url": "assets/img/post.cd9ae181.png",
    "revision": "cd9ae18193dd02ed8881726b9521fa75"
  },
  {
    "url": "assets/img/put_inaccurate.ef660c6e.png",
    "revision": "ef660c6e52b0c72eeffa919fd576975d"
  },
  {
    "url": "assets/img/put_result.7d326c9c.png",
    "revision": "7d326c9c3d6afaf5368a11bd907532be"
  },
  {
    "url": "assets/img/put.8b3def95.png",
    "revision": "8b3def950faa6bb71ca38dce416f5314"
  },
  {
    "url": "assets/img/sceme.c72e8903.png",
    "revision": "c72e8903a4d699259da568800111c3b7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cee70526.js",
    "revision": "88e98b70020505ab2bbf4085ebcfe247"
  },
  {
    "url": "assets/js/11.06308350.js",
    "revision": "5b5e9f470acf850c2716aecd811ccc3f"
  },
  {
    "url": "assets/js/12.f155a2ce.js",
    "revision": "3fc94067fd4e41348fca3ce9e9ac1eef"
  },
  {
    "url": "assets/js/13.6e69006c.js",
    "revision": "4b0a53c936d12d11502649adf0dc9eef"
  },
  {
    "url": "assets/js/14.d33c93f2.js",
    "revision": "c49a8c6319b7b590beb21a79c4da104f"
  },
  {
    "url": "assets/js/15.8ba1f0f6.js",
    "revision": "136183f7f1664be9a51474de3cf408d9"
  },
  {
    "url": "assets/js/16.8bb02341.js",
    "revision": "d70e25bd2fd772ac5f12b2eee6766cab"
  },
  {
    "url": "assets/js/17.9de7d408.js",
    "revision": "fb671c6f4a779ae29de93a2ba4616b31"
  },
  {
    "url": "assets/js/18.7eb3bcd5.js",
    "revision": "21de0fae8f972d8575c3213c8eb075b5"
  },
  {
    "url": "assets/js/19.2ca5af70.js",
    "revision": "25b0041cd1f3d255583a263148e49b49"
  },
  {
    "url": "assets/js/2.22e5f119.js",
    "revision": "6c167b84e5a2cf60395f6fef9bd243eb"
  },
  {
    "url": "assets/js/20.5ee487d3.js",
    "revision": "cd3e4cb90711e8219ba18fcf84d56826"
  },
  {
    "url": "assets/js/21.77bba4fc.js",
    "revision": "27af148411c162e5853022815db20621"
  },
  {
    "url": "assets/js/22.3b5f122b.js",
    "revision": "4535e037a5bc24ff27ecd5ffbc027d69"
  },
  {
    "url": "assets/js/23.f8384834.js",
    "revision": "327822965e64373596853e0dfc165e29"
  },
  {
    "url": "assets/js/24.11c03e0b.js",
    "revision": "feccb5945b432d3e4baab39def0237d3"
  },
  {
    "url": "assets/js/26.5bd25fcc.js",
    "revision": "72044f91fb7b60e00c74d35df03ab974"
  },
  {
    "url": "assets/js/3.dc0cf457.js",
    "revision": "624e04a816a3fbbc07dbd4d99e823b2e"
  },
  {
    "url": "assets/js/4.e9b60213.js",
    "revision": "a00f7f7abedcb50b05e2cfceee4389bf"
  },
  {
    "url": "assets/js/5.c9ed6edf.js",
    "revision": "3426947ec7a7c87f0c83bf15576c769d"
  },
  {
    "url": "assets/js/6.bc2e0d81.js",
    "revision": "9f231985b1e52e7c3ce484f49f85d71c"
  },
  {
    "url": "assets/js/7.83bb5009.js",
    "revision": "0a5f71e0cf92f1e640f58e9edbbe7f7e"
  },
  {
    "url": "assets/js/8.98ac21ec.js",
    "revision": "6ec9216ebc11b8b71d8ed2c9cfd84cad"
  },
  {
    "url": "assets/js/9.40cc00b1.js",
    "revision": "0550f7800a94ba5721e3fd6066e8affe"
  },
  {
    "url": "assets/js/app.3d9c2e6b.js",
    "revision": "408c16258bf29842ba5a2ef100025939"
  },
  {
    "url": "conclusion/index.html",
    "revision": "fdedae426fccf3e8e3ef3c5b81177130"
  },
  {
    "url": "design/index.html",
    "revision": "f95a26470933ef7d66da4a9f6bd44e99"
  },
  {
    "url": "index.html",
    "revision": "3351a55994b9a7c626dcdb5a89a0a46d"
  },
  {
    "url": "intro/index.html",
    "revision": "fef5d4321c970c1d6d753f912d37bad7"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "8c77ee8dc874cf3e91071feb9fcd5acb"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "8ce96b6fa648f5b6267d445affd0567c"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "f82fdae8b3a2304607b8e402430ec09b"
  },
  {
    "url": "software/index.html",
    "revision": "9e372c1983a65477e8af4be168d3bdb7"
  },
  {
    "url": "test/index.html",
    "revision": "77f28098cf64d1a093d9816430444147"
  },
  {
    "url": "use cases/index.html",
    "revision": "1051fe2d3e9cd05c06e6ceeedab348fd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
