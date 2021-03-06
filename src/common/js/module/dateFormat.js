var beforeFillZero = require('./beforeFillZero.js');

/**
 * 时间格式化
 * @param date 日期对象|时间戳数字|时间戳字符串
 * @param format 格式化字符串
 * @returns {String}
 * Demo: swg.dateFormat(new Date(), 'yyyy-MM-dd HH:mm:ss SSS');
 */
var dateFormat = function(date, format){
  date = Object.prototype.toString.call(date) == '[object String]' ? new Date(parseInt(date)) :
    Object.prototype.toString.call(date) == '[object Number]' ? new Date(date) :
    date || new Date();
  format = Object.prototype.toString.call(format) == '[object String]' ? format : 'yyyy-MM-dd hh:mm:ss SSS';
  var map = {
    'y': date.getFullYear(),
    'M': date.getMonth() + 1,
    'd': date.getDate(),
    'H': date.getHours(),
    'm': date.getMinutes(),
    's': date.getSeconds(),
    'S': date.getMilliseconds()
  };
  for(var key in map){
    format = format.replace(new RegExp(key + '+'), function(matchValue, index, input){
      return beforeFillZero(map[key], matchValue.length);
    });
  }
  return format;
};

module.exports = dateFormat;
