import fahad from '../assets/images/fahad.png'
import peter from '../assets/images/peter.png'
import mathias from '../assets/images/mathias.png'

const colors = {
    black : "rgba(0, 0, 0, 1)",
    blackProject : "rgba(34, 34, 34, 1)",
    background : "rgba(243, 243, 243, 1)",
    white: "rgba(255, 255, 255, 1)",
    blue: "rgba(39, 203, 255, 1)",
    red : "rgba(255, 67, 67, 1)"
}

const testimonials = [
    {
        description: "Shayan is an outstanding software developer with a knack for collaboration. Among his skillset, I can guarantee that his problem-solving approach is top of the game.",
        image: mathias,
        name: "Mathias Wismann",
        relation: "Coding Partner"
    },
    {
        description: "Shayan showed great dedication, technical proficiency and creativity in his work. He was always willing to take on new challenges and put extra effort to meet deadlines.",
        image: peter,
        name: "Guanzheng Li",
        relation: "Chief Technology Officer"
    },
    {
        description: "Shayan is one of the brightest developer I've ever met. I worked alongside him while building a Full Stack app, and in that time he proved his commitment and determination over and over again.",
        image: fahad,
        name: "Shah Fahad",
        relation: "Founder"
    },
]

const radius = {
    boxRadius : "8px"
}

const width = {
    maxWidth : "1500px"
}

export { colors , width , radius , testimonials }