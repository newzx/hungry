/*
 * @Description: storage person favorite
 * @Author: zx
 * @Date: 2019-02-12 11:58:46
 */
export function saveToLocal(id, key, value) {
  let seller = window.localStorage._seller_;
  // 外层有个seller 双下划綫私有的 把所有的东西存到_seller_里
  if (!seller) {
    seller = {};
    seller[id] = {}; //  每个seller 有不同的id,把id存一下。
  } else {
    seller = JSON.parse(seller);
    // JSON.parse函数 将json字符串转换成json对象。
    if (!seller[id]) {
      seller[id] = {};
    }
  }
  seller[id][key] = value; // 赋值到每个商家下面，iD相关联
  window.localStorage._seller_ = JSON.stringify(seller);
  // console.log(window.localStorage._seller_);
  // JSON.stringify()函数 将json对象转换成json字符串。
};

export function loadFormLocal(id, key, def) {
  let seller = window.localStorage._seller_;
  if (!seller) {
    return def; //  没有存储过，去读取是默认值
  }
  seller = JSON.parse(seller)[id];
  if (!seller) {
    return def;
  }
  let ret = seller[key]; //  否则返回id对应的key
  return ret || def; // ret  没有的话  返回默认值
};
