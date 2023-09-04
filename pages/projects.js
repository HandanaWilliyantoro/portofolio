import React from 'react'
import tw from 'twin.macro'

// Components
import { Header, FeaturedCard, Card } from '@/component'

// Styles
const Container = tw.div`flex flex-col`
const TitleContainer = tw.div`flex flex-col px-6 w-full items-start justify-start pt-20 mb-8`
const Title = tw.p`text-2xl font-bold text-white font-poppins tracking-wider`
const Subtitle = tw.p`text-sm font-inter mt-2 text-gray-400`
const FeaturedCardContainer = tw.div`flex flex-row w-full p-4 border-y border-y-gray-700`
const Col = tw.div`flex flex-col w-full px-4`

const projects = () => {
  return (
    <Container>
      <Header />
      <TitleContainer>
        <Title>Projects</Title>
        <Subtitle>Some of the projects are from work and some are on my own time.</Subtitle>
      </TitleContainer>
      <FeaturedCardContainer>
        <FeaturedCard 
          title={'Pintap Indonesia'}
          date={'Until now'}
          description={'Pintap Indonesia is a mobile app that connects grocery stores with motorists, making grocery shopping more convenient. Motorists can browse and order groceries for delivery or pick-up, while grocery stores can expand their customer base and boost their business.'}
        />
        <Col>
          <Card 
            title={'Kick Avenue'}
            date={'Oct, 2021'}
            description={'Kick Avenue is a trusted online marketplace in Indonesia for sneakers, streetwear, and luxury items. They provide a user-friendly platform to buy and sell authentic products, along with secure payment options.'}
          />
          <Card
            title={'Madies'}
            date={'Apr, 2021'}
            description={'Delicious and nutritious freeze-dried fruits for snacking or creating irresistible dishes.'}
          />
        </Col>
      </FeaturedCardContainer>
    </Container>
  )
}

export default projects