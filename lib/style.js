Rye.implement(function(exports){

    var data = Rye.require('Data')
      , util = Rye.require('util')

    exports.show = function(){
        return this.each(function(element){
            return element.style.display = data.get(element, '_display') || 'block'
        })
    }

    exports.hide = function(){
        return this.each(function(element){
            var style = element.style

            if (style.display !== 'none') {
                data.set(element, '_display', style.display)
            }
            style.display = 'none'
        })
    }

    function split (className) {
        return className.match(/\w+/g) || []
    }

    exports.addClass = function(name){
        return this.each(function(el){
            el.classList
                ? name.replace(/\w+/g, function(m){ el.classList.add(m) })
                : el.className = util.unique(split(el.className).concat(split(name))).join(' ')
        })
    }

})