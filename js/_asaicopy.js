function copyDivContent(divId) {
  // 获取标签内容
  const div = document.getElementById(divId);
  // 创建文档区域
  const range = document.createRange();
  //曲遇范围边界设置为一个节点的子节点。
  range.selectNodeContents(div);
  // 获取当前位置
  const selection = window.getSelection();
  // 清空
  selection.removeAllRanges();
  // 添加
  selection.addRange(range);
  // 执行赋值操作
  document.execCommand("copy");
}
