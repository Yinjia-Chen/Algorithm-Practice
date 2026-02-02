// 技能 - 固定时间间隔内只能执行一次
function throttle(fn, wait = 300) {
  let timer = null;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, wait);
  }
}