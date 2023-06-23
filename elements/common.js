import { styled } from "styled-components"
import { colors, radius } from "../utilities/common"
import { cursor } from "../utilities/imports"

const TestimonialMain = styled.div`
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: ${radius.boxRadius};
    background-color: white;
    width: 400px;
    p {
        opacity: 0.5;
    }
`

const ImageAndName = styled.div`
    display: flex;
    margin-top: 20px;
    gap: 20px;
    align-items: center;
`

const Image = styled.img`
    width: 40px;
    height: 40px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 3px solid black;
`

const NameAndRelation = styled.div`
    opacity: 0.6;
`

export const TestimonialCard = ({ description , imageSrc , name , relation }) => {
    return (
        <TestimonialMain>
            <p>
                {description}
            </p>
            <ImageAndName>
                <Image src={imageSrc.src} />
                <NameAndRelation>
                    <h3>
                        {name}
                    </h3>
                    {relation}
                </NameAndRelation>
            </ImageAndName>
        </TestimonialMain>
    )
}

const HighlightedContainer = styled.span`
    color: white;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      width: 120%;
      height: 120%;
      background-color: ${colors.red};
      z-index: -1;
      opacity: 0.5;
      transform: skewX(-20deg);
      border-radius: 15px;
      left: -10%;
      top: -15%;
    }
`

const Cursor = styled.img`
    position: absolute;
    bottom: -20px;
    right: -15px;
`


export const Highlighted = ({children}) => {
    return (
      <HighlightedContainer>
        {children}
        <Cursor src={cursor.src} />
      </HighlightedContainer>
    )
  }