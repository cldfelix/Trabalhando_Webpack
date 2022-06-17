import image from "../image/yinyang.png";

export default () => {
  const element = document.createElement("img");
  element.src = image;
  return element;
};