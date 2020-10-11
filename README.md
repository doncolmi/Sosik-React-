# Sosik(소식) - React 프로젝트

---

### 프로젝트 소개

---

뉴스를 크롤링 하여 언론사나 주제별로 묶어 피드를 만들어주는 웹 애플리케이션입니다.

TypeScript를 적용하였습니다.

### 특징

---

`react-kakao-login` 를 사용하여 Oauth2 로그인을 구현하였습니다.

`axios` 를 사용하여 백엔드 서버와 통신하였습니다.

**개발 시 특징**

`typescript` 를 사용하였습니다.

### 폴더 구조

```
C:.
│  App.tsx
│  index.css
│  index.tsx
│  logo.svg
│  react-app-env.d.ts
│  serviceWorker.ts
│  setupTests.ts
│
├─components
│  │  GuestMain.tsx // 로그인 안했을 때 페이지 입니다.
│  │  Main.tsx // 로그인 후 페이지 입니다.
│  │
│  ├─GuestMain // GuestMain 관련 컴포넌트입니다.
│  │  ├─Bottom
│  │  │      Bottom.css
│  │  │      Bottom.tsx
│  │  │      Footer.css
│  │  │      Footer.tsx
│  │  │
│  │  ├─Dots // 상단 위치 포인트 관련입니다.
│  │  │      Dot.tsx
│  │  │      Dots.css
│  │  │      Dots.tsx
│  │  │
│  │  ├─Middle
│  │  │      Middle.css
│  │  │      Middle.tsx
│  │  │
│  │  └─Top
│  │      │  Top.css
│  │      │  Top.tsx
│  │      │
│  │      └─Icons
│  │              Down.tsx
│  │              icon.css
│  │              Icon.tsx
│  │              Icons.tsx
│  │
│  ├─Main // Main 관련 컴포넌트입니다.
│  │  ├─Float // 로그인 후에 항상 오른쪽에 상주하고 있는 메뉴입니다.
│  │  │      BottomFloat.css
│  │  │      BottomFloat.tsx
│  │  │      Float.css
│  │  │      Float.tsx
│  │  │      FloatMenu.tsx
│  │  │
│  │  ├─Header
│  │  │      Header.css
│  │  │      Header.tsx
│  │  │      MyInfo.tsx
│  │  │
│  │  ├─MyPage // 마이페이지 입니다.
│  │  │      Profile.css
│  │  │      Profile.tsx
│  │  │      Quit.css
│  │  │      Quit.tsx
│  │  │
│  │  ├─NewsList // 뉴스 리스트 관련 입니다.
│  │  │  │  FollowInfo.css
│  │  │  │  FollowInfo.tsx
│  │  │  │  NewsItem.css
│  │  │  │  NewsItem.tsx
│  │  │  │  NewsList.css
│  │  │  │  NewsList.tsx
│  │  │  │  NoNews.tsx
│  │  │  │  SaveNewsList.tsx
│  │  │  │
│  │  │  └─NewsItem 
│  │  │          NewsContents.tsx
│  │  │          NewsInfo.tsx
│  │  │          NewsPicture.tsx
│  │  │          SaveNewsBtn.tsx
│  │  │
│  │  ├─PressList // 언론사 목록 관련 입니다.
│  │  │  │  PressFollow.tsx
│  │  │  │  PressList.css
│  │  │  │  PressList.tsx
│  │  │  │  PressListItem.css
│  │  │  │  PressListItem.tsx
│  │  │  │  PressName.tsx
│  │  │  │  PressNum.tsx
│  │  │  │
│  │  │  └─Press
│  │  │          Press.css
│  │  │          Press.tsx
│  │  │          PressItem.css
│  │  │          PressItem.tsx
│  │  │          PressTop.css
│  │  │          PressTop.tsx
│  │  │
│  │  └─TopicList // 주제 목록 관련 입니다.
│  │      │  TopicFollow.tsx
│  │      │  TopicList.css
│  │      │  TopicList.tsx
│  │      │  TopicListItem.css
│  │      │  TopicListItem.tsx
│  │      │
│  │      └─Topic
│  │              Topic.css
│  │              Topic.tsx
│  │              TopicItem.css
│  │              TopicItem.tsx
│  │              TopicTop.css
│  │              TopicTop.tsx
│  │
│  └─Util // 기타 컴포넌트입니다.
│      ├─Block // 블록 관련
│      │      Block.css
│      │      Block.tsx
│      │      ImgBlock.css
│      │      ImgBlock.tsx
│      │
│      ├─Button // 버튼 관련
│      │      Button.css
│      │      Button.tsx
│      │
│      ├─Form // 작성 폼
│      │      Form.css
│      │      Form.tsx
│      │
│      ├─LastDiv // 마지막 뉴스 리스트일때 나오는 div 
│      │      LastDiv.css
│      │      LastDiv.tsx
│      │
│      ├─Loading // 로딩 바 관련
│      │      LoadingBar.css
│      │      LoadingBar.tsx
│      │
│      ├─Modal // 모달창 관련
│      │  │  Modal.css
│      │  │  Modal.tsx
│      │  │  ModalInner.css
│      │  │  ModalInner.tsx
│      │  │  ModalOverlay.tsx
│      │  │  ModalWrapper.tsx
│      │  │  Portal.tsx
│      │  │
│      │  └─Content
│      │          ModalBody.tsx
│      │          ModalFooter.tsx
│      │          ModalHeader.tsx
│      │          SaveNews.tsx
│      │
│      └─SocialLogin // 카카오 로그인 버튼
│              Kakao.css
│              Kakao.tsx
│
├─css // css 관련 폴더입니다. 처음엔 사용했는데...관리가 점점힘들어 져서 ㅠㅠ...
│  │  GuestMain.css
│  │  Main.css
│  │
│  └─fonts // 사용하는 폰트 폴더입니다. google font의 cdn을 사용했으나 로드 관련 문제로 직접 삽입하였습니다.
│          NanumMyeongjo-Regular.ttf
│          NotoSansKR-Black.otf
│          NotoSansKR-Bold.otf
│          NotoSansKR-Light.otf
│          NotoSansKR-Medium.otf
│          NotoSansKR-Regular.otf
│          NotoSansKR-Thin.otf
│
├─hooks // 커스텀 훅
│      useRequest.ts
│
└─modules // Redux 관련 폴더
        index.ts
        news.ts
        user.ts
```

### 환경 변수 파일

---

```
# 카카오 API 키
REACT_APP_KAKAO_API
# 백엔드 서버 주소
REACT_APP_BACKEND_SERVER
```
