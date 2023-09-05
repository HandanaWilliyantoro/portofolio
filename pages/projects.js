import React, { useCallback } from 'react'
import tw from 'twin.macro'

// Components
import { Header, FeaturedCard, Card } from '@/component'

// Styles
const Container = tw.div`flex flex-col pt-4`
const TitleContainer = tw.div`flex flex-col px-6 w-full items-start justify-start pt-14 mb-8 max-md:mb-2 max-md:pt-16`
const Title = tw.p`text-2xl font-bold text-white font-poppins tracking-wider`
const Subtitle = tw.p`text-sm font-inter mt-2 text-gray-400`
const FeaturedCardContainer = tw.div`flex flex-row w-full p-4 py-8 border-y border-y-gray-700 max-md:flex-col max-md:py-2`
const Col = tw.div`flex flex-col w-full px-4 max-md:px-0`
const ContactContainer = tw.div`flex flex-col items-center justify-center w-full py-16 px-8`
const Button = tw.button`px-4 py-2 bg-white rounded-lg font-poppins text-sm font-bold text-black`

const projects = () => {

  const navigate = useCallback((url) => {
    window.open(url, '_blank')
  }, []);

  return (
    <Container>
      <Header />
      <TitleContainer>
        <Title>Projects</Title>
        <Subtitle>Some of the custom projects are from work and some are on my own time.</Subtitle>
      </TitleContainer>
      <FeaturedCardContainer>
        <FeaturedCard 
          title={'Pintap Indonesia'}
          date={'Until now'}
          description={'Pintap Indonesia is a mobile app that connects grocery stores with motorists, making grocery shopping more convenient. Motorists can browse and order groceries for delivery or pick-up, while grocery stores can expand their customer base and boost their business.'}
          onClick={() => navigate('https://pintap.id')}
        />
        <Col>
          <Card 
            title={'Kick Avenue'}
            date={'Oct, 2021'}
            description={'Kick Avenue is a trusted online marketplace in Indonesia for sneakers, streetwear, and luxury items. They provide a user-friendly platform to buy and sell authentic products, along with secure payment options.'}
            onClick={() => navigate('https://www.kickavenue.com/')}
          />
          <Card
            title={'Madies'}
            date={'Apr, 2021'}
            description={'Delicious and nutritious freeze-dried fruits for snacking or creating irresistible dishes.'}
            onClick={() => navigate('https://madies.mx')}
          />
        </Col>
      </FeaturedCardContainer>
      <ContactContainer>
        <Title>Let's Work Together</Title>
        <Subtitle tw='py-2 mb-4 text-center'>Feel free to reach out for any software development inquiry</Subtitle>
        <Button onClick={() => navigate('https://api.whatsapp.com/send?phone=6285692244063')}>Send me a message</Button>
      </ContactContainer>
    </Container>
  )
}

export default projects