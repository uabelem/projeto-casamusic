function verMenu() {
    if (burguer.style.display !== 'block'){
        burguer.style.display = 'block'
    } else {
        burguer.style.display = 'none'
    }
}

function verCursos1() {
    if (cursos1.style.display !== 'block'){
        cursos1.style.display = 'block'
        seta1.innerHTML = 'arrow_cool_down'
    } else {
        cursos1.style.display = 'none'
        seta1.innerHTML = 'touch_app'
    }
}
function verCursos2() {
    if (cursos2.style.display !== 'block'){
        cursos2.style.display = 'block'
        seta2.innerHTML = 'arrow_cool_down'
    } else {
        cursos2.style.display = 'none'
        seta2.innerHTML = 'touch_app'
    }
}
function verCursos3() {
    if (cursos3.style.display !== 'block'){
        cursos3.style.display = 'block'
        seta3.innerHTML = 'arrow_cool_down'
    } else {
        cursos3.style.display = 'none'
        seta3.innerHTML = 'touch_app'
    }
}