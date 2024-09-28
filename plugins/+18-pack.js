/*import fetch from 'node-fetch';
const handler = async (m, {conn, command, usedPrefix, isOwner}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup && !isOwner) return conn.reply(m.chat, `Comandos +18 deshabilitados`, m)
  switch (command) {
    case 'pack':
      const url = await pack[Math.floor(Math.random() * pack.length)];
      conn.sendFile(m.chat, url, null, `Mira lo que me pedís, sos un pajero😡`, null, null, {viewOnce: true});
      break;
    case 'packgirl':
      const url2 = await packgirl[Math.floor(Math.random() * packgirl.length)];
      conn.sendFile(m.chat, url2, null, `Mira lo que me pedis, sos un pajero😡`, null, null, {viewOnce: true});
      break;
    case 'packmen':
      const url3 = await packmen[Math.floor(Math.random() * packmen.length)];
      conn.sendFile(m.chat, url3, null, `Como te encanta ver pitos ehhh`, null, null, {viewOnce: true});
      break;
    case 'videoxxx':
      const url4 = await videosxxxc[Math.floor(Math.random() * videosxxxc.length)];
      await conn.sendFile(m.chat, url4, null, `hola`, null, null, {viewOnce: true});
      break;
  }
};
handler.command = /^(pack|packgirl|packmen|videoxxx)$/i
handler.group = true
handler.botAdmin = true
export default handler;

global.pack = [
'https://cdni.pornpics.com/1280/7/710/34636921/34636921_041_c663.jpg',
'https://cdni.pornpics.com/1280/7/710/34636921/34636921_020_c550.jpg',
'https://cdni.pornpics.com/1280/7/710/34636921/34636921_043_e3cd.jpg',
'https://cdni.pornpics.com/1280/1/253/56976340/56976340_007_abf1.jpg',
'https://cdni.pornpics.com/1280/3/1/78814587/78814587_004_fb3b.jpg',
'https://cdni.pornpics.com/1280/7/81/13885728/13885728_069_9df2.jpg',
'https://cdni.pornpics.com/1280/7/404/20392471/20392471_049_ceac.jpg',
'https://cdni.pornpics.com/1280/7/673/90747229/90747229_011_a839.jpg',
'https://cdni.pornpics.com/1280/7/673/90747229/90747229_017_38fb.jpg',
'https://cdni.pornpics.com/1280/7/673/90747229/90747229_034_2773.jpg',
'https://cdni.pornpics.com/1280/7/673/90747229/90747229_055_8ee8.jpg',
'https://cdni.pornpics.com/1280/7/673/90747229/90747229_063_d134.jpg',
'https://cdni.pornpics.com/1280/7/673/90747229/90747229_079_5219.jpg',
'https://cdni.pornpics.com/1280/7/673/90747229/90747229_076_55c1.jpg',
'https://cdni.pornpics.com/1280/7/673/90747229/90747229_086_7250.jpg',
'https://cdni.pornpics.com/1280/7/673/90747229/90747229_096_1234.jpg',
'https://cdni.pornpics.com/1280/7/673/90747229/90747229_100_e5a0.jpg',
'https://cdni.pornpics.com/1280/7/673/90747229/90747229_116_99a3.jpg',
'https://cdni.pornpics.com/1280/7/673/90747229/90747229_103_ff9e.jpg',
'https://telegra.ph/file/be2be120f33974015388a.jpg',
'https://telegra.ph/file/f57dd570c30e5454db898.jpg',
'https://telegra.ph/file/f86ec5c5a0f3c46e46560.jpg',
'https://telegra.ph/file/f3b823ab2aa23bce9aff9.jpg',
'https://telegra.ph/file/3c2b786ae7d74b5443094.jpg',
'https://telegra.ph/file/1a7c13713fc4a08ce2f48.jpg',
'https://cdni.pornpics.com/1280/7/512/98252887/98252887_027_e5e4.jpg',
'https://cdni.pornpics.com/1280/7/512/98252887/98252887_028_f08a.jpg',
'https://cdni.pornpics.com/1280/7/512/98252887/98252887_030_6863.jpg',
'https://cdni.pornpics.com/1280/7/694/97070598/97070598_006_e9f7.jpg',
'https://cdni.pornpics.com/1280/1/93/14212152/14212152_016_15f3.jpg',
'https://cdni.pornpics.com/1280/7/113/35161851/35161851_031_4995.jpg',
'https://telegra.ph/file/30f850d24c647a4aaf963.jpg',
'https://telegra.ph/file/a869372f5528f7568e713.jpg',
'https://telegra.ph/file/10d22d679a9c2f83e9004.jpg',
'https://telegra.ph/file/4bd177e7617242ee9d973.jpg',
'https://telegra.ph/file/d74e05e868e470df2525d.jpg',
'https://telegra.ph/file/b6190a76e0d3fdb545ed4.jpg',
'https://telegra.ph/file/31bb8466dd2ea0f64683b.jpg',
'https://telegra.ph/file/02adc1dbe0b2cc3dbe669.jpg',
'https://telegra.ph/file/5dfb2e22daac084449b3a.jpg',
'https://telegra.ph/file/16a25c416bc06cb1b517c.jpg',
'https://telegra.ph/file/174c7e487401c6602165e.jpg',
'https://telegra.ph/file/afed66467c4e04d3533c6.jpg',
'https://telegra.ph/file/1010419ae777785e848d3.jpg',
'https://telegra.ph/file/82e51092e5bbc3085a6e0.jpg',
'https://telegra.ph/file/ca36bf414de488f1d8461.jpg',
'https://telegra.ph/file/71435fa35b770fa7616cd.jpg',
'https://telegra.ph/file/26e77de21a4c2ddc8d632.jpg',
];
global.packgirl = [
  'https://telegra.ph/file/c0da7289bee2d97048feb.jpg',
  'https://telegra.ph/file/b8564166f9cac4d843db3.jpg',
  'https://telegra.ph/file/fdefd621a17712be15e0e.jpg',
  'https://telegra.ph/file/6e1a6dcf1c91bf62d3945.jpg',
  'https://telegra.ph/file/0224c1ecf6b676dda3ac0.jpg',
  'https://telegra.ph/file/b71b8f04772f1b30355f1.jpg',
  'https://telegra.ph/file/6561840400444d2d27d0c.jpg',
  'https://telegra.ph/file/37e445df144e1dfcdb744.jpg',
  'https://telegra.ph/file/155b6ac6757bdd9cd05f9.jpg',
  'https://telegra.ph/file/2255a8a013540c2820a2b.jpg',
  'https://telegra.ph/file/450e901ac153765f095c5.jpg',
  'https://telegra.ph/file/f18e421a70810015be505.jpg',
  'https://telegra.ph/file/d3d190691ec399431434e.jpg',
  'https://telegra.ph/file/1fd2b897a1dbc3fdc2a70.jpg',
  'https://telegra.ph/file/607d54a909035bca7444f.jpg',
  'https://telegra.ph/file/818ba7c0ae82876b190b6.jpg',
  'https://telegra.ph/file/0f2bb426951b4a8fe1e5a.jpg',
  'https://telegra.ph/file/7e895b5b933226a07558a.jpg',
  'https://telegra.ph/file/f9d9f0da337512a1b1882.jpg',
  'https://telegra.ph/file/09ff5bfce02f1f78e3861.jpg',
  'https://telegra.ph/file/4ad840d401ab1f90444df.jpg',
  'https://telegra.ph/file/7b4bdcad3dde870355c94.jpg',
  'https://telegra.ph/file/f69a5beaca50fc52a4a71.jpg',
  'https://telegra.ph/file/411d7cdee24669e167adb.jpg',
  'https://telegra.ph/file/36a63288e27e88e2f8e10.jpg',
  'https://telegra.ph/file/1ac7657a5e7b354cd9991.jpg',
  'https://telegra.ph/file/14161eab0c1d919dc3218.jpg',
  'https://telegra.ph/file/810411b9128fe11dd639a.jpg',
  'https://telegra.ph/file/5fe7e98533754b007e7a1.jpg',
];
global.packmen = [
  'https://telegra.ph/file/bf303b19b9834f90e9617.jpg',
  'https://telegra.ph/file/bcc34403d16de829ea5d2.jpg',
  'https://telegra.ph/file/c94fa8ed20f2c0cf16786.jpg',
  'https://telegra.ph/file/eea58bf7043fd697cdb43.jpg',
  'https://telegra.ph/file/ee3db7facdfe73c8df05a.jpg',
  'https://telegra.ph/file/d45b4e4af4f2139507f8c.jpg',
  'https://telegra.ph/file/d176e7fc8720f98f6b182.jpg',
  'https://telegra.ph/file/ce1e072829d1fa5d99f5f.jpg',
  'https://telegra.ph/file/a947933701be6d579c958.jpg',
  'https://telegra.ph/file/9027e5a464ec88e8ab5c1.jpg',
  'https://telegra.ph/file/049a8c611a838ea2f6daa.jpg',
  'https://telegra.ph/file/37b35fbc7e2ee73482ee1.jpg',
  'https://telegra.ph/file/9bcfade24ae85cd417f06.jpg',
  'https://telegra.ph/file/ac0c711585f4300c54355.jpg',
];
global.videosxxxc = [
  'https://telegra.ph/file/4a270d9945ac46f42d95c.mp4',
  'https://telegra.ph/file/958c11e84d271e783ea3f.mp4',
  'https://telegra.ph/file/f753759342337c4012b3f.mp4',
  'https://telegra.ph/file/379cee56c908dd536dd33.mp4',
  'https://telegra.ph/file/411d8f59a5cefc2a1d227.mp4',
  'https://telegra.ph/file/ee2cf1b359d6eef50d7b7.mp4',
  'https://telegra.ph/file/1e316b25c787f94a0f8fd.mp4',
  'https://telegra.ph/file/c229d33edce798cde0ca4.mp4',
  'https://telegra.ph/file/b44223e72dd7e80e415f2.mp4',
  'https://telegra.ph/file/61486d45a8a3ea95a7c86.mp4',
  'https://telegra.ph/file/76ba0dc2a07f491756377.mp4',
  'https://telegra.ph/file/831bb88f562bef3f1a15d.mp4',
  'https://telegra.ph/file/ee2cf1b359d6eef50d7b7.mp4',
  'https://telegra.ph/file/598857924f3a29ffd37ae.mp4',
  'https://telegra.ph/file/528caef6ea950ec45aeef.mp4',
  'https://telegra.ph/file/4a270d9945ac46f42d95c.mp4',
  'https://telegra.ph/file/958c11e84d271e783ea3f.mp4',
  'https://telegra.ph/file/f753759342337c4012b3f.mp4',
  'https://telegra.ph/file/379cee56c908dd536dd33.mp4',
  'https://telegra.ph/file/411d8f59a5cefc2a1d227.mp4',
  'https://telegra.ph/file/76ba0dc2a07f491756377.mp4',
  'https://telegra.ph/file/831bb88f562bef3f1a15d.mp4',
];*/