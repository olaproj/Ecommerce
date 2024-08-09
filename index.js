const countPanel = document.getElementById("count-panel");

const add = document.getElementById("add");

const remove = document.getElementById("remove");

const iconCartNumber = document.getElementById("icon-cart-number");

const addToCartBtn = document.getElementById("add-to-cart");

const warning = document.getElementById("warning");

const insideCart = document.getElementById("inside-cart");

const iconCart = document.getElementById("icon-cart");

const cartIsFill = document.getElementById("cart-is-fill");

const cartIsEmpty = document.getElementById("cart-is-empty");

const insideCartProductHowMany = document.getElementById(
  "inside-cart-product-howmany"
);

const insideCartProductCalculatedPrice = document.getElementById(
  "inside-cart-product-calculated-price"
);

const iconDelete = document.getElementById("icon-delete");

const productMainİmg = document.getElementById("product-main-img");

const popUpBackground = document.getElementById("pop-up-background");

const mainSlide = document.getElementById("main-slide");

const iconClose = document.getElementById("icon-close");

const body = document.querySelectorAll("body");

const iconPreviousBtn = document.getElementById("icon-previous-btn");

const iconNextBtn = document.getElementById("icon-next-btn");

const slideImg1 = document.getElementById("slide-img-1");

const slideImg2 = document.getElementById("slide-img-2");

const slideImg3 = document.getElementById("slide-img-3");

const slideImg4 = document.getElementById("slide-img-4");

const popUpThumbnail1 = document.getElementById("pop-up-thumbnail-1");

const popUpThumbnail2 = document.getElementById("pop-up-thumbnail-2");

const popUpThumbnail3 = document.getElementById("pop-up-thumbnail-3");

const popUpThumbnail4 = document.getElementById("pop-up-thumbnail-4");

let counter = 0;

let inCart = 0;

const slideArray = [slideImg1, slideImg2, slideImg3, slideImg4];

add.addEventListener("click", countPlus);
remove.addEventListener("click", countRemove);
addToCartBtn.addEventListener("click", addCart);
iconCart.addEventListener("click", openInsideCart);
iconDelete.addEventListener("click", emptyCart);
productMainİmg.addEventListener("click", popUp);
popUpBackground.addEventListener("click", exitPopUp);
iconClose.addEventListener("click", exitPopUp);
iconPreviousBtn.addEventListener("click", previous);
iconNextBtn.addEventListener("click", next);
popUpThumbnail1.addEventListener("click", thumbnailSelect1);
popUpThumbnail2.addEventListener("click", thumbnailSelect2);
popUpThumbnail3.addEventListener("click", thumbnailSelect3);
popUpThumbnail4.addEventListener("click", thumbnailSelect4);

function countPlus() {
  if (counter < 20) {
    counter++;
    countPanel.innerHTML = counter;
  } else if (counter >= 20) {
    warning.style.display = "inline";
  }
}

function countRemove() {
  if (counter > 0) {
    counter--;
    countPanel.innerHTML = counter;
  }
}
function addCart() {
  if (counter > 0) {
    inCart = counter + inCart;
    iconCartNumber.innerHTML = inCart;
    iconCartNumber.style.display = "inline";
    insideCartProductHowMany.innerHTML = `x ${inCart}`;
    insideCartProductCalculatedPrice.innerHTML = ` $${125 * inCart} `;
    insideCart.style.display = "none";
    countPanel.innerHTML = "0";
    counter = 0;
  }
}

function cartFill() {
  if (inCart > 0) {
    cartIsFill.style.display = "block";
  }
}

function openInsideCart() {
  if (inCart > 0) {
    cartIsFill.style.display = "block";
    cartIsEmpty.style.display = "none";
  } else if (parseInt(inCart) == 0) {
    cartIsEmpty.style.display = "block";
    cartIsFill.style.display = "none";
  }
  if (insideCart.style.display == "none") {
    insideCart.style.display = "block";
  } else {
    insideCart.style.display = "none";
  }
}

function emptyCart() {
  if (inCart > 0) {
    cartIsEmpty.style.display = "none";
    cartIsFill.style.display = "none";
    inCart = 0;
    iconCartNumber.innerHTML = 0;
    openInsideCart();
  }
}

