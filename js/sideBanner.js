const sideBannerList = document.querySelectorAll(
  " .side-banner-wrap .side-banner"
);
const bgColorList = ["#edf4ff", "#def9fe", "#fff6de"];

sideBannerList.forEach((sideBanner, index) => {
  sideBanner.style.backgroundColor = bgColorList[index];
});

//// 위와 동일한 js
// const sideBannerWrap = document.querySelector(".side-banner-wrap");
// const sideBannerList = sideBannerWrap.querySelectorAll(".side-banner");
// const style = {
//  bgColorList: ["#edf4ff", "#def9fe", "#fff6de"],
// };
// // console.log(sideBannerList);

// sideBannerList.forEach((sideBanner, index) => {
//  sideBanner.style.backgroundColor = style.bgColorList[index];
// });
