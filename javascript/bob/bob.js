const Bob = function() {

  this.hey = function(someoneSays){

    const BOB_SAYS = {
      question: 'Sure.',
      yell: "Whoa, chill out!",
      nothing: "Fine. Be that way!",
      otherwise: "Whatever."
    }

    if(/^\s*$/.test(someoneSays)) return BOB_SAYS.nothing
    if(/[A-Z]{4}|[A-Z|0-9]\!$/.test(someoneSays)) return BOB_SAYS.yell
    if(/[^A-Z]\?$|[K|Y]\?$/.test(someoneSays)) return BOB_SAYS.question
    if(!someoneSays) return BOB_SAYS.otherwise
    return BOB_SAYS.otherwise
  }
}


module.exports = Bob
