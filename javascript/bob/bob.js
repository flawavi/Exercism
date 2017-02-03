const Bob = function() {

  this.hey = function(someoneSays){

    const TYPE_OF_THING = {
      question: /[^A-Z]\?$|[K|Y]\?$/,
      yell: /[A-Z]{4}|[A-Z|0-9]\!$/,
      nothing: /^\s*$/
    }
    const BOB_SAYS = {
      sure: 'Sure.',
      whoa: "Whoa, chill out!",
      fine: "Fine. Be that way!",
      whatever: "Whatever."
    }

    if(someoneSays.match(TYPE_OF_THING.nothing)) return BOB_SAYS.fine
    if(someoneSays.match(TYPE_OF_THING.yell)) return BOB_SAYS.whoa
    if(someoneSays.match(TYPE_OF_THING.question)) return BOB_SAYS.sure
    if(!someoneSays) return BOB_SAYS.whatever
    return BOB_SAYS.whatever
  }
}


module.exports = Bob
