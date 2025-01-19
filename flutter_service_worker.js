'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "74ba6a419c3d879f12cd59e4ef0fec86",
"version.json": "457a73efeb630687681923ce3cdc5c57",
"index.html": "dab911692566dfb33e779242e12c4543",
"/": "dab911692566dfb33e779242e12c4543",
"CNAME": "19f8b81d1b7b39080bdb65c579630ddd",
"main.dart.js": "63f65a0b569583f4a9c2652c3cc9c902",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2b2c0b46e3e7d7c6e9bbe9dd2c9c37b9",
".git/ORIG_HEAD": "ad7a9b99b1ba213663ac90cbe70c2a0c",
".git/config": "423f173f9d077ba104fff75ea61cb8fc",
".git/objects/66/38411dd6de42e9d442eb9318a5a22071e992e2": "d9108fcebde25ce122bf9ccf90b290bf",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/6f/2540a307ee72528ea3479c75e537f3a4b5af12": "96086d79eae011b062e68a3deb3e435d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/db53f34a4deacf8b0addc3fe7eda68b9e6e3ef": "8f561a68d6a0afa04a9bf6116bcc02ed",
".git/objects/04/6122e3e175a49f4a1d163308201ca093745e04": "d8f8b63ef76a5677883acc90896704b3",
".git/objects/6a/2f99c0f074d648724390ce6c85d634c7a77a38": "62ffc66ea1ca15da5a1d8b00dd3e9fa8",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/69/9661c740b8e382e27ce33f44935af8562d7ea6": "b44e31901b0d75a2d179f4d1adee90bd",
".git/objects/58/af9ba752fd95d6ef58253d98962e1645255edf": "2d3184a0f6357953e627d6198461c316",
".git/objects/0e/cf7d365cab1c11619742d446d2daa5421b5b2d": "58a6d70ced326612ec84f967ca7de34f",
".git/objects/b5/9c6a9740db0d7d718c6654fa58e0d4c3805ff7": "6668d8851ea4642a2e35c7315eb1cc94",
".git/objects/d9/e0886bd2378b566195541bb4f142055a0f314a": "f51ac4552297631ad1ceed8307942575",
".git/objects/d7/910089862588642ae82e4ea87dcdb72acd8002": "bea1c245f0de6f867975bbcae58a90ac",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/2491099db9102b13dc2cddb82e46e62c9036be": "7f6ffdba2ef9fa01a13813ccc650f04b",
".git/objects/be/c4003426c7acce690cb87d0c0ca05595cd75f7": "da1445493dd392c32d912d0ff53db632",
".git/objects/be/098818f0a4e7ef9ae5d08c9d394ead64d83aa4": "524881ed540f8d4534c0c8b455e288f7",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/553d46494ce69b621db7e12571f168a75701ab": "8a866fd42127c618fff75978ac9a3c45",
".git/objects/ae/96362e28e744910d4f620530c7221a5ae38d0a": "5d2e615c22e6dbeb5603242d184faf44",
".git/objects/d8/1703cfe5134d100c8e0dc865019b2147f6157e": "3bfb45f7980b953c04e919679b4f8c83",
".git/objects/f4/4d6467fcf3321d4cb4f36a92ca24fb04c24b56": "7a101664d3bbde02f3626c091d44cb58",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/390e1ae0d5bef863c51a23f763c8f8bb666be5": "17890423a93dc05e033a2a3d0f88a364",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/dd787f596d1093a643784fc1631541c76c3d15": "910525058da4977b09622cd500805444",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/fb/0be4ba4c75b81a1064e0b92f87a37ab467d28a": "e306e084c25f472f04aaaa7e1259e7de",
".git/objects/c1/e40772a385d2a0a33202202f05e3138370b835": "a209a9c46f18f33a338c3524f9bcd283",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/d3080b786fe37ad8809384852c6cea06466649": "7fc52b3f0895765ac49a4af3f000ed98",
".git/objects/ec/c14ec3b698a22b358fc87bd4607d30597d4e4a": "b9861e18c0486a9ae5c7021d44341c36",
".git/objects/4e/5b19448a67c524b15bcb7c6ff481c6c6c92b5b": "edd617c7a21f9d036bb63315712efc39",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/7c/67b21e8e3a6a529aaac51f6e5f54b49171156f": "d48f9aff4ce44ce2b094ccbadbc5df0b",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/89/b4032d7fc65543cac147fb7c482beae4c95ea7": "2b079c1db9514ba9ed93a7a60e82b6b6",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/5da08656e42ba32593f0674bdd24f0e7f658d0": "10dd9186726cc62b408c8335711c93d2",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/17/06386f6e554f075e95c61a1f08eb59fa62c1e3": "b9d22f0aa37af377228165ef88666c5b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/6e8511cdba166d3d77f2dde7e89abe8f455c02": "fb9e0ec9891d92006111ce2217ba65f7",
".git/objects/8a/bce4c68096471cffbff4cba8564859385e1bb0": "fc3efffa8ddefaa2e8934fd61dadbcd4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/6e7b8af4164b5ffcadd083db8090258643ac99": "b705cb0b556e22ea6a2078c808eb2110",
".git/objects/21/24173f6cbd1e116fea6c9093da32dd18c739ce": "0ed6c80ed161538e29ae1e3461b39197",
".git/objects/4d/a94a71f67cd873a59c174883a98e9bac2aa055": "3bdf39222d3796928f50a8e038a4af5e",
".git/objects/86/0c8d09412b40d7ec2f6af3f9b530d9260a2b0a": "e90e73266f52056d1f0cc74e4f3f88cf",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/a3566d2e008bf4c488227a3a4f1a5a78d9b6fe": "d7903aa97f9c2c072ec39c6bd30468ad",
".git/objects/2a/7e84e9aad78abf98ccb663f8bc9de41ae98d45": "33f18c205225dd208e887ebd9b6a37ea",
".git/objects/2f/3d6d49e2a13ca9984efddcdcc2c3959cd90bf1": "3b127b0d6e11ed019290f60c0a9258f9",
".git/objects/88/e700f7bfb921e7f8cd2fb51fb64ef41c3aa76b": "1cff1fc25b17d3ce186414072fcffafd",
".git/objects/88/ed887eea802673ae855e288f374d01d24b10ca": "c4ad7effdf24b40b880208426e60b110",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/00/1b617e82c66933a5075c1014523f7368944838": "95f495f274515aa511297102d7d1fce6",
".git/objects/6e/5b4d4e35036fa2c497d33dec449c2e76d91abb": "ce0f7796371055737c11f9c16d58c488",
".git/objects/6e/a68665470f54af748bc0403a8b8a0cd4254343": "433018ed73212ce3f6c9f519b09d7b8e",
".git/objects/91/e46d3a413a86738960d2b87123bd2cb35213fe": "7b6d582f5c641b525ec2df36b1fd5d20",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/01/c6c91d596fe5bb29ed5e3366e3f464dcce6eac": "0935d9733e54821c27300833c1651e96",
".git/objects/39/7c0b97c3291b9ec73020579ec33f1be992a60d": "482cca9e86ff7f139cc4205122a81099",
".git/objects/99/187cbee75f4ad59c46186dc1ad1da7b6ad5df1": "d9bd258af5dd6ac6e00f50cb91e74a82",
".git/objects/52/5269beed584785156ca3af6f4f8983d686cb06": "900a65ded4b049c174c7acaecb2ae776",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/a62bc402779e2cf639a1d38ccb0d84fd26010e": "7e25f31b3d1b32d82f20cb4f64fe0256",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/f080947d9412ce2b6398d7f63b1adfddd01933": "a1c54eee8855e17cc7910542a2e7c6b5",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/47237e6ef1ec726496fecdf803d54673ba6c76": "cdb2c2366cc79185f404dccb8108d52b",
".git/objects/a9/9bc24f8f66dd4614df7837e44e5250c60b1d53": "d2f133ee01d429f24aea38e73d2a515a",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/a2c45732c48195afcf6359be3698e67ef05f2c": "cfb7ee5434c8a9f172783addffe1557d",
".git/objects/d2/e35ba7310f6f04f378584211e97021dcf55b9d": "b729ba5113dde46ac1a0d87e57536e6b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/d96ed16d026e4a276e3e32f328b45a16121305": "198dfaca4b7afb47af102569cb5ed950",
".git/objects/b0/fb8eb43b0025a44e4e56d5064ca4d257039a14": "4aeb5ee0521bf0e8cfb8937d985c8d6b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/5385ac3d6dbfcb7752df9447abc2d3db04b9d1": "7fb834e6d13720f79502daaabcd907bf",
".git/objects/ef/56afae35d983b42fa2679fc69b4427454ebcb5": "502075d84221fcc2ad83e15da43dca9b",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/ea/45c366cb532b5130addf43b6a0b46c0f28945d": "32a43aca90fc74841186bab98e41ada0",
".git/objects/ea/7c9f7124b644ae771e881f7a2a25038ce536a1": "45999cf720c63d15ada4831673015771",
".git/objects/ea/09942d388f1ce7192fef5459f4e7a1803ba077": "4068d83d27e4452980606df5e16bfd7a",
".git/objects/cd/57d01be5769023e1e51ce95073dcc20ee03f66": "562511c6119b244f3eb4d25d3fe3683c",
".git/objects/cc/25cb99ad9ea09a9d57122ce70ba8d0602cd248": "349f118d153c66580361f895e2ce31ad",
".git/objects/cc/5624cc07dd8e45345d57e976b868104243d9f0": "e652b98a151b5a0d2df2a73b3a34ec44",
".git/objects/ff/49502cc90128d8bfa2d27c3808359e65214551": "34a5c25c28db29bece713ddf6c0e74b2",
".git/objects/e9/d74172b4ea42edc6b8f18144d8f220fb952f32": "1575ba214dc2896fcf196c4f25466527",
".git/objects/ce/cd82f66c0880be26adc6ea59a702fa039f1bdf": "195bbf14a67efae7c7005e32fedbca90",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/77/b46ec2d0aca5dfff9acdeac44f32034b866443": "33ae0f2ea866c36a7e00e5d1eaebb90e",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/15/a23b1e24a476a0a7873f264204701cb099d37d": "662de1e9f1b8af107764fbd02fb32d74",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/244eb8b91e7a3053dd3734fd5dc7efaa71e634": "6e911be1bdc3599b7e64b97b461ff45a",
".git/objects/49/d8adce881dd98dc1662c6a01632d1b8e409345": "b78e2534b2976116c8a2b0813f197972",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "38a825f72c794918b0bbcc97b8ae3120",
".git/logs/refs/heads/main": "ec26c8b3c5b1133dc63c2d989aef55ae",
".git/logs/refs/remotes/origin/main": "e6093b9e85a83d261652ffa33010b146",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a62544472b5c4f4011c9fcb0ba511cbb",
".git/refs/remotes/origin/main": "a62544472b5c4f4011c9fcb0ba511cbb",
".git/index": "9e01d0ee188e82bcc5bff29bedee7205",
".git/COMMIT_EDITMSG": "9b2f33bcff5274ab53dabb08af3f0b7c",
".git/FETCH_HEAD": "70cc55fae67a32ee1ad2a05e3b39250b",
"assets/AssetManifest.json": "5cb59223449cbe3f936ed6a31593e99d",
"assets/NOTICES": "2f8439a2fbdec95adb7aecaa75173fec",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "0a4ef4795e338ea50c00b4263262796a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/assets/images/sod-logo.jpeg": "162d949457340326c72679932f199dd6",
"assets/AssetManifest.bin": "d7c5b823868d46cc820f1dd155e089b8",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
