import styled from '@emotion/styled'
import { H1 } from 'components/atoms/H1'
import { H2 } from 'components/atoms/H2'
import { H3 } from 'components/atoms/H3'
import { Paragraph } from 'components/atoms/Paragraph'
import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header'
import PageTemplate from 'components/templates/PageTemplate'
import { inject, observer } from 'mobx-react'
import React from 'react'
import { StoresType } from '../_app'

export type IndexPagePropsType = {
  stores: StoresType;
}

const DetailGuideWrapper = styled.div`
  section {
    margin: 140px 0;
  }
  h2 {
    font-size: 32px;
    margin-bottom: 54px;
  }
`

@inject('stores')
@observer
export default class CFPDetailedGuide extends React.Component<{ stores: StoresType }> {
  render() {
    return (
      <PageTemplate
        header={<Header title='발표안 작성 가이드 :: 파이콘 한국 2019' />}
        footer={<Footer />}
      >
        <DetailGuideWrapper>
          <H1 intlKey='contribute.overview.title'>
            발표안 작성 가이드
          </H1>
          {/* Status Bar */}
          <Paragraph intlKey='contribute.overview.intro'>
            본 글은 파이콘 한국 2018 에 발표자로 지원해주신 분들에게 보다 상세한 도움을 드리고자 준비하였습니다.
            아래의 도움말을 통해 여러분의 발표 제안서가 더 설득력 있고 충분한 정보를 전달할 수 있게 되기를 바랍니다.
          </Paragraph>
          {/* 목차  */}
          <section>
            <H2 intlKey='contribute.detail.notice.title'>발표자를 위한 안내</H2>
            <H3 intlKey='contribute.detail.notice.first.title'>발표 녹화</H3>
            <Paragraph>
              파이콘 한국 2018의 모든 발표 내용은 녹화 후 공개될 예정입니다.
              따라서 발표 제안서를 작성하시기 전에 이 점을 염두에 두시기 바랍니다.
            </Paragraph>
            <H3 intlKey='contribute.detail.notice.first.title'>Everybody Pays</H3>
            <Paragraph>
              PyCon은 커뮤니티의 자발적인 도움으로 치러지는 행사입니다.
              발표자를 위한 물질적인 혜택(강연료, 무료 티켓 등)을 제공해드릴 수 없는 점 양해 부탁드립니다.
              이와 관련하여 파이콘의 철학인 ‘Everybody Pays’에 대한 내용을 담고 있는 글을 참고해주세요.
            </Paragraph>
            <H3 intlKey='contribute.detail.notice.first.title'>선호도 투표</H3>
            <Paragraph>
              1차로 선정된 발표 내용은 얼리버드 구매자들을 대상으로 선호도 투표가 진행됩니다.
              선호도 투표는 순수하게 발표 내용만을 공개하여 진행하며 발표자 개인에 대한 내용은 비공개로 진행됩니다.
              파이콘 한국 준비위원회의 프로그램팀은 선호도 투표 결과를 참고하여
              최대한 다양한 참가자들이 즐길 수 있는 행사가 되도록 최종 발표자를 선정합니다.
            </Paragraph>
            <H3 intlKey='contribute.detail.notice.first.title'>지속적인 협의</H3>
            <Paragraph>
              마지막으로, 발표 제안서를 제출하신 순간부터 최종 확정이 될 때까지 필요에 따라
              프로그램팀과 발표 내용에 대한 지속적인 협의가 있을 수 있다는 점을 참고해주시기 바랍니다.
              마감일에 맞추어 제안서를 제출하시기보다는 미리 여유 있게 제안서를 제출해주시면
              충분한 협의를 통해 더 효과적인 발표를 함께 만들 수 있습니다.
            </Paragraph>
            <Paragraph bold>
              안내 사항을 모두 읽어보셨다면, 이제 본격적인 제안서 작성을 시작해볼까요?
            </Paragraph>
          </section>
          <section>
            <H2 intlKey='contribute.detail.notice.title'>제안서를 작성하기 전에</H2>
            <Paragraph>
              제안서를 작성하기 전 생각해보아야 할 사항은 아래와 같습니다.
            </Paragraph>
            <ul>
              <li>주제는 무엇인가요?</li>
              <li>대상 청중은 누구인가요?</li>
              <li>발표를 통해서 청중이 어떤 것을 얻을 수 있나요?</li>
              <li>시간을 어떻게 배분할 것인가요?</li>
            </ul>
            <Paragraph>
              또, 제안서에 채워야 하는 항목은 아래와 같습니다.
            </Paragraph>
            {/* Table */}
            <Paragraph>
              고려해야 할 부분들이 다소 어렵게 느껴지시나요?
              안내문은 이제 시작이니 겁내지 마세요.
              조금 더 상세한 설명과 함께 제안서를 작성해보세요.
            </Paragraph>
          </section>
          <section>
            <H2 intlKey='contribute.detail.notice.title'>주제 선정</H2>
            <Paragraph>
              가장 좋은 방법은 기존에 진행된 PyCon 행사에서 수락된 발표 주제들을 둘러보는 것이 좋습니다.
              발표 주제뿐만 아니라 발표 슬라이드를 참고하는 것도 도움이 될 것입니다.
              청중에게 들려주고 싶고 흥미로운 주제를 선정해보세요.
            </Paragraph>
            {/* pycon list  */}
            <Paragraph>
              주제를 선정했다면 이제 제안서에 채워야 할 내용들을 더 구체적으로 생각해볼 수 있습니다.
              아래의 도움말을 참고해보세요
            </Paragraph>
          </section>
          <section>
            <H2 intlKey='contribute.detail.notice.title'>좋은 제안과 나쁜 제안</H2>
            <H3 intlKey='contribute.detail.notice.first.title'>좋은 제안 👍</H3>
            <ol>
              <li>
                요약과 설명 부분에는 아래와 같은 내용을 써주세요.
                <ul>
                  <li>발표를 듣기 위해 어떤 사전 지식이 필요한가요?</li>
                  <li>청중이 이 발표를 듣고 얻게 되는 것은 무엇인가요?</li>
                </ul>
              </li>
              <li>발표가 진행되는 순서와 예상 시간을 적어주세요. </li>
              <li>주제가 일반적인 Python 사용자들에게 익숙하지 않다면 이해를 돕기 위한 블로그 주소나 위키, 소스 코드 등을 추가해주세요.</li>
            </ol>
            <H3 intlKey='contribute.detail.notice.first.title'>나쁜 제안 🙅‍♀️</H3>
            <ol>
              <li>
                단순 정보 공유를 위한, 가령 여러분의 제품을 알리거나 어떻게 사용하는지에 대한 발표는 지양해주세요.
                하지만 회사에서 개발 이슈를 해결한 사례, 청중에게 도움이 되는 오픈소스 프로젝트에 대한 내용은 환영합니다.
              </li>
              <li>제안서는 늘 자세하고 완성되어 있어야 합니다. 미완성의 제안서는 좋은 인상을 주지 못합니다.</li>
            </ol>
          </section>
          <section>
            <H2 intlKey='contribute.detail.notice.title'>대상 청중(난이도)를 정하는 방법</H2>
            <Paragraph>좋은 발표는 특정 Python 레벨과 대상 청중에게 알맞은 발표입니다. </Paragraph>
            <ul>
              <li>
                Cython을 사용하여 C 코드 블럭이 실행될 때 GIL을 해제하여 성능 이슈를 해결하는 방법에 대한 내용을
                초보자/중급자를 위한 발표라고 표시하는 것은 좋지 않습니다.
              </li>
              <li>반대로, Cython에 대한 소개나 GIL에 대한 설명은 고급 사용자를 위한 발표로 적절하지 않습니다.</li>
            </ul>
            <Paragraph>
              위와 같이 명백한 경우가 있는 반면에 대상 레벨을 정하기 애매한 내용들도 분명 있습니다.
              대상 레벨을 정하기 어려운 분들을 위해 간단한 가이드라인을 제시해드리고자 합니다.
            </Paragraph>
            <H3 intlKey='contribute.detail.notice.first.title'>초보</H3>
            <Paragraph>
              Python에 대한 지식이 전혀 없거나 생소합니다. Python의 기본적인 문법이나 흐름에 대한 지식은 가지고 있으나,
              표준 라이브러리 모듈 중에는 모르는 것도 많으며 프로그래밍 전반에 대한 이해가 깊지 않습니다.
            </Paragraph>
            <Paragraph>
              초보 레벨을 위한 발표 주제로는 Python을 배운 경험, 중급 사용자로 거듭나기 위해 필요한 Python 프로그래밍 스킬 등의 내용이 적당합니다.
              Pandas나 Django와 같은 Python 기본 내장 패키지가 아닌 패키지에 대한 내용은 초보자를 위한 것이 아닙니다.
            </Paragraph>
            <H3 intlKey='contribute.detail.notice.first.title'>중급</H3>
            <Paragraph>
              Python을 배운지 오래되지 않아 Python이 어떻게 활용될 수 있는지를 알고 싶어 합니다.
              혹은, 파이썬을 오랫동안 사용했지만 다양한 활용 분야에 대한 경험이 부족합니다. 여러 분야에서 활용되는 내용들을 다룰 수 있습니다.
            </Paragraph>
            <Paragraph>
              중급 레벨을 위한 발표 주제로는 웹 프레임워크 사용, 기계 학습, 웹 트래픽 모니터링, 자동화 등의 이야기가 선정될 수 있습니다.
              중급 레벨 대상의 제안서는 제안서 검토 후 초보자용 또는 고급자용 레벨로 조정 요청을 드릴 수 있다는 것을 알아두시기 바랍니다.
            </Paragraph>
            <H3 intlKey='contribute.detail.notice.first.title'>고급</H3>
            <Paragraph>
              Python 기술에 익숙하고 일반적인 프로그래밍 개념이 잘 갖춰져있습니다.
              중급과 고급의 가장 큰 차이는 고급자용은 더 많은 해당 분야의 전문 지식을 요구한다는 점입니다.
            </Paragraph>
            <Paragraph>
              고급 레벨을 위한 발표 주제로는 최적화나 Tool의 내부 동작에 대한 내용, 또는 Python의 내부 구현에 대한 내용이 적당합니다.
            </Paragraph>
          </section>
        </DetailGuideWrapper>
      </PageTemplate>
    )
  }
}
