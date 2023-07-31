import groupCraneSrc from '#/group-images/group-crane.svg';
import groupGhopperSrc from '#/group-images/group-mantis.svg';
import groupMonkeySrc from '#/group-images/group-monkey.svg';
import groupTigerSrc from '#/group-images/group-tigress.svg';
import groupViperSrc from '#/group-images/group-viper.svg';

import eWindSrc from '#/elemental-images/wind.svg';
import eEarthSrc from '#/elemental-images/earth.svg';
import eFireSrc from '#/elemental-images/fire.svg';
import eFlowerSrc from '#/elemental-images/flower.svg';
import eThunderSrc from '#/elemental-images/thunder.svg';
import eWaterSrc from '#/elemental-images/water.svg';

export const groupImages: {[key: string]: string;}  = {
  tigress: groupTigerSrc,
  monkey: groupMonkeySrc,
  crane: groupCraneSrc,
  mantis: groupGhopperSrc,
  viper: groupViperSrc,
};

export const groupName: {[key: string]: string;} = {
  tigress: 'พยัคฆ์',
  monkey: 'วานร',
  crane: 'กระเรียน',
  mantis: 'ตั๊กแตน',
  viper: 'อสรพิษ',
};

export const elementalName: {[key: string]: string;} = {
  water: 'วารี',
  fire: 'อัคคี',
  earth: 'ขุนเขา',
  flower: 'บุปผา',
  thunder: 'อัสนี',
  wind: 'พระพราย',
};

export const elementalImages:{[key: string]: string;} = {
  water: eWaterSrc,
  fire: eFireSrc,
  earth: eEarthSrc,
  flower: eFlowerSrc,
  thunder: eThunderSrc,
  wind: eWindSrc,
};
