var lioness1013 = function () {

  function chunk(ary, size = 1) {

  }
  function compact(array) {
    var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

    while (++index < length) {
      var value = array[index];
      if (value) {
        result[resIndex++] = value;
      }
    }
    return result;
  }


return {
  chunk: chunk,
  compact: compact,
}
}()