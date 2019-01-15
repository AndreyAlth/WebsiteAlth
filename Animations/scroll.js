/*
* Créditos a andjosh
* Código Original: https://gist.github.com/andjosh/6764939
*/

const navigation = document.querySelectorAll('div nav ol li a')

navigation.forEach(navigator => {
  navigator.addEventListener('click', event => {
    event.preventDefault()
    $link = event.target
    $to = document.getElementById($link.hash.replace('#', ''))

    let start = document.body.scrollTop,
      change = $to.getBoundingClientRect().y - start,
      currentTime = 0,
      increment = 20,
      duration = 1000

    const animateScroll = () => {
      currentTime += increment
      let val = Math.easeInOutQuad(currentTime, start, change, duration)
      window.scrollTo(0, val)
      if (currentTime < duration)
      {
        setTimeout(animateScroll, increment)
      }
    }
    animateScroll()
    window.location = $link.hash
  })
})

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}