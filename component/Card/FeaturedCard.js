import React from 'react'
import tw from 'twin.macro'
import {AiOutlineRight} from 'react-icons/ai'

// Styles
const Container = tw.div`flex flex-col p-4 border border-white opacity-80 rounded-lg w-full m-2 bg-[#1F1F21] cursor-pointer transition hover:opacity-100 max-md:m-0 max-md:my-4`;
const DateText = tw.p`text-white font-inter text-xs`
const Title = tw.p`font-poppins text-2xl text-white font-bold pb-4 tracking-wider`
const Description = tw.p`text-sm font-inter text-white pb-8 leading-6`
const ReadMoreContainer = tw.div`flex flex-row items-center mt-auto max-md:hidden`
const ReadMore = tw.p`text-sm font-poppins text-white mr-1`

const FeaturedCard = ({
    title,
    description,
    date,
    onClick
}) => {
  return (
    <Container onClick={onClick}>
        <DateText>{date}</DateText>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ReadMoreContainer>
            <ReadMore>Read More</ReadMore>
            <AiOutlineRight size={10} color='white' />
        </ReadMoreContainer>
    </Container>
  )
}

export default FeaturedCard