var Logger = function () {
  this.hashMap = new Map();
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  //first set, if hashMap empty
  if (!this.hashMap.has(message)) {
    this.hashMap.set(message, timestamp + 10);
    return true;
  }

  //if hashMap has message & time is passed
  if (this.hashMap.has(message) && timestamp >= this.hashMap.get(message)) {
    this.hashMap.set(message, timestamp + 10);
    return true;
  }
  //if hashMap has message & time isn't passed
  if (this.hashMap.has(message) && timestamp < this.hashMap.get(message)) {
    return false;
  }
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
