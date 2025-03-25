import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  { id: 1, name: "Snake Plant", category: "indoor", image: p1_img, new_price: 800, old_price: 1000 },
  { id: 2, name: "Areca Palm", category: "indoor", image: p2_img, new_price: 1200, old_price: 1500 },
  { id: 3, name: "ZZ Plant", category: "indoor", image: p3_img, new_price: 900, old_price: 1100 },
  { id: 4, name: "Peace Lily", category: "indoor", image: p4_img, new_price: 700, old_price: 950 },
  { id: 5, name: "Spider Plant", category: "indoor", image: p5_img, new_price: 600, old_price: 850 },
  { id: 6, name: "Money Plant", category: "indoor", image: p6_img, new_price: 500, old_price: 700 },
  { id: 7, name: "Jade Plant", category: "indoor", image: p7_img, new_price: 650, old_price: 900 },
  { id: 8, name: "Rubber Plant", category: "indoor", image: p8_img, new_price: 1100, old_price: 1300 },
  { id: 9, name: "Croton", category: "outdoor", image: p9_img, new_price: 700, old_price: 950 },
  { id: 10, name: "Aloe Vera", category: "outdoor", image: p10_img, new_price: 400, old_price: 600 },
  { id: 11, name: "Lavender", category: "outdoor", image: p11_img, new_price: 750, old_price: 1000 },
  { id: 12, name: "Bougainvillea", category: "outdoor", image: p12_img, new_price: 900, old_price: 1200 },
  { id: 13, name: "Chrysanthemum", category: "outdoor", image: p13_img, new_price: 650, old_price: 850 },
  { id: 14, name: "Hibiscus", category: "outdoor", image: p14_img, new_price: 800, old_price: 1000 },
  { id: 15, name: "Jasmine", category: "outdoor", image: p15_img, new_price: 750, old_price: 950 },
  { id: 16, name: "Rosemary", category: "outdoor", image: p16_img, new_price: 600, old_price: 800 },
  { id: 17, name: "Daisy", category: "flowering", image: p17_img, new_price: 500, old_price: 700 },
  { id: 18, name: "Rose", category: "flowering", image: p18_img, new_price: 900, old_price: 1100 },
  { id: 19, name: "Marigold", category: "flowering", image: p19_img, new_price: 400, old_price: 600 },
  { id: 20, name: "Petunia", category: "flowering", image: p20_img, new_price: 600, old_price: 800 },
  { id: 21, name: "Orchid", category: "flowering", image: p21_img, new_price: 1200, old_price: 1500 },
  { id: 22, name: "Tulip", category: "flowering", image: p22_img, new_price: 1300, old_price: 1600 },
  { id: 23, name: "Sunflower", category: "flowering", image: p23_img, new_price: 700, old_price: 950 },
  { id: 24, name: "Lily", category: "flowering", image: p24_img, new_price: 1100, old_price: 1400 },
  { id: 25, name: "Begonia", category: "flowering", image: p25_img, new_price: 750, old_price: 1000 },
  { id: 26, name: "Geranium", category: "flowering", image: p26_img, new_price: 800, old_price: 1050 },
  { id: 27, name: "Pansy", category: "flowering", image: p27_img, new_price: 500, old_price: 700 },
  { id: 28, name: "Dahlia", category: "flowering", image: p28_img, new_price: 900, old_price: 1150 },
  { id: 29, name: "Fern", category: "indoor", image: p29_img, new_price: 700, old_price: 900 },
  { id: 30, name: "Boston Fern", category: "indoor", image: p30_img, new_price: 750, old_price: 950 },
  { id: 31, name: "Philodendron", category: "indoor", image: p31_img, new_price: 850, old_price: 1100 },
  { id: 32, name: "Dieffenbachia", category: "indoor", image: p32_img, new_price: 950, old_price: 1200 },
  { id: 33, name: "Anthurium", category: "indoor", image: p33_img, new_price: 1100, old_price: 1350 },
  { id: 34, name: "Coleus", category: "outdoor", image: p34_img, new_price: 650, old_price: 850 },
  { id: 35, name: "Agave", category: "outdoor", image: p35_img, new_price: 700, old_price: 950 },
  { id: 36, name: "Verbena", category: "outdoor", image: p36_img, new_price: 800, old_price: 1000 },
];

export default all_product;
