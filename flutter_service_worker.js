'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "96186096e5c72c5da7dc670755cf27b3",
"version.json": "555a1c300ecc0f2dceddc15e935e0f24",
"index.html": "2dae2e14f3f9b051b49cee538f76b921",
"/": "2dae2e14f3f9b051b49cee538f76b921",
"main.dart.js": "c3aef6b19e930caba8208ba36682a1f9",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c20e4e53aa222e3f4c8ec1ecd5c1b717",
".git/config": "4f817d564f48522ea831396e49829f54",
".git/objects/95/47782fb6d69775d4f4cc012eb5ff6d422868ed": "d521ed2a0cdd93a1b63c71013a91920e",
".git/objects/59/85bd4aa3eb42d26b51bec63d08282b38f8c08e": "2b927776e2e13f2b862ed46a21e24520",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/e2acd1a08839dd0bf2b44f3ee670e3418155b6": "577c37c09d147fa0d3c8d4c012527c57",
".git/objects/69/bc6be85b50de6854da0aef4005e46aaea33cf3": "5fdfce5380c430389dad7779cf513cea",
".git/objects/3c/bda4f424a5a2875e8fd7a712caa91b63073461": "1e711665984adc5e89a134c50104316b",
".git/objects/56/ec7c7d640545e4082a633c16ab38aece8ba7b7": "819e9b883a1f7be78e87cd1081ef23e5",
".git/objects/67/28af88d91ea458e4163aa12d15a4da1c1a241b": "6c4c91f5f218d53d653e3465b52de319",
".git/objects/05/c43f69282131b3cb4227aa6c9b5d6ed9ae0859": "1afbc7c578fb6354a8b8bf90db02bf71",
".git/objects/b5/8b583f51e85b5887ff878728ca775348fd0a53": "fa9dc3389a229b0c018d3509ad452e29",
".git/objects/ac/ec7bbff7be404d724cc2ad1a10d4f5fa2f91d1": "7ffd06b4ecbb5e88ac467ae4e405488d",
".git/objects/ad/a43de7d58605aecb912e6d49783e1080f66f62": "c121ce72bda1c283269e492adad69d0c",
".git/objects/bb/edda13633ba07ff22ed9a341b8d012fa38a4c7": "906e6f30c0e8761c1b87339a489a363e",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/df/9495a76ae79107992010859d4647d3be350982": "30379cc8ef77764a0ff9e24dc4eb8224",
".git/objects/df/df1f30c44a872dcb28b138ed7bdc9b53ff0d93": "384ea7cabe09c5f05fe18ca2be9be3d5",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/b4/1ef7c982bb6cef6c06175c87129cce8e46c1d9": "5383a4c22851bf7f9752091ef3f7820b",
".git/objects/b4/148327797a58031d3c0b437177f59bf6322c88": "7ec4164f190cc79438b5d630e1686e2f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/726137f16cc3435637dc0683fd8ddbbd35bf41": "d68f59c3936fed6b99b9d23317e25397",
".git/objects/d8/c852d2d135176ed00ddeefb6cbd2ae396a05e6": "a5440e84d5bb8ad6077d3d67b468bd94",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/1b463ad1b3c71783d45e2c6279311fe08aeda5": "4e02e734059cf55c974b3b4b598b63ad",
".git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "a8488845061da28fe0e494f6ee898dc0",
".git/objects/ca/19458fb07443efae00270e03adb7060406eb24": "a7bb56493a606c57b6942d9524e58de6",
".git/objects/e4/c8d9ec5c73d36abd08061b83ace921e15e6f37": "60fee556d86051212e0dc0a41119cbd6",
".git/objects/fe/9a067aa8a53965bb3984567c400362eb139bc4": "14321541720bbe31c3def761f9089ecc",
".git/objects/c8/bedf0a790e0c5a191d4794bf5a9dc94327b355": "793f1ee279c7cca56d917fb82b6e7e1b",
".git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "a9dae8f2ccd509792cb17c1c7bd7d2cd",
".git/objects/11/5a9d4fa4276ace2a9bfe1e36927973e32cbfbd": "f192527a5261d016813d0d0035952f22",
".git/objects/7d/c1f717129edd2f1582400dfe1964a4f6f5140b": "428fe5b94cc8b9dc50f99451e0e7542a",
".git/objects/29/acb83695401bb9cb11597be91f0628c0390447": "a87dde5e36bc418992a94b996df6c791",
".git/objects/7c/66dfa33c456f813def635f74651f06cc62efbf": "a7a8750c7893a5806905ea17d82d4067",
".git/objects/42/b2a3ee6e3390297030df7b90f586bf9a9f77d8": "a7bdf607531a4e837fe8e5df875d5ee0",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/17/0c9fed788bb3632eb5851bb98082a8a73e1a4d": "5cedefddd2cea12637cc9b8b6086597d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/f885f57ea7ebba2f2e8d1d10eee92b1c6b289f": "73affdb5ba082fd42f5a513ad2f7158a",
".git/objects/4d/dc31861148d3a9b469edd8d95a7d9a55117344": "51b51d36651a75b2ffdd757a96158c3f",
".git/objects/81/20a05af62ca276604e32bab557dde1ee2bf0a4": "abeb094d2566e85590c194f148102f69",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/43/54007b78d42a4d1895e55849071cac4ebe758e": "833f8895c75df7668f9a81195d9d8bd9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e4b0888c2692cad3796ca7fa08217b71ea076f": "cc1e2714abd53b88f3d505549e07e98b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/c0ee0c9af5c4f4922f350c8536afb0a24dba83": "f1ab0571e18bd830dca0e088916374de",
".git/objects/9a/017fb69f6de533eef9be8004ec80cab7b3687f": "524f50d1597754770492bde3e9c51e66",
".git/objects/5c/0f07f24c0eb6624bea72c752a2cba426e82eeb": "527fe30e3133b30ff4547afe346ed083",
".git/objects/5c/d95064ea7a601ad6d07aa4177d726536233125": "231f0ad65e2302613f0401f210f16ce1",
".git/objects/09/e8bfcdab4dec51cf2b7c88385736d5819e7e30": "d9a523e4d15550ddf6c15d17f2b30b5d",
".git/objects/91/42d383395cd2300795d306c8c3f417cfb0aeca": "2726e741f3caed10ef944eb6b9d0ec04",
".git/objects/62/4a9ff0f6a59e207f133adb46869c95371a0ce9": "6b023a2c3463fec2ef104d24777e17eb",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "db792dc06a71bb4daeec59fa611ee79f",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/c0bf4c53d5baab5535d5df05d2474eeefe67f5": "bc18799da9c5628222b7b2b7355450a1",
".git/objects/5e/e0afe7eca88792a16f1b4c919acd02ee9c0d11": "a30b62c623d4da2d36eb4367455b0b0f",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/39/c1c0a6218fb0ef8a58625a60f124dd91ea74fa": "ba2d0626bfc421ac0d2eb6a7829eb382",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/55/790a67f1a8a0a36656328ddc9308fc328b35e9": "96b64b545b6ad35e8ed0a9c8e451a572",
".git/objects/63/9d10328886ec9d1a43b9f36508554c0c7eae2a": "fca3ef814fe94032c35643a702eb7437",
".git/objects/0f/8a03aafadfcd62cf1258fb2f6bcaac3e4bafb7": "9107d77fb7d40254bd3ceeceeafcfea1",
".git/objects/0f/7a472a7e8eb95090375858ec5cd473eb80dd8f": "3b45e5fe9102b69abe834ecaa5efcb7a",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/1e7ec2632b9e9bcd51d43d102402b51593da66": "77e873671fa25452173f458f8480d3df",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/c7fb7505218e30f23c9cadb3d685f6186ba36a": "ee0f82ff8835a65110ae096c20c845c6",
".git/objects/af/9fc1a7eb6378fa52692a57ac317190275a6e91": "5ea6abf7049e4b2254490b4a976951d3",
".git/objects/b7/36b682a92f18e0cdc9d9c328116e3adfbce584": "a510238c1a51d445faa77c46d989fd1e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/cbd89edfcec20c769ba1bbb2e56da2918b86cc": "f1624c6031092726561c46672063b96f",
".git/objects/de/a704b658b3bcd9a8ebfea7e1d8ee1431c51df7": "c371de3d281e83dcb9cc2d200f897745",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/2ee7c9d11543988c386761b5d0ab7c155ba570": "9f243190188073c217d1dc2ec44aefb8",
".git/objects/c3/cd2c5cbaaff1a67710e406a03b8be8719e0472": "07912fec642918005643a718ada667f1",
".git/objects/c4/f3ee5fa126353d58936bd8e6de6257763ffd74": "47c312e59a27968d19cdf42f4820e3fc",
".git/objects/e1/59ec159fb8951e590547b3ffa3bc8dae712d21": "f80bcf9213ae3553ad97dcd36d59db00",
".git/objects/e6/f7408779dc656e16249d7fa846782705866e0b": "d5c35ae2800f96f7b57b660f5cbd0f5d",
".git/objects/e9/2e0d3704e35f7b248ca680ec7fdd96eb212211": "4b6ad9edf08aa12bea2291e709beceee",
".git/objects/e7/7cf0baf035e5c467c073415aa7f614ca591ed5": "d5f860f983af2ea723fc8d892fae5c58",
".git/objects/cb/cfece077313f659db6114115a48c0f0d290d45": "04bddeffaf3e9c724786ce5ebfb85ab0",
".git/objects/e0/bf628f1200c4a8e0f40e5ce2b1f9a7f10f0034": "9c6ec3847a92e0a6ea27cc06d6ea322f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/95fcb05b3227553c4f2320c73112e2a715ad82": "8e31f57420f4fd59f9ea31d6930ded67",
".git/objects/4a/6bdf330a458fbf8c9191f2f2d7fc0ad0eb8f4b": "6624b85311e67fc0b42cfd0e7645fc27",
".git/objects/8c/3d039bace4a06d1dd9e89eb87324ad29841648": "c0f5f6b013306ef9e4eb62d178e7dd25",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/6ac0fbf2acf7a49f54c391da338689af710404": "6e3df59617d86e18358fda63d1800987",
".git/objects/76/82d6f1e8109fa50058a624985332d4b259be9d": "11ab218b8efab846ff86ff4c36f7aecc",
".git/objects/1c/3cc645cc8958b1fd04be30ec94afcdfa4b93c6": "06088284e012cc4d55fa3cc0ac8e63d5",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/48da5ef8f1fd329632a9f345348066b83921ad": "bc2fecbadef5dc81bcbc24dc5e78f16d",
".git/objects/8b/6cdd74e7009c6d084b4af7369a64169067d2f9": "2c594263b77cc04a614d78ac6b8a7184",
".git/objects/8e/7d256ca6f496585ef9f4525a7cc636201c037b": "13b5fd06d47953544c2e189aa5f35af5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "885376f2626ec5a3e1961bd7dbf13479",
".git/logs/refs/heads/main": "b680b221e1f3081f5c9e581342aeced2",
".git/logs/refs/remotes/origin/main": "eec8b1fff69ccb69528a7910f4b7b774",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
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
".git/refs/heads/main": "2a99089d099531ee92746e315153a7eb",
".git/refs/remotes/origin/main": "2a99089d099531ee92746e315153a7eb",
".git/index": "2e34c32f78d73b87e3c8b31cdfca40c1",
".git/COMMIT_EDITMSG": "1574ceda85dbd831f79bbdeedc8408f5",
"assets/AssetManifest.json": "d48014e39d56c6390543bf262bd52b17",
"assets/NOTICES": "8c8bf01b748d95ebcf58f76d2f420238",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "99c3a017ccba8512980a7044551b1bee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_osm_plugin/assets/default_pin.png": "7679c39b09843c8bbea9add45fb6dd87",
"assets/packages/flutter_osm_plugin/assets/dynamic-styles.yaml": "0ee8b2f249be023fb6cb4e55d5961959",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_osm_web/src/asset/map.html": "1d48021f2a0455466f86649b4e828a69",
"assets/packages/flutter_osm_web/src/asset/osm_interop.js": "8ac7e3bf937ae11469e21265b15709eb",
"assets/packages/flutter_osm_web/src/asset/map.js": "9ca74acd5f94ced7366fa719168d7b51",
"assets/packages/routing_client_dart/src/assets/de.json": "75f261f48361c6ad0f987d669dc279be",
"assets/packages/routing_client_dart/src/assets/en.json": "006f10a887beeb7207fc58db61426a4e",
"assets/packages/routing_client_dart/src/assets/es.json": "006019fa2630f52d73040764ad461fab",
"assets/packages/routing_client_dart/src/assets/ar.json": "45e29bd513d54467b03fe5c10c85cc14",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b745c7ac8533e03310edb544de03a749",
"assets/fonts/MaterialIcons-Regular.otf": "aa8f7ab07b1f56a812040ece0e5015cc",
"assets/assets/svg/svg_profiles.svg": "3ec3499be4548ae30b34dcf0b65b8cff",
"assets/assets/svg/svg_arrow.svg": "30c8390ff7c5f8ebd411f639a342024b",
"assets/assets/svg/svg_notifikasi.svg": "ce1b6f33447003e3682ec16454725f41",
"assets/assets/svg/svg_pesanan.svg": "03d800a352b0774d65c38966b6180005",
"assets/assets/svg/svg_arrow_down.svg": "e33cf2945c3ca0c004338232390e1563",
"assets/assets/svg/svg_list_menu.svg": "1fb0f8978f33003d417a65558c729329",
"assets/assets/svg/ic_dialog_success.svg": "680049931269dded72179756476646d6",
"assets/assets/svg/svg_home.svg": "508cb8292a116b914638d77e3fd08ede",
"assets/assets/svg/svg_shop.svg": "930f242c4029d84684c8db4b29c9946a",
"assets/assets/svg/svg_personal_card.svg": "b78a012d8ed88561d14bdb1e6f7aab29",
"assets/assets/svg/ic_dialog_cross.svg": "85597ea9bc9d29c3c451cd11509c15d7",
"assets/assets/svg/svg_card.svg": "8e4a4204a45d6e24b8fcdf5f1086b316",
"assets/assets/svg/ic_dialog_question.svg": "1a4c52256feb60b42518c94fa7d8f2c7",
"assets/assets/svg/svg_key.svg": "99468577fa65128f6a705501194a6380",
"assets/assets/svg/svg_produk.svg": "4f941a0ba28dfac5ee2450b8c8d145df",
"assets/assets/svg/svg_message.svg": "96a4389c4df2707aade877eff1e50081",
"assets/assets/svg/svg_apudsi.svg": "63eebde1431ad91e20d2e0e673ba075a",
"assets/assets/svg/svg_profile.svg": "0da4a0fcc23fd37bb1d0486244ff2fcc",
"assets/assets/svg/svg_arrow_up.svg": "c321bbb4a81f3a3aed3be43cba107af6",
"assets/assets/image/background_onboarding.jpg": "5d6a8007a74ff4e360aadec2e3a2ec5e",
"assets/assets/image/img_apps.png": "facb62c903923d44beed8577bfac0caf",
"assets/assets/image/img_apps_white.png": "de5cfd2165c2e6ded5f80863208866cc",
"assets/assets/image/img_background_profile.png": "176991819f9369ada1fe420f8e1f8f0b",
"assets/assets/icon/ic_bri.png": "813068cb339bd73ff8f17aa3196fcc9d",
"assets/assets/icon/ic_sertifikasi.png": "a7366e5bad40eeb2cdcf847c58953d34",
"assets/assets/icon/ic_location.png": "657d9adc0fe66b23b47ceb3b15568b1d",
"assets/assets/icon/ic_agen.png": "00e50edfb6b076483c33a3dd2a9aa3f2",
"assets/assets/icon/ic_link.png": "f922f4b95647095b3a71650b91b0cfa8",
"assets/assets/icon/ic_layanan.png": "699408f19eafd148320313ffb8949d15",
"assets/assets/icon/ic_cooming_soon.png": "792b4a53f9d1506444308318200ec8ce",
"assets/assets/icon/ic_share_content.png": "17bba5d232cee4246e73217fe6e714c7",
"assets/assets/icon/ic_copy.png": "8daabeb1d38d1a936077b3ed8334dbcf",
"assets/assets/icon/ic_apudsi.png": "2f868e6aa99119625429a94d8501021f",
"assets/assets/icon/ic_gallery.png": "45f9aa286249fe09ef2548ec364c2a44",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
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
