const Bob = function() {

  this.hey = function(someoneSays){

    const BOB_SAYS = {
      sure: 'Sure.',
      whoa: "Whoa, chill out!",
      fine: "Fine. Be that way!",
      whatever: "Whatever."
    }

    if(someoneSays.match(/^\s*$/)) return BOB_SAYS.fine
    if(someoneSays.match(/[A-Z]{4}|[A-Z|0-9]\!$/)) return BOB_SAYS.whoa
    if(someoneSays.match(/[^A-Z]\?$|[K|Y]\?$/)) return BOB_SAYS.sure
    if(!someoneSays) return BOB_SAYS.whatever
    return BOB_SAYS.whatever
  }
}


module.exports = Bob
