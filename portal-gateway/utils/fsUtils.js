const fs = require('fs');
const path = require('path');


/**
 * 获取目录下(包括子目录)全部文件的绝对路径
 *
 * @param {string} dirPath 需要获取的目录路径
 * @param {array} ignore 可选。排除的目录
 * @returns {array} 返回 文件绝对路径 的列表
 */
function displayAllFile(dirPath, ignore = []) {
  const fileList = _readDir(dirPath);
  const ignoreObj = {};
  ignore.forEach(key => ignoreObj[key] = true);
  const rst = [];

  while (fileList.length) {
    const fileObj = fileList.shift();
    if (!ignoreObj[fileObj.name]) {
      const filedir = fileObj.absolute;
      const stat = fs.statSync(filedir);

      if (stat.isFile()) {
        rst.push(filedir);
      }
      if (stat.isDirectory()) {
        fileList.push(..._readDir(filedir, 'utf8'));
      }
    }
  }

  return rst;
}
function _readDir(dirPath) {
  return fs.readdirSync(dirPath, 'utf8').map(file => getFormat(dirPath, file))
}
function getFormat(dirPath, file) {
  return {
    name: file,
    path: dirPath,
    absolute: path.join(dirPath, file),
  }
}

module.exports = {
  displayAllFile,
};