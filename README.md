# 인프콘 2023 웹 접근성 핸즈온 실습 레포지토리

## 목차

- [소개](#소개)
- [실습 내용](#실습-내용)
- [개발 도구 설치 및 프로젝트 시작 방법](#개발-도구-설치-및-프로젝트-시작-방법)
- [기술 스택](#기술-스택)
- [팀원 소개](#팀원-소개)
- [라이센스](#라이센스)
- [이 프로젝트에 기여하는 방법: 오픈 소스 참여하기](#이-프로젝트에-기여하는-방법)
- [기타 정보](#기타-정보)

## 소개

해당 레포지토리는 2023년 8월 15일 인프콘에서 발표될 핸즈온 실습 자료입니다.<br/>
이미 완성된 웹사이트를 스크린 리더기로 읽어보며 웹 접근성을 개선할 수 있는 부분을 찾아보고, <br/>
같이 개선해보도록 하겠습니다.

<br/>

## 실습 내용

- ### 2-1. 시각장애인도 쉽게 이해할 수 있는 구독 form 만들기
  - 아래의 구독 form의 웹 접근성을 향상 시키는 실습을 진행합니다.
  <div align="center">
  <img width="600" alt="Screenshot2023-07-27 at 1 26 22 AM" src="https://github.com/tae100k/infcon-2023-a11y-presentation/assets/78027252/02bfe41e-945b-43c4-a2b9-97e188db1262">
  </div>

<br/>

- ### 2-2. alt 텍스트, 이것만 알면 된다!
  - 아래의 이미지들의 웹 접근성을 향상 시키는 실습을 진행합니다.
  <div align="center">
  <img width="600" alt="Screenshot 2023-07-27 at 1 26 51 AM" src="https://github.com/tae100k/infcon-2023-a11y-presentation/assets/78027252/ef79d031-1818-479d-8b1e-f53bb5eea92a">
  </div>

<br/>

- ### 2-3. 한 끗이 다른 캐러셀 만들기
  - 아래의 슬라이더의 웹 접근성을 향상 시키는 실습을 진행합니다.
  <div align="center">
   <img width="600" alt="Screenshot 2023-07-27 at 1 26 10 AM" src="https://github.com/tae100k/infcon-2023-a11y-presentation/assets/78027252/35e9cba5-7df5-4695-8541-60c7a3de21a5">
  </div>
  <br/> 
  <br/>

## 개발 도구 설치 및 프로젝트 시작 방법

1. [Visual Studio Code](https://code.visualstudio.com/): 무료 오픈소스 코드 편집기
2. [Git](https://git-scm.com/): 소스 코드 버전 관리 도구
3. [Node.js](https://nodejs.org) (LTS 버전 권장) 및 npm: JavaScript 런타임 및 패키지 관리자
4. [Yarn](https://yarnpkg.com/): 패키지 관리 도구
```
npm install -g yarn
```
5. 프로젝트 종속성 설치
```
yarn
```

## 프로젝트 시작 방법

1.  프로젝트를 로컬 컴퓨터로 복제
```
git clone https://github.com/tae100k/infcon-2023-a11y-presentation.git
```
2. 복제된 프로젝트 디렉토리로 이동
```
cd infcon-2023-a11y-presentation
```
3. `hands-on-session-version` 브랜치로 전환
```
git checkout hands-on-session-version
```
4. `localhost:3000` 에 브라우저 띄우기
```
yarn start
```

<br />
- 핸즈온 세션을 진행하며 코드를 자유롭게 수정해 보세요. 진행 사항을 저장하고 싶다면 커밋 및 푸시하세요. 포크한 저장소라면 아무런 제약 없이 자유롭게 변경 사항을 원격 저장소에 푸시할 수 있습니다.


<br/> 
<br/>

## 기술 스택

- 실습에 필요한 스택
  - React, HTML, CSS를 알고 있으면 도움이 됩니다.
- 프로젝트에 사용된 스택
  - React
  - HTML, CSS
  - MUI (Material-UI): 실습에서는 사용되지 않습니다. 다만 프로젝트 내부에 MUI로 작성된 코드가 있어 알고 있다면 도움이 됩니다.

<br/> 
<br/>

## 팀원 소개

<table>
  <tr>
    <td style="width: 20%; text-align: center; padding: 0 3px;"><img src="https://github.com/tae100k/infcon-2023-a11y-presentation/assets/78027252/064f7fb9-297a-495b-9930-67df4dc67042" width="60%" /><br><strong>이진아 (디자인)</strong></td>
    <td style="width: 20%; text-align: center; padding: 0 3px;"><img src="https://github.com/tae100k/infcon-2023-a11y-presentation/assets/78027252/bc5634b8-8efe-4ace-b476-c6edc2df93d2" width="60%" /><br><strong>김태희 (개발)</strong></td>
  </tr>
</table>

### 이진아

**UI/UX 디자이너 (4년차)**

#### 경력

- LOVO - Genny 기획 및 디자인
- 글로벌 댄스 플랫폼 5six7eight 기획 및 제작
- '1M HomeDance'의 웹사이트 기획 및 디자인
- '1M Workshop'의 반응형 웹사이트 기획 및 디자인

**소셜 미디어:** [LinkedIn](https://www.linkedin.com/in/ginalee-uxdesign/)

### 김태희

**프론트엔드 개발자 (2년차)**

#### 프로젝트

- 현) LOVO 인공지능 음성합성 기술 tool Genny 개발
- NFT Auction 프로젝트 voice mask 개발
- LOVO 자사 홈페이지 개발 등


**소셜 미디어:** [LinkedIn](https://www.linkedin.com/mynetwork/)

<br/> 
<br/>

## 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다.

<br/> 
<br/>

## 이 프로젝트에 기여하는 방법

프로젝트에 기여하고 싶다면, 다음과 같은 절차를 따르시면 됩니다.

1. 먼저, 프로젝트를 자신의 GitHub 계정으로 포크(Fork)하세요.
2. 포크한 프로젝트를 로컬 개발 환경으로 클론(Clone)해 옵니다.
3. 새로운 브랜치를 생성하고, 변경 사항을 커밋(Commit)하세요.
4. 변경 사항을 가진 브랜치를 자신의 포크한 원격 프로젝트로 푸시(Push)합니다.
5. 원래 프로젝트로 풀 리퀘스트(Pull Request)를 생성하세요.

<br/> 
<br/>

## 기타 정보

이 저장소에 대한 질문이나 피드백이 있다면 [이슈 페이지](https://github.com/tae100k/infcon-2023-a11y-presentation/issues)에 글을 남겨 주세요.
