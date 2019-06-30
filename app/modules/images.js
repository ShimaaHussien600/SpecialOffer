/* eslint-disable global-require */
export const Requires = {
  bg_main: require('../assets/image/bg_main.png'),
  bg_account: require('../assets/image/bg_account.png'),
  logo: require('../assets/image/logo.png'),
  logo2: require('../assets/image/logo2.png'),
  logoShadow: require('../assets/image/Group-1.png'),
  alarm: require('../assets/image/alarm.png'),
  menuButton: require('../assets/image/menu-button-of-three-horizontal-lines.png'),
  lamp: require('../assets/image/lamp.png'),
  mobilePhone: require('../assets/image/mobile-phone.png'),
  restaurant: require('../assets/image/restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle.png'),
  notebook: require('../assets/image/notebook-and-mouse-cursor.png'),
  milk: require('../assets/image/milk.png'),
  car: require('../assets/image/sedan-car-model.png'),
  tshirt: require('../assets/image/t-shirt-black-silhouette.png'),
  Union: require('../assets/image/Union-4.png'),
  backIcon: require('../assets/image/arrow-in-circle-point-to-up.png'),
  mailbox: require('../assets/image/mailbox.png'),
  phoneContact: require('../assets/image/phone-contact.png'),
  facebook: require('../assets/image/facebook.png'),
  instagram: require('../assets/image/instagram.png'),
  twitter: require('../assets/image/twitter.png'),
  logoutWhite: require('../assets/image/logout-1.png'),
  logoutRed: require('../assets/image/logout.png'),
  settings: require('../assets/image/settings-work-tool.png'),
  home: require('../assets/image/home.png'),
  trophy: require('../assets/image/trophy.png'),
  userAvatar: require('../assets/image/user-avatar-main-picture.png'),
  verifiedText: require('../assets/image/verified-text-paper.png'),
  alignRight: require('../assets/image/align-to-right.png'),
  contact: require('../assets/image/contact.png'),
  star: require('../assets/image/star.png'),
  agreement: require('../assets/image/undraw_agreement_aajr.png'),
  contactUs: require('../assets/image/undraw_contact_us_-1.png'),
  intro1: require('../assets/image/intro_1.png'),
  intro2: require('../assets/image/intro_2.png'),
  intro3: require('../assets/image/intro_3.png'),
  forwardIcon: require('../assets/image/arrow-in-circle.png'),
  addImage: require('../assets/image/add.png'),
  check: require('../assets/image/check.png'),
  newProduct: require('../assets/image/new-product.png'),
  sad: require('../assets/image/sad.png'),
  coins: require('../assets/image/coins.png'),
  search: require('../assets/image/search.png'),
  locationPin: require('../assets/image/locationPin.png')
};

export const GetPhoto = (name) => {
  return Requires[name];
};