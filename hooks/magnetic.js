
export function mousemove(element) {
    const elementPosition = element.target.getBoundingClientRect()
    const mouseX = element.clientX;
    const mouseY = element.clientY;
    // const boxWidth = element.target.clientWidth / 2;
    // const boxHeight = element.target.clientHeight / 2;
    // const pageX = element.pageX;
    // const pageY = element.pageY;
    let moveX = ( mouseX - (elementPosition.left + (elementPosition.width / 2)) )
    let moveY = ( mouseY - (elementPosition.top + (elementPosition.height / 2)) )

    element.target.style.transform = `translate( ${moveX / 2}px , ${moveY / 2}px )`
}

export function mouseout(element) {
    element.target.style.transform = `translate( 0px , 0px )`
}