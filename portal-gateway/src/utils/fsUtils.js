const fs = require('fs-extra');
const path = require('path');
const readline = require('readline');


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


/**
 * 初始化 json 文件 
 * - 若文件不存在则生成文件并写入默认数据
 *
 * @param {string} jsonPath json文件路径
 * @param {any} initData 默认数据, 默认为 {}
 * @returns Promise
 */
function initJSON(jsonPath, initData = {}) {
  return fs.ensureFile(jsonPath).then(_ => {
    return fs.stat(jsonPath).then(({ size }) => {
      if (size === 0) {
        fs.writeJson(jsonPath, initData);
      }
    });
  })
}

/**
 * 文件是否存在
 *
 * @param {string} filePath
 * @returns Promise
 */
function fsExists(filePath) {
  return new Promise((res, rej) => {
    return fs.access(filePath, fs.constants.F_OK, err => {
      if (err) {
        return rej(err);
      }
      res();
    })
  })
}

/**
 *
 *
 * @param {string} cfgPath 读取的文件的绝对路径
 * @param {string} sliceS 文件的分割点的开始
 * @param {string} sliceE 文件的分割点的结束
 * @returns
 */
function readFileToSlice(cfgPath, sliceS, sliceE) {
  let flagStart = false;
  let flagEnd = false;
  const beginList = [];
  const edgeList = [];
  const finishList = [];

  return new Promise((res, rej) => {
    const rl = readline.createInterface({
      input: fs.createReadStream(cfgPath),
    });

    rl.on('line', (line) => {

      if (line.indexOf(sliceS) > -1) {
        flagStart = true;
        beginList.push(line);
        return;
      }
      if (line.indexOf(sliceE) > -1) {
        flagEnd = true;
        finishList.push(line);
        return;
      }

      if (!flagStart && !flagEnd) {
        beginList.push(line);
        return;
      }
      if (flagStart && !flagEnd) {
        edgeList.push(line);
        return;
      }
      if (flagStart && flagEnd) {
        finishList.push(line);
        return;
      }
    })

    rl.on('close', _ => {
      res([
        beginList.join('\n'),
        edgeList.join('\n'),
        finishList.join('\n'),
        cfgPath,
      ]);
    });
  });

}

module.exports = {
  displayAllFile,
  initJSON,
  fsExists,
  readFileToSlice,
};