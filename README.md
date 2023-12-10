


## 🙌 회원가입 기능 구현
발란 FE 사전 과제 프로젝트입니다. 🔗 [<u>**[배포 링크]**</u>](https://dev-glennn.github.io/SignUp-Page-Nuxt3/)
![예시 이미지](https://i.ibb.co/1zkSt2X/image.png)


## 01. 개발환경
- node.js v18.18.0
- Nuxt3
- Vue 3.3.11



## 02. 설치 및 실행
### 의존성 패키지 실행
```bash
yarn install
```
### 개발 환경 실행
``` bash
yarn dev
````
### 프로덕션 환경 실행
```bash
# 빌드
yarn build
# 실행
yarn preview
```



## 03. 사용 패키지
- **ESlint, prettier** : 일관성 있는 코딩 스타일과 코드 품질을 유지하기 위해 ESLint와 Prettier를 함께 사용했습니다.

- **Pinia** : 회원가입 시 작성한 데이터를 이전/다음과 같은 버튼으로 페이지를 이전하여도 데이터를 가지고 있기위해 사용했습니다.
한페이지에서 props, emits을 통하여 component 간 데이터 교환을 할 수도 있지만, 각 컴포넌트에서 컴포저블하게 상태관리 하고자 사용했습니다.

- **gh-pages** : 배포를 위하여 사용했습니다.

- **tailwindcss** : tailwindcss는 Utility-First 컨셉을 가진 CSS 프레임워크로 일관된 디자인으로 컴포넌트 스타일링을 더욱 쉽고 유연하게 처리하기 위하여 사용했습니다.



## 04. 요구사항 체크리스트
- [x] 이메일, 비밀번호 유효성 체크
- [x] 이름, 연락처 유효성 체크
- [x] 카드번호 유효성 체크
- [x] 다음, 이전 기능 구현 (이전 시에도 데이터가 유실되지 않도록 필요)
- [x] 다음 우편번호 API를 이용하여 주소 연결
- [x] 회원가입 완료 시 받은 데이터를 노출



## 05. TASK 일정 관리
![TASK 일정 관리](https://i.ibb.co/FnLW6Lk/2023-12-10-4-24-50.png)   



## 🐈‍⬛ 느낀점
>기존에 사용하던 Nuxt2, SCSS, Vuex와 다르게 이번에 사용해본 Nuxt3, tailwindcss, pinia는 각자의 장점이 확연히 드러나서 매력적이였다.

> React에서 사용하던 custom Hook을 기존 Nuxt2에도 사용해보고 싶었는데, Options API를 사용하다보니 구조상 어떤식으로 적용해야 깔끔할지 고민이 많았었는데 Composition API로 개발해보니 React와 비슷하게 구조를 잡을 수 있어서 깔끔했다.

> github pages에 개발 프로젝트를 배포하는 방법도 생각보다 간단했고 *(여러번의 Fix를 겪었ㅈㅣ만..)* 이 다음에는 CI/CD도 적용하여 브랜치와 연동해보고 싶다.

>React에서만 사용해보던 TypeScript를 Nuxt에도 도입해보니 매번 다르게 받아왔던 Type 값 때문에 골치가 아팠었는데, 마음이 한결 편해졌다.
