const Bob = function() {

  this.hey = function(someoneSays){

    const RESPOND = {
      question: 'Sure.',
      yell: "Whoa, chill out!",
      nothing: "Fine. Be that way!",
      otherwise: "Whatever."
    }

    if(/^\s*$/.test(someoneSays)) return RESPOND.nothing
    if(/[A-Z]{4}|[A-Z|0-9]\!$/.test(someoneSays)) return RESPOND.yell
    if(/[^A-Z]\?$|[K|Y]\?$/.test(someoneSays)) return RESPOND.question
    if(!someoneSays) return RESPOND.otherwise
    return RESPOND.otherwise
  }
}


module.exports = Bob
