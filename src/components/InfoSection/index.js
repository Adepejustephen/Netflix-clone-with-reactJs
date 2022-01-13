import React from 'react'
// import { Player, BigPlayButton } from 'video-react';
import infoData from '../Fixtures/info'
import { Inner, Item, Pane, Title, SubTitle, Image, ItemContainer } from './styles/InfoSection'

function InfoSection() {
    return (
        
        <>
            {infoData.map((item) => {
                return <ItemContainer key={item.id}>
                    <Item  >
                        <Inner  direction={item.direction}>
                            <Pane >
                                <Title> {item.title}  </Title>
                                <SubTitle> {item.subTitle}  </SubTitle>
                            </Pane>
                            <Pane>
                                  <Image src={item.image} alt={item.alt} />
                            </Pane>
                        </Inner>
                    </Item>
                </ItemContainer>
            }
            )} 
        
             
        </>
    )
}

export default InfoSection
