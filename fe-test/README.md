# 원티드 프론트엔드 코딩 테스트
## 프로젝트 개요
`시바견의, 시바견에 의한, 시바견을 위한` 사이트를 완성하고자 합니다.
시바견 이미지 리스트를 보여주는 페이지를 완성하세요.

### 요구사항
  * Buttons.js 컴포넌트의 GET DOGS 버튼과 CLEAR DOGS 버튼을 구현해야합니다.
    * GET DOGS 버튼을 클릭하면 API 호출을 통해 리스트가 나타나야 합니다.
    * 시바견 이미지 리스트는 `GET /data.json`으로 제공 됩니다. js 코드 안에서 직접 `data.json`을 임포트하지 말고 http 리퀘스트를 이용해서 데이터를 받아와야 합니다.
    * CLEAR DOGS 버튼 클릭 시 기존 리스트 데이터가 삭제되어야 합니다.

  * List.js 컴포넌트를 구현해아합니다.
    * Desktop view(>= 768px)에서는 한 열당 네 개의 시바견 이미지가 보여야 합니다.
    * Mobile view(< 768px)에서는 한 열당 한 개의 시바견 이미지가 보여야 합니다.
    * 시바견 이미지의 비율을 유지한 채로 보여줘야 합니다. (crop이나 resize 불가능)
    * 스크롤의 끝까지 왔을 때 다시 API를 호출하여 리스트 데이터를 추가하여 페이지네이션을 구현해야 합니다.

  * 프로그램은 오류 없이 작동되어야 합니다.
  * 문제를 어떻게 해결했는지에 README.md 파일에 설명을 추가해주세요.

### 기타 요구 사항
  * 이 리포지터리를 fork 하여 작업하시면 됩니다.
  * 과제를 완료하신 후 메일로 인사 담당자에게 알려주세요.
  * eslint warning이나 error가 없어야 합니다.
  * CSS 관련 라이브러리는 사용하지 않아야 합니다. (ex. 부트스트랩, 매터리얼ui 등)
  * 기타 필요한 라이브러리는 자유롭게 사용하신 후 문제 해결 방법 섹션에 설명으로 적어주세요.
  * 리스트의 UI 디자인 기본 사항은 아래 그림 참고하세요.
  ![UI example](https://s3.ap-northeast-2.amazonaws.com/wanted-public/sample.jpg)

## Scripts
### `yarn run start` or `npm run start`
해당 명령어를 실행할 경우 [http://localhost:3000](http://localhost:3000) 브라우저에 열립니다.

해당 페이지를 참고하며 프로젝트를 완성해주세요.

### 기타 사항
이 프로젝트는 create-react-app (CRA)에 기초해 있습니다. 되도록 eject를 하지 않고 프로젝트를 진행해주세요.
프로젝트를 확장을 원하실 경우 CRA에 있는 다양한 툴을 사용하셔도 무방합니다.
혹시 질문 사항이 있으신 경우 코딩 과제 메일의 참조 이메일 주소를 통해 질문해주시면 됩니다.

### 참고
  * [Wanted news page](https://www.wanted.co.kr/news)
  * [Create react app](https://facebook.github.io/create-react-app/)

### 문제 해결 방법
  * 이 섹션에 문제를 해결한 방법을 적어주세요.

  > 라이브러리 관련 금요일에 메일 보내드렸는데, 답장이 없어 우선 진행하였습니다.

  - axios를 사용하여 /date.json 을 호출합니다.

    - fetch로 호출하였으나, 실무에서 자주 사용하는 axios로 변경했습니다.

  - redux.js에 Reducer, Action을 구성합니다.

    - ducks 기법을 사용하여 파일 하나로 관리합니다.
    - redux에서는 다음과 같은 기능을 합니다.

    ```
    // dogs: 리스트 저장, isLoading: data.json 호출 진행 여부
    state = { dogs: array, isLoading: boolean }
    updateDogs : 강아지 데이터를 수정합니다.
    clearDogs : 강아지 데이터를 초기화합니다.
    updateLoading : 로딩 상태를 수정합니다.
    ```

    - reducer에서 Object.assign을 return 해도 되나, 함수를 호출하는 방식으로 만들었습니다.

  - buttons.js, list/index.js에서 API를 호출합니다.

    - axios로 데이터를 호출하여 updateDogs에 파라미터로 넘깁니다.
    - updateDogs 호출 전, isLoading을 true로 변경하고 작업합니다.
    - 변경된 isLoading은 이미지 로딩이 완료되면 false로 변경됩니다.

  - styled-components를 사용하여 CSS를 작업합니다.

  - react-masonry-component를 사용하여 요구사항에 맞는 UI를 작성합니다.

    - masonry 내에 저장된 dogs를 출력합니다.
    - 이미지 로딩이 완료되지 않으면 레이아웃이 깨져 로딩완료 후 출력이 진행됩니다.
    - isLoading 상태에 따라 "이미지 로딩중입니다." 라는 박스를 노출시킵니다.
    - 768px 기준으로 시바견 이미지 사이즈를 다르게 적용합니다.

  - infinite 스크롤을 작업합니다.

    - addEventListener로 스크롤을 감지합니다.
    - 전체 스크롤 대비 스크롤 위치가 95% 내려가있으면, API를 호출합니다.
    - scrollRestoration이 auto인 경우, 페이지 새로고침 시 자동으로 스크롤이 내려가서 manual로 변경하였습니다.

  - eslint는 vscode plugin 기본 설정에 따라갑니다.
  - 궁금하신 점은 public.doriri@gmail.com 으로 메일 바랍니다.
  - 읽어주셔서 감사합니다.