function popUp() {
  popUpBackground.style.display = "block";
  mainSlide.style.display = "block";
  insideCart.style.display = "none";
  slideImg1.style.display = "block";
}

function exitPopUp() {
  popUpBackground.style.display = "none";
  mainSlide.style.display = "none";
  slideImg1.style.display = "none";
  slideImg2.style.display = "none";
  slideImg3.style.display = "none";
  slideImg4.style.display = "none";
}

function next() {
  if (slideImg1.style.display == "block") {
    slideImg1.style.display = "none";
    slideImg2.style.display = "block";
    popUpThumbnail1.classList.remove("pop-active");
    popUpThumbnail2.classList.add("pop-active");
  } else if (slideImg2.style.display == "block") {
    slideImg2.style.display = "none";
    slideImg3.style.display = "block";
    popUpThumbnail2.classList.remove("pop-active");
    popUpThumbnail3.classList.add("pop-active");
  } else if (slideImg3.style.display == "block") {
    slideImg3.style.display = "none";
    slideImg4.style.display = "block";
    popUpThumbnail3.classList.remove("pop-active");
    popUpThumbnail4.classList.add("pop-active");
  } else if (slideImg4.style.display == "block") {
    slideImg4.style.display = "none";
    slideImg1.style.display = "block";
    popUpThumbnail4.classList.remove("pop-active");
    popUpThumbnail1.classList.add("pop-active");
  }
}

function previous() {
  if (slideImg1.style.display == "block") {
    slideImg1.style.display = "none";
    slideImg4.style.display = "block";
    popUpThumbnail1.classList.remove("pop-active");
    popUpThumbnail4.classList.add("pop-active");
  } else if (slideImg4.style.display == "block") {
    slideImg4.style.display = "none";
    slideImg3.style.display = "block";
    popUpThumbnail4.classList.remove("pop-active");
    popUpThumbnail3.classList.add("pop-active");
  } else if (slideImg3.style.display == "block") {
    slideImg3.style.display = "none";
    slideImg2.style.display = "block";
    popUpThumbnail3.classList.remove("pop-active");
    popUpThumbnail2.classList.add("pop-active");
  } else if (slideImg2.style.display == "block") {
    slideImg2.style.display = "none";
    slideImg1.style.display = "block";
    popUpThumbnail2.classList.remove("pop-active");
    popUpThumbnail1.classList.add("pop-active");
  }
}

function thumbnailSelect1() {
  slideImg1.style.display = "block";
  slideImg2.style.display = "none";
  slideImg3.style.display = "none";
  slideImg4.style.display = "none";

  popUpThumbnail1.classList.add("pop-active");
  popUpThumbnail2.classList.remove("pop-active");
  popUpThumbnail3.classList.remove("pop-active");
  popUpThumbnail4.classList.remove("pop-active");
}
function thumbnailSelect2() {
  slideImg2.style.display = "block";
  slideImg1.style.display = "none";
  slideImg3.style.display = "none";
  slideImg4.style.display = "none";

  popUpThumbnail2.classList.add("pop-active");
  popUpThumbnail1.classList.remove("pop-active");
  popUpThumbnail3.classList.remove("pop-active");
  popUpThumbnail4.classList.remove("pop-active");
}
function thumbnailSelect3() {
  slideImg3.style.display = "block";
  slideImg1.style.display = "none";
  slideImg2.style.display = "none";
  slideImg4.style.display = "none";

  popUpThumbnail3.classList.add("pop-active");
  popUpThumbnail1.classList.remove("pop-active");
  popUpThumbnail2.classList.remove("pop-active");
  popUpThumbnail4.classList.remove("pop-active");
}
function thumbnailSelect4() {
  slideImg4.style.display = "block";
  slideImg1.style.display = "none";
  slideImg2.style.display = "none";
  slideImg3.style.display = "none";

  popUpThumbnail4.classList.add("pop-active");
  popUpThumbnail1.classList.remove("pop-active");
  popUpThumbnail2.classList.remove("pop-active");
  popUpThumbnail3.classList.remove("pop-active");
}
