/* ================================================================
 * ant-lite by xdf(xudafeng[at]126.com)
 *
 * first created at : Tue Dec 22 2015 00:25:50 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright  xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

const path = require('path');
const util = require('xutil');

if (util.platform.isWindows) {
  const ANT_HOME = process.env.ANT_HOME;

  if (ANT_HOME) {
    exports.binPath = path.join(process.env.ANT_HOME, 'bin', 'ant');
  } else {
    console.log('please set ANT_HOME');
  }
} else {
  exports.binPath = path.join(__dirname, 'exec', 'ant', 'bin', 'ant');
}
