## 필수 구현 사항

1. 팬레터 CRUD
   - 아티스트별 게시물 조회 기능 (Home - Read)
   - 원하는 아티스트에게 팬레터 등록 (Home - Create)
   - 팬레터 상세 화면 구현 (Detail - Read)
   - 상세화면에서 팬레터 내용 수정 구현 (Detail - Update)

### 필수 요구 사항

- [ ] styled-components 이용
  - 인라인 스타일링이나 css 파일 스타일링 지양
  - 스타일링이 들어가는 경우에는 styled-components로 만들기
- [ ] 전역 스타일링에 reset.css 적용, `box-sizing : border-box` 설정
- [ ] styled-components에 props 넘겨서 조건부 스타일링
  - 아티스트 선택 탭에 적용
- [ ] 팬레터 등록 시 id는 `uuid` 라이브러리 사용
  - [npm 링크](https://www.npmjs.com/package/uuid)

## 선택 구현 사항

- 모달
  - `window.alert` 나 `window.confirm` 대신 모달 적용
- 만능 버튼
  - 하나의 버튼 컴포넌트가 홈과 상세화면 모두에서 적용되게 구현
  - props 로 버튼 크기, 텍스트 등 받기
- 로컬 스토리지
- 검색 기능
  - query string 적용해보기
  - `react-router-dom` 의 `useSearchParams` 훅 사용

## 조건

### props drilling -> Context API -> Redux 순으로 별도 브랜치 만들어 진행 및 제출

- `props-drilling` 브랜치에서는 `useState`만으로 상태관리
- 완성 후 `context` 브랜치로 이동
- 현재 코드에서 context API 이용하는 코드로 리팩토링
- 완성 후 `redux` 브랜치로 이동
- redux 라이브러리를 이용한 코드로 리팩토링

## 과제 진행 순서

- [ ] 프로젝트 셋업
  - 디렉토리 생성 및 필요 컴포넌트 사전 작성
  - title 변경
  - `jsconfig.json` 에서 src 디렉토리 기준 절대경로 설정
- [ ] `props-drilling` 브랜치로 이동
- [ ] Router 셋업
- [ ] 홈 화면 UI : 배너 및 헤더 UI 구현
  - styled-components 조건부 스타일링
- [ ] 홈 화면 UI : dummy data 를 이용한 리스트 UI 구현
  ```json
  [
    {
      "createdAt": "2023-11-03T02:07:09.423Z",
      "nickname": "Dr. Clint Christiansen",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg",
      "content": "카리나1 Vitae recusandae tenetur debitis impedit ut dolorem atque reprehenderit magnam. Cum dolor magnam commodi qui perferendis. Vel temporibus soluta. Eum delectus blanditiis. Neque dicta non quod ex. Maiores aspernatur fuga reprehenderit a magni eaque fuga voluptatum hic.",
      "writedTo": "카리나",
      "id": "1"
    },
    {
      "createdAt": "2023-11-02T23:13:18.491Z",
      "nickname": "Chad Graham",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/298.jpg",
      "content": "지젤1 Ipsam aspernatur nostrum eos unde velit molestiae dolorem. Tenetur ullam nostrum pariatur. Et in eos. Harum commodi ipsa quaerat aspernatur quod dignissimos quae quidem sapiente.",
      "writedTo": "지젤",
      "id": "2"
    },
    {
      "createdAt": "2023-11-02T11:25:37.026Z",
      "nickname": "Tommy Abshire",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/646.jpg",
      "content": "윈터1 Itaque nihil quae neque itaque. Non a officiis ducimus nemo consectetur. Ducimus libero voluptatum consequuntur.",
      "writedTo": "윈터",
      "id": "3"
    },
    {
      "createdAt": "2023-11-02T16:06:34.150Z",
      "nickname": "Max Mayert",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/37.jpg",
      "content": "닝닝1 Sint qui eligendi repudiandae placeat maiores repudiandae assumenda repudiandae. Distinctio commodi iste. Qui architecto iusto.",
      "writedTo": "닝닝",
      "id": "4"
    },
    {
      "createdAt": "2023-11-03T05:40:17.575Z",
      "nickname": "Olga Christiansen",
      "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/720.jpg",
      "content": "카리나2 Molestiae saepe reiciendis saepe natus quo occaecati. Vel vero illum quo. Ducimus maiores porro optio illum officia nam. Cum possimus aut consequatur eaque libero ad nihil pariatur officiis.",
      "writedTo": "카리나",
      "id": "5"
    }
  ]
  ```
  - 팬레터 내용은 한 줄 까지만 표현
- [ ] 팬레터 입력창(AddForm) 작성하여 팬레터 등록 기능 구현
  - 닉네임 및 내용 입력, 아티스트 선택
  - 아바타 이미지 업로드는 선택
  - 내용 유효성 검사
  - 닉네임, 내용 입력에 최대 글자수 제한
- [ ] 팬레터 클릭 시 `id`값으로 상세화면 이동
- [ ] 상세화면 UI
  - 내용 전체 보이게
  - 수정, 삭제 기능 버튼
  - 홈 화면 아바타 이미지와 버튼과 동일한 공용 컴포넌트 적용 (??)
- [ ] 팬레터 삭제 기능
  - 삭제버튼 클릭 시 확인 후 삭제처리
  - 삭제 확인 시 홈 화면으로 `navigate`
  - 남겨진 팬레터 없으면 팬레터 없음 문구 표시
- [ ] 펜레터 수정 기능
  - 버튼 클릭 시 수정 가능한 textarea 나오게
  - 기존의 내용이 입력되어있도록
  - 수정사항 없이 수정완료 누를 시 '수정 사항 없습니다' 알림
  - 수정완료 / 취소 버튼
- [ ] `context` 로 브랜치 이동 및 리팩토링
- [ ] `redux` 로 브랜치 이동 및 리팩토링
- [ ] 선택구현사항 도전!
