#!/usr/bin/node
const myPackage = require('../package.json');

const myVersion = myPackage.version;
const myModule = myPackage.name;
const myBuildDate = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
const res = `export const MODULE_NAME = '${myModule}';
export const MODULE_VERSION = '${myVersion}';
export const BUILD_DATE = '${myBuildDate}';`;

console.log(res);
