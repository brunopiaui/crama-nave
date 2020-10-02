import Vue from 'vue'
import gsap from 'gsap'

Vue.prototype.$gsap = gsap

export const MyFunctions = {
  // funçao para scroll com setas do teclado em qualquer lugar da página
  KeyScroll: (e) => {
    const conteudo = document.querySelector('.sideR')

    var keyCode = window.event ? e.keyCode : e.which
    // UP
    if (keyCode === 38) {
      conteudo.scrollTop -= 15
    }
    // DOWN
    if (keyCode === 40) {
      conteudo.scrollTop += 15
    }
  },
  // fim

  // funçao pegar o scroll com mouse em qualquer lugar da página
  moveScroll: function(event) {
    let delta = 0
    if (!event) event = window.event
    // normalize the delta
    if (event.wheelDelta) {
      // IE and Opera
      delta = event.wheelDelta / 60
    } else if (event.detail) {
      // W3C
      delta = -event.detail / 2
    }
    const conteudo = document.querySelector('.sideR')
    let currPos = conteudo.scrollTop
    // calculating the next position of the object
    currPos = parseInt(currPos) - delta * 10
    // moving the position of the object
    conteudo.scrollTop = currPos
  },
  // fim

  // funçao pegar o scroll com mouse em qualquer lugar da página Desbrave
  moveScrollHome: function(event) {
    let delta = 0
    if (!event) event = window.event
    // normalize the delta
    if (event.wheelDelta) {
      // IE and Opera
      delta = event.wheelDelta / 60
    } else if (event.detail) {
      // W3C
      delta = -event.detail / 2
    }

    const conteudoaNavia = document.querySelector('.blocoaNavia')
    let currPosaNavia = conteudoaNavia.scrollTop
    currPosaNavia = parseInt(currPosaNavia) - delta * 10
    conteudoaNavia.scrollTop = currPosaNavia
  },
  // fim

  // funçao de scroll para porcentagem e manipulaçao das imagens
  porcScroll: function() {
    const conteudo = document.querySelector('.sideR')
    let h = conteudo
    let b = document.querySelector('#scroll')
    let st = 'scrollTop'
    let sh = 'scrollHeight'

    var percent = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
    var percentshow = percent.toFixed(0)

    document.getElementById('porc').innerHTML = percentshow

    if (percent === 100) {
      gsap.to('.setaPorc', {
        duration: 0.5,
        opacity: 0,
        ease: 'linear',
      })
    } else {
      gsap.to('.setaPorc', {
        duration: 0.5,
        opacity: 1,
        ease: 'linear',
      })
    }

    if (percent === 0) {
      gsap.to(
        [
          '.elScrollInt',
          '.elementoInterna1',
          '.elementoInterna2',
          '.elementoInterna3',
          '.elementoInterna4',
          '.elementoInterna5',
        ],
        {
          duration: 1,
          opacity: 1,
          ease: 'linear',
        }
      )
      gsap.to('.porcTxt', {
        duration: 1,
        opacity: 0.1,
        ease: 'linear',
      })
    } else {
      gsap.to(
        [
          '.elScrollInt',
          '.elementoInterna1',
          '.elementoInterna2',
          '.elementoInterna3',
          '.elementoInterna4',
          '.elementoInterna5',
        ],
        {
          duration: 1,
          opacity: 0.1,
          ease: 'linear',
        }
      )
      gsap.to('.porcTxt', {
        duration: 1,
        opacity: 1,
        ease: 'linear',
      })
    }
  },
  // fim

  // funçao de scroll para porcentagem e manipulaçao das imagens
  porcScrollHome: function() {
    const conteudoaNavia = document.querySelector('.blocoaNavia')
    let h = conteudoaNavia
    let b = document.querySelector('#scroll')
    let st = 'scrollTop'
    let sh = 'scrollHeight'

    var percent = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100
    var percentshow = percent.toFixed(0)

    document.getElementById('porc').innerHTML = percentshow

    if (percent === 100) {
      gsap.to('.setaPorc', {
        duration: 0.5,
        opacity: 0,
        ease: 'linear',
      })
    } else {
      gsap.to('.setaPorc', {
        duration: 0.5,
        opacity: 1,
        ease: 'linear',
      })
    }

    if (percent === 0) {
      gsap.to('.porcTxt', {
        duration: 1,
        opacity: 0.1,
        ease: 'linear',
      })
    } else {
      gsap.to('.porcTxt', {
        duration: 1,
        opacity: 1,
        ease: 'linear',
      })
    }
  },
  // fim

  // modelo para animaçao no hover botoes
  // mouseHoverButtons: () => {

  //   const targetHover = document.querySelectorAll('svg.hoverEffect')

  //   targetHover.forEach((item) => {
  //     const targetbutton = item
  //     targetbutton.addEventListener('mouseenter', (event) => {
  //       const targetElement = event.target.children[0]
  //       const pathAnimate = targetElement.children[0]
  //       pathAnimate.classList.add('hoverPathBtActive')
  //     })
  //     targetbutton.addEventListener('mouseleave', (event) => {
  //       const targetElement = event.target.children[0]
  //       const pathAnimate = targetElement.children[0]
  //       pathAnimate.classList.remove('hoverPathBtActive')
  //     })
  //   })
  // },
}
