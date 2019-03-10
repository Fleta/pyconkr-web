import styled from '@emotion/styled'
import { WideContentWidthWrapper } from 'components/atoms/WideContentWidthWrapper'
import FixedFooter from 'components/organisms/FixedFooter'
import intl from 'react-intl-universal'

const FooterWrapper = styled.footer`
  background-color: #f5f5f5;
  padding-bottom: 40px;
  ${WideContentWidthWrapper} {
    padding: 37px 0 39px;
    height: 160px;
    display: flex;
    justify-content: space-between;
  }
  li, p {
    font-size: 14px;
    line-height: 2;
  }
`

const Footer = () => (<>
  <FooterWrapper>
    <WideContentWidthWrapper>
      <ul>
        <li>{ intl.get('fixedFooter.sponsor').defaultMessage('후원') } sponsor@pycon.kr</li>
        <li>{ intl.get('fixedFooter.program').defaultMessage('프로그램') } program@pycon.kr</li>
        <li>{ intl.get('fixedFooter.other').defaultMessage('기타 문의') } support@pycon.kr</li>
      </ul>
      <p>
        { intl.get('fixedFooter.poweredBy').defaultMessage('파이썬 웹 프레임워크 Django와 Next.js로 만들었습니다.') } <br/>
        { intl.get('fixedFooter.hostedOn').defaultMessage('홈페이지 호스팅은 Naver D2의 지원을 받고 있습니다.') }
      </p>
    </WideContentWidthWrapper>
  </FooterWrapper>
  <FixedFooter />
</>)

export default Footer
