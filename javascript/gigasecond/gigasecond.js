const Gigasecond = function(dob) {
  'use strict';

  this.date = () => {
    const gigaDate = new Date(1e12 + dob.getTime());
    return new Date(gigaDate);
  }
}
module.exports = Gigasecond
