/*
 * @Description: 解析url参数
 * @Author: zx
 * @Date: 2019-02-12 10:28:24
 * @example ?id=12345&a=b
 * @return object {id:1234,a:b}
 */

 export function urlParse() {
    let url = window.location.search;
    // let url = '?id=12345&a=b';
    let obj = {};
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);
    // ['?id=12345', '&a=b']
    if (arr) {
      arr.forEach((item) => {
        let tempArr = item.substring(1).split('=');
        // 定义临时数组，每个元素拆分为数组，去掉问号。
        let key = decodeURIComponent(tempArr[0]);
        let val = decodeURIComponent(tempArr[1]);
        obj[key] = val;
      });
    }
    return obj;
    // return {id: 123445};
 }


 
 
