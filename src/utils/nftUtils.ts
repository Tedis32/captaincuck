import globals from "../globals";
import Moralis from "moralis";
import { ethers } from "ethers";
import TwentyFourHourDataNFTScan, { HotNFtsNFTScan } from "../pages/DummyNFTScanData";

export function getHottestNFTsByVolume() {
  return [
    {
      "rank": 1,
      "collection_title": "Bored Ape Yacht Club",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x2f1ef58880d01489b8d2c9ba759cf7b14db4ee8a55fd6e6b222ad050e7e00fb0.png",
      "volume_usd": "3400349.0825",
      "volume_24hr_perecent_change": "3.64",
      "floor_price_usd": "55553.586528",
      "floor_price_24hr_percent_change": "-1.83",
      "average_price_usd": "28816.517648305085"
    },
    {
      "rank": 2,
      "collection_title": "CryptoPunks",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x8e4d149625faffbdb3b63eb36668a4b470714c0e6c765e66200095a4ccb0234e.png",
      "volume_usd": "842830.598",
      "volume_24hr_perecent_change": "778.91",
      "floor_price_usd": "89528.90879999999",
      "floor_price_24hr_percent_change": "-0.74",
      "average_price_usd": "105353.82475"
    },
    {
      "rank": 3,
      "collection_title": "Mutant Ape Yacht Club",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0xab57ba0f4ce4424e60c477627f6551790b8946d45720240a3d258956e436f2e5.png",
      "volume_usd": "825017.68069512",
      "volume_24hr_perecent_change": "-18.71",
      "floor_price_usd": "10575.74865",
      "floor_price_24hr_percent_change": "-1.79",
      "average_price_usd": "10855.49579862"
    },
    {
      "rank": 4,
      "collection_title": "Azuki",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0xe4d28d878c236d10edf2908765ef0425b26fddbcc20be2e14a07da1151b32eab.png",
      "volume_usd": "581071.639481",
      "volume_24hr_perecent_change": "36.61",
      "floor_price_usd": "9513.520384",
      "floor_price_24hr_percent_change": "-1.05",
      "average_price_usd": "21521.17183262963"
    },
    {
      "rank": 5,
      "collection_title": "DeGods",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x382d6b6fb948fcf87787040b288ae8c5052bc73584525a7a58be8d890b0c872b.png",
      "volume_usd": "402855.961604",
      "volume_24hr_perecent_change": "-28.22",
      "floor_price_usd": "15649.630847999999",
      "floor_price_24hr_percent_change": "2.86",
      "average_price_usd": "7460.2955852592595"
    },
    {
      "rank": 6,
      "collection_title": "Pudgy Penguins",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0xe360cda21b2077e46c594d3a1352cdf15515e35e386f451adf2329c81de31083.png",
      "volume_usd": "276464.82401208",
      "volume_24hr_perecent_change": "32.3",
      "floor_price_usd": "7995.592",
      "floor_price_24hr_percent_change": "-0.18",
      "average_price_usd": "8918.220129421936"
    },
    {
      "rank": 7,
      "collection_title": "The Captainz",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x2106c9d5ea6b1d0a5b5ad2b635be439d144c638bed56e92a8747c27deef0efbe.png",
      "volume_usd": "244441.98428",
      "volume_24hr_perecent_change": "-11.9",
      "floor_price_usd": "9425.315416000001",
      "floor_price_24hr_percent_change": "-1.27",
      "average_price_usd": "10627.91236"
    },
    {
      "rank": 8,
      "collection_title": "0N1 Force",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x705a34fc70deaa986db31c72550cd58e754af3190bf88a9afa2bf73a101b76fc.png",
      "volume_usd": "236230.18526058",
      "volume_24hr_perecent_change": "35.97",
      "floor_price_usd": "1789.711",
      "floor_price_24hr_percent_change": "-1.08",
      "average_price_usd": "1889.84148208464"
    },
    {
      "rank": 9,
      "collection_title": "Moonbirds",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x9fef109291e3dc223eddb4ca410addd7740fcce05f68629e19496be3144dd83e.png",
      "volume_usd": "234926.00851996",
      "volume_24hr_perecent_change": "-1.41",
      "floor_price_usd": "2985.790976",
      "floor_price_24hr_percent_change": "-6.65",
      "average_price_usd": "3050.987123635844"
    },
    {
      "rank": 10,
      "collection_title": "Art Blocks Curated",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x30475f1b1eaf95650a1d7330e413ba1a0d064f9c6c01373ebda63beb3a28a4c9.png",
      "volume_usd": "234164.7662906",
      "volume_24hr_perecent_change": "110.03",
      "floor_price_usd": "280.128",
      "floor_price_24hr_percent_change": "-0.74",
      "average_price_usd": "4336.384560937037"
    },
    {
      "rank": 11,
      "collection_title": "More Loot",
      "collection_image": null,
      "volume_usd": "186725",
      "volume_24hr_perecent_change": "0",
      "floor_price_usd": "6.338904",
      "average_price_usd": "186725"
    },
    {
      "rank": 12,
      "collection_title": "Yakuza Pandas",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0xca65c980bc0b708771e7e95af95dab60af10d7585c6cf84c06cea8cfcca95d52.png",
      "volume_usd": "136492.1270007",
      "volume_24hr_perecent_change": "12.82",
      "floor_price_usd": "647.5091",
      "floor_price_24hr_percent_change": "-42.015",
      "average_price_usd": "1516.5791888966667"
    },
    {
      "rank": 13,
      "collection_title": "Opepen Edition",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x53be39b9728b96976b76f27b2b64be6902d7641b0814ab05146891f3cf2aacc8.png",
      "volume_usd": "128719.11186936",
      "volume_24hr_perecent_change": "-39.74",
      "floor_price_usd": "1055.7900319999999",
      "floor_price_24hr_percent_change": "0.69",
      "average_price_usd": "1300.1930491854546"
    },
    {
      "rank": 14,
      "collection_title": "Azuki Elementals",
      "collection_image": null,
      "volume_usd": "119598.65423224",
      "volume_24hr_perecent_change": "31.19",
      "floor_price_usd": "1137.31968",
      "floor_price_24hr_percent_change": "-4.05",
      "average_price_usd": "1314.270925629011"
    },
    {
      "rank": 15,
      "collection_title": "Bored Ape Kennel Club",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x9c2928468b4b170ed9eb8cc8568a6d507d54ec703c6292994000fd12558e5522.png",
      "volume_usd": "115514.576591",
      "volume_24hr_perecent_change": "-31.78",
      "floor_price_usd": "4127.956800000001",
      "floor_price_24hr_percent_change": "-2.07",
      "average_price_usd": "4125.520592535714"
    },
    {
      "rank": 16,
      "collection_title": "Milady Maker",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x416de8becedaaa3daebdb747c277dad07164f77644a9422bdab90aa1f0a15d3a.png",
      "volume_usd": "109912.38978",
      "volume_24hr_perecent_change": "13.47",
      "floor_price_usd": "5095.334309999999",
      "floor_price_24hr_percent_change": "1.34",
      "average_price_usd": "5233.923322857143"
    },
    {
      "rank": 17,
      "collection_title": "Bloxies",
      "collection_image": null,
      "volume_usd": "103707.57027348175",
      "volume_24hr_perecent_change": "-25.5",
      "floor_price_usd": "27.904349999999997",
      "floor_price_24hr_percent_change": "69.02",
      "average_price_usd": "162.5510505853946"
    },
    {
      "rank": 18,
      "collection_title": "CLONE X - X TAKASHI MURAKAMI",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x111921e25048e2d4afeca0c9741820c59294233dc245d1a0c8f3ba91c0bf0b8d.png",
      "volume_usd": "92279.829558",
      "volume_24hr_perecent_change": "-7.62",
      "floor_price_usd": "3081.221248",
      "floor_price_24hr_percent_change": "-1.07",
      "average_price_usd": "3549.2242137692306"
    },
    {
      "rank": 19,
      "collection_title": "Azuki Elemental Beans",
      "collection_image": null,
      "volume_usd": "82364.379112",
      "volume_24hr_perecent_change": "-9.83",
      "floor_price_usd": "1488.232",
      "floor_price_24hr_percent_change": "-6.43",
      "average_price_usd": "2287.899419777778"
    },
    {
      "rank": 20,
      "collection_title": "CryptoKitties",
      "collection_image": null,
      "volume_usd": "82011.424015",
      "volume_24hr_perecent_change": "10349.16",
      "average_price_usd": "2000.2786345121951"
    },
    {
      "rank": 21,
      "collection_title": "Otherdeed for Otherside",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x81953c16ad5b710b37110c0768e2dc1bd65fc5f8f73b8a6dc8579045f04cba2c.png",
      "volume_usd": "77403.75059172",
      "volume_24hr_perecent_change": "34.58",
      "floor_price_usd": "1157.8624",
      "floor_price_24hr_percent_change": "2.74",
      "average_price_usd": "1646.8883104621277"
    },
    {
      "rank": 22,
      "collection_title": "HV-MTL",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x5baa3e31854d5c627eae6ada38f16c0ec5d29a589b61129bb5fbc6cb7fc125e6.png",
      "volume_usd": "75333.27635744595",
      "volume_24hr_perecent_change": "193.31",
      "floor_price_usd": "1116.029952",
      "floor_price_24hr_percent_change": "-2.43",
      "average_price_usd": "1421.382572781999"
    },
    {
      "rank": 23,
      "collection_title": "Lil Pudgys",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x8f674ce72825321cd7958e69874a84fa04eecb9cab61c3a0679b044f3ce99d2e.png",
      "volume_usd": "67694.1490170316",
      "volume_24hr_perecent_change": "36.9",
      "floor_price_usd": "631.6517680000001",
      "floor_price_24hr_percent_change": "1.06",
      "average_price_usd": "632.655598290015"
    },
    {
      "rank": 24,
      "collection_title": "OnChainMonkey",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x5cb6eec793a6c0ba653c110178aef52c985cfde5aa6f09090116c17fbeafdd2c.png",
      "volume_usd": "65549.73154701",
      "volume_24hr_perecent_change": "405.6",
      "floor_price_usd": "2969.3568",
      "floor_price_24hr_percent_change": "22.34",
      "average_price_usd": "2521.1435210388463"
    },
    {
      "rank": 25,
      "collection_title": "Meebits",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x64f3d40b46e6c875c8bbdcf2f845d29a68e75fa42f450df9da18b16e0fe1b4db.png",
      "volume_usd": "64538.52598708",
      "volume_24hr_perecent_change": "27.42",
      "floor_price_usd": "2026.6036560000002",
      "floor_price_24hr_percent_change": "-1.61",
      "average_price_usd": "2081.887935067097"
    },
    {
      "rank": 26,
      "collection_title": "QQL Mint Pass (official)",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0xe13d9d26b310318c05255c88215b3e3b4bee2c8bc51ded3b5ba65c648fe7826a.png",
      "volume_usd": "59396.287",
      "volume_24hr_perecent_change": "133.78",
      "floor_price_usd": "12272.304",
      "floor_price_24hr_percent_change": "-24.8",
      "average_price_usd": "11879.2574"
    },
    {
      "rank": 27,
      "collection_title": "Nouns",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x857500d4503024ba3f6b1a43efba49e69f89b877bd6ba3f3d48c9fa3287170cc.png",
      "volume_usd": "57760.4152",
      "volume_24hr_perecent_change": "0.97",
      "floor_price_usd": "61947.65699999999",
      "floor_price_24hr_percent_change": "6.79",
      "average_price_usd": "57760.4152"
    },
    {
      "rank": 28,
      "collection_title": "Doomsday: Settlers of the Wasteland",
      "collection_image": null,
      "volume_usd": "56203.2",
      "volume_24hr_perecent_change": "0",
      "floor_price_usd": "125570.713197",
      "average_price_usd": "56203.2"
    },
    {
      "rank": 29,
      "collection_title": "Supreme Kong",
      "collection_image": null,
      "volume_usd": "55390.18980144",
      "volume_24hr_perecent_change": "25.85",
      "floor_price_usd": "2147.274496",
      "floor_price_24hr_percent_change": "18.05",
      "average_price_usd": "1910.0065448772414"
    },
    {
      "rank": 30,
      "collection_title": "Something Official",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x0a6337f8ef7bb7b3eff42a67998b686747a50e12ac14ef7b9347f2210a225d36.png",
      "volume_usd": "47423.05686695903",
      "volume_24hr_perecent_change": "49.12",
      "floor_price_usd": "733.748608",
      "average_price_usd": "790.3842811159839"
    },
    {
      "rank": 31,
      "collection_title": "Otherside Koda",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x663e8f8fedf891f76dde93bfe00ffa336651e495d62f494f01d8ad6dd58d755b.png",
      "volume_usd": "46183.877",
      "volume_24hr_perecent_change": "-7.22",
      "floor_price_usd": "7417.30616",
      "floor_price_24hr_percent_change": "0.38",
      "average_price_usd": "7697.312833333333"
    },
    {
      "rank": 32,
      "collection_title": "Doodles",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x38f5a801a6961317ba01924a012af44dc6e714304350ac41b0c752209de3eb01.png",
      "volume_usd": "43192.96510241",
      "volume_24hr_perecent_change": "14.79",
      "floor_price_usd": "2847.407744",
      "floor_price_24hr_percent_change": "-0.47",
      "average_price_usd": "2879.5310068273334"
    },
    {
      "rank": 33,
      "collection_title": "The Potatoz",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x6dd984647e7e2e410e3b1a10305b5c22ee401141a0062340cbb2d2f5f93293c4.png",
      "volume_usd": "42644.091308",
      "volume_24hr_perecent_change": "14.33",
      "floor_price_usd": "2857.7733359999997",
      "floor_price_24hr_percent_change": "-1.5",
      "average_price_usd": "2842.9394205333333"
    },
    {
      "rank": 34,
      "collection_title": "V1 CryptoPunks Wrapped",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0xd9ad83183da512dab28dee1ccf01ea46c35a8a1103ac081ecff6ac30a2a08c57.png",
      "volume_usd": "42009.80844",
      "volume_24hr_perecent_change": "67.94",
      "floor_price_usd": "5537.41232",
      "floor_price_24hr_percent_change": "2.14",
      "average_price_usd": "6001.401205714285"
    },
    {
      "rank": 35,
      "collection_title": "Otherdeed Expanded",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x78335b74dd66d0037afed5fc266f997b5b4b524d2a33c6bdfb585bfbe1cec688.png",
      "volume_usd": "41458.442001384",
      "volume_24hr_perecent_change": "-1.06",
      "floor_price_usd": "660.541824",
      "floor_price_24hr_percent_change": "-2.07",
      "average_price_usd": "1337.3690968188387"
    },
    {
      "rank": 36,
      "collection_title": "CryptoDickbutts",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x65e469439461e5ac0f23c59a3a317d45c04c7888e54e86a4e3fd057bc29bb721.png",
      "volume_usd": "40785.96514908",
      "volume_24hr_perecent_change": "-74.5",
      "floor_price_usd": "1283.6000999999999",
      "floor_price_24hr_percent_change": "-2.26",
      "average_price_usd": "1274.56141090875"
    },
    {
      "rank": 37,
      "collection_title": "Nakamigos",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0xb27ae89ba8904181d4aea7a066fb9842854ba64c9f64b50a6ac8f1e87c8c3c98.png",
      "volume_usd": "40040.66315311",
      "volume_24hr_perecent_change": "28.64",
      "floor_price_usd": "446.46959999999996",
      "floor_price_24hr_percent_change": "-0.84",
      "average_price_usd": "476.6745613465476"
    },
    {
      "rank": 38,
      "collection_title": "Axie Infinity",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x79b275370b3e7810e0efd4a51113b7ebb56e31055de41c2ebbba2dff0db9de78.png",
      "volume_usd": "36777.15399814816",
      "volume_24hr_perecent_change": "-17.8",
      "floor_price_usd": "1.87551",
      "average_price_usd": "4.540389382487428"
    },
    {
      "rank": 39,
      "collection_title": "ROTA Official",
      "collection_image": null,
      "volume_usd": "36427.4347603724",
      "volume_24hr_perecent_change": "0.17",
      "floor_price_usd": "444.46975999999995",
      "floor_price_24hr_percent_change": "-0.37",
      "average_price_usd": "467.0183943637487"
    },
    {
      "rank": 40,
      "collection_title": "Redacted Remilio Babies",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0xea9b84cf640da7a659bb705fddc3cdf6817c757f9797fcc3ef3abea946abcd36.png",
      "volume_usd": "36256.534241",
      "volume_24hr_perecent_change": "-14.09",
      "floor_price_usd": "1288.5888",
      "floor_price_24hr_percent_change": "-3.78",
      "average_price_usd": "1294.8762228928572"
    },
    {
      "rank": 41,
      "collection_title": "CyberKongz",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x93b42cdaeeec5209db467bfd59bc33ced215b29408a0965de109e08e3d042cbf.png",
      "volume_usd": "35155.3675",
      "volume_24hr_perecent_change": "1017.99",
      "floor_price_usd": "1456.6656",
      "floor_price_24hr_percent_change": "-10.71",
      "average_price_usd": "5859.227916666667"
    },
    {
      "rank": 42,
      "collection_title": "rektguy",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x64173f594c443829e794103b430c41ded4fe38d95741e4e064097c2125ef8722.png",
      "volume_usd": "33082.244804",
      "volume_24hr_perecent_change": "113.5",
      "floor_price_usd": "952.46848",
      "floor_price_24hr_percent_change": "5.27",
      "average_price_usd": "1140.7670622068965"
    },
    {
      "rank": 43,
      "collection_title": "KILLABEARS",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x7c9bfe8ebbb8c203884d52f3ac487bef7347a770b46fed2aef0ede7b9c46ab61.png",
      "volume_usd": "32609.22373024",
      "volume_24hr_perecent_change": "29.99",
      "floor_price_usd": "1673.496",
      "floor_price_24hr_percent_change": "2.54",
      "average_price_usd": "1716.2749331705263"
    },
    {
      "rank": 44,
      "collection_title": "The Llamas",
      "collection_image": null,
      "volume_usd": "31993.581355",
      "volume_24hr_perecent_change": "300.07",
      "floor_price_usd": "3619.25376",
      "floor_price_24hr_percent_change": "-17.5",
      "average_price_usd": "3554.8423727777777"
    },
    {
      "rank": 45,
      "collection_title": "The Grapes",
      "collection_image": null,
      "volume_usd": "30017.34345599",
      "volume_24hr_perecent_change": "4.01",
      "average_price_usd": "714.6986537140476"
    },
    {
      "rank": 46,
      "collection_title": "Kubz",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0xffb11dca9a4760a00e16b19ff4fef92731371de13a2b0660be36907573f340e8.png",
      "volume_usd": "29942.890926",
      "volume_24hr_perecent_change": "311.69",
      "floor_price_usd": "905.7752009999999",
      "floor_price_24hr_percent_change": "0.58",
      "average_price_usd": "907.3603310909091"
    },
    {
      "rank": 47,
      "collection_title": "ENS: Ethereum Name Service",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x580729a4ccd05f5a0494c0abec634c4df5d4a951795dfb40b4eb51a46167a4d6.png",
      "volume_usd": "28945.923779771423",
      "volume_24hr_perecent_change": "-46.73",
      "average_price_usd": "60.93878690478194"
    },
    {
      "rank": 48,
      "collection_title": "Laelaps Master Key",
      "collection_image": null,
      "volume_usd": "26529.08292",
      "volume_24hr_perecent_change": "6.94",
      "floor_price_usd": "2510.244",
      "floor_price_24hr_percent_change": "6.21",
      "average_price_usd": "2210.75691"
    },
    {
      "rank": 49,
      "collection_title": "MoonCats",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x4a95d40c62552c3797629517748e87f55b7e8fdaeaf8771b36af027d6a172c71.png",
      "volume_usd": "25343.05253699",
      "volume_24hr_perecent_change": "874.3",
      "floor_price_usd": "419.36076",
      "floor_price_24hr_percent_change": "-1.12",
      "average_price_usd": "378.2545154774627"
    },
    {
      "rank": 50,
      "collection_title": "RENGA by DirtyRobot",
      "collection_image": "https://market-data-images.s3.us-east-1.amazonaws.com/tokenImages/0x64eba93cf5f143708b75d90446d5f46fae03f2fbce87e911608bd0044d473072.png",
      "volume_usd": "25324.5039902",
      "volume_24hr_perecent_change": "0.82",
      "floor_price_usd": "497.772088",
      "floor_price_24hr_percent_change": "-5.8",
      "average_price_usd": "527.5938331291667"
    }
  ];
}

export function getNFTScan24HourByVolumeNFTs () {
  return TwentyFourHourDataNFTScan;
}
export function getTop4HottestNFTs () {
  return HotNFtsNFTScan;
}