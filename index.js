'use strict';

/**
 * Function to parse the URL on the Utm label
 */

function getUrlParams(urlVars) {
  if (urlVars == undefined || false || ' ')
    urlVars = window.location.search;

  let VarArray = [],
    valueAndKey = [],
    resultArray = {};

  /**
   * Parse Url to utm params
   */

  VarArray = (urlVars.substr(1)).split('&');
  if (VarArray[0] == "") return false;

  VarArray.forEach(function (element, i) {
    valueAndKey = VarArray[i].split('='),
      resultArray[valueAndKey[0]] = valueAndKey[1];
  });

  if (JSON.stringify(resultArray) === '{}') return false;

  return resultArray;

}

let utmArray = getUrlParams();


/**
 * Function that translates a number into a string
 */

function is_float(mixed_var) {
  return +mixed_var === mixed_var && (!isFinite(mixed_var) || !!(mixed_var % 1));
}

function numberFormat(number, decimals, dec_point, thousands_sep) {
  let i, j, kw, kd, km;

  if (isNaN(decimals = Math.abs(decimals))) {
    decimals = 2;
  }
  if (dec_point == undefined) {
    dec_point = ",";
  }
  if (thousands_sep == undefined) {
    thousands_sep = ".";
  }

  if (!is_float(number))
    decimals = 0;

  i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

  if ((j = i.length) > 3) {
    j = j % 3;
  } else {
    j = 0;
  }

  km = (j ? i.substr(0, j) + thousands_sep : "");
  kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
  kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");

  return km + kw + kd;
}

let numFormat = numberFormat(1023.56);
console.log(numFormat)

/**
 * Function to add a class when scrolling
 */

function scrollAnimateSimple() {
  let a = $('.js-scroll')
  let h = $(window).height()
  let thr = parseInt(h * 0.5)
  let s = 0
  a.each(function () {
    let block = $(this),
      blockHeight = block.outerHeight(),
      blockPos = block.offset().top - s;
    if (scrolledTo + h - thr > blockPos - s) {
      if (!block.hasClass('animate-in')) {
        block.addClass('animate-in');
      }
    }
  });
}