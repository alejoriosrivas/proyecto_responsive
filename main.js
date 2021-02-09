$(window).ready(function() {

    // const movile = $(window.matchMedia('screen and (max-width:786px)')) // Se guarda como un objeto
    // console.log(movile[0].matches)
    const movile = window.matchMedia('screen and (max-width:786px)')
    console.log(movile)
    
    const menu = $('.header_menu')
    const _class = 'is_active'
    const icon = $(document.querySelector('#header_menu_icon'))
    function evaluarContenido(element, _classy) {
        // classy is a way to name 'class parameter'
        const response = element.hasClass(_classy) // it'll return true or false
        return response
    }
    
    movile.addListener(validation)
    
    function validation(event) {
        if (event.matches === true) {
            // console.log('Match!')
            icon.click(function() {
                const evaluation = evaluarContenido(menu, _class)

                if (evaluation == true) {
                    menu.removeClass('is_active')
                } else {
                    menu.addClass('is_active')
                }
            })
        } else {
            icon.off('click')
        }
    }
    validation(movile)

    const iconsContainer = document.querySelector('.footer_icons_container') 
    const iconsCollection = iconsContainer.children
    let icons = Array.from(iconsCollection) // [...iconsCollection]
    const icons_lenght = icons.length
    let i = 0
    function hoverEffect() {
        const icon = icons[i]
        $(icon).hover(function() {
            $(icon).addClass('hover_sc')
        }, function() {
            $(icon).removeClass('hover_sc')
        })
        i++
    }
    icons.map(hoverEffect)
    
})