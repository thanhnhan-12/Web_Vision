import React from 'react'
import * as S from './styles'
import LogoInsta from '../../../../assets/FooterLogoInsta.svg'
import LogoTwitter from '../../../../assets/FooterLogoTwitter.svg'
import LogoFb from '../../../../assets/FooterLogoFb.svg'
import LogoYoutube from '../../../../assets/FooterLogoYoutube.svg'

function Footer() {
  return (
    <S.ContainerFooter>
      <S.Footer>
        <S.FooterItems>
          <S.FooterService>ABOUT US</S.FooterService>
          <S.FooterDes>
            Nepal's Coolest Eyewear Store
            <p>
              ORDER ANYTIME AND RECEIVE FREE AND FAST DELIVERY.
            </p>
          </S.FooterDes>
        </S.FooterItems>

        <S.FooterItems>
          <S.FooterService>POLICY</S.FooterService>
          <div className='Sub-Items'>
            <S.FooterDes>
              Delivery
              <p>Exchange and Return</p>
            </S.FooterDes>
            <S.FooterDes>
              Payment
              <p>Cancellation</p>
            </S.FooterDes>
          </div>
        </S.FooterItems>

        <S.FooterItems>
          <S.FooterService>CONTACT</S.FooterService>
          <S.FooterDes>
            <S.FooterDesList>
              <li>Phone <span>9823-749-232</span></li>
              <li>Email <span>visioncustomercare@outlook.com</span></li>
              <li>Address <span>Maitidevi, Kathmandu</span></li>
            </S.FooterDesList>
          </S.FooterDes>
        </S.FooterItems>

        <S.FooterItems>
          <S.FooterService>SOCIALS</S.FooterService>
          <S.FooterIcon>
            <img src={LogoInsta} alt="" />
            <img src={LogoTwitter} alt="" />
            <img src={LogoFb} alt="" />
            <img src={LogoYoutube} alt="" />
          </S.FooterIcon>
        </S.FooterItems>

      </S.Footer>
    </S.ContainerFooter>
  )
}

export default Footer