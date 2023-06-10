export const  fadeOut = (el,num = 10) => {
    var opacity = 1
    var timer = setInterval(function () {
      if (opacity <= 0.1) {
        clearInterval(timer);
        el.style.display = "none"
      }
      el.style.opacity = opacity
      opacity -= opacity * 0.1
    }, num)
    
  }

export function toggleAttr(el, attribute, vals){
    if ($(el).attr(attribute) ==  vals[0]){
        $(el).attr(attribute, vals[1]);
    }else if ($(el).attr(attribute) == vals[1])
     
    {
        $(el).attr(attribute, vals[0]);
    }
  }