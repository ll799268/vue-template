/**
 * 提取页面代码中所有网址
 * @return {string} 网址结果
 */
export const searchAllWWW = () => {
  return document.documentElement.outerHTML
    .match(
      /(url\(|src=|href=)[\"\']*([^\"\'\(\)\<\>\[\] ]+)[\"\'\)]*|(http:\/\/[\w\-\.]+[^\"\'\(\)\<\>\[\] ]+)/gi
    )
    .join("\r\n")
    .replace(/^(src=|href=|url\()[\"\']*|[\"\'\>\) ]*$/gim, '');
}

/**
 * 压缩css样式代码
 * @param {String} s css代码
 * @return {String} 压缩后的css代码 
 */
export const compresscss = s => {
  s = s.replace(/\/\*(.|\n)*?\*\//g, ""); //删除注释
  s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
  s = s.replace(/\,[\s\.\#\d]*\{/g, "{"); //容错处理
  s = s.replace(/;\s*;/g, ";"); //清除连续分号
  s = s.match(/^\s*(\S+(\s+\S+)*)\s*$/); //去掉首尾空白
  return s == null ? "" : s[1];
}