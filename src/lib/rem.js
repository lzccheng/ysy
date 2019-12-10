(function flexible (window, document) {
    var docEl = document.documentElement
    var dpr = window.devicePixelRatio || 1
    var maxWidth = 750

    // adjust body font size
    function setBodyFontSize () {
        if (document.body) {
            var fontSize = 12 * dpr > 16 ? 16 : 12 * dpr
            document.body.style.fontSize = fontSize + 'px'
        } else {
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize()

    // set 1rem = viewWidth / 10
    function setRemUnit () {
        var rem = docEl.clientWidth / 10
        if (navigator.userAgent.match(/[^(Android|iPhone|iPad)]/i)) {
            rem = docEl.clientWidth > maxWidth ? maxWidth / 10 : docEl.clientWidth / 10
        }
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()

    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            setRemUnit()
        }
    })

    // detect 0.5px supports
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))
