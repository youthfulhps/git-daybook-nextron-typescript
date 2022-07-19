# git-daybook-nextron-typescript

## 2022.07.20

유저의 기간별 contributions을 가져오는 작업을 진행했다.
REST API로 제공되는 Github V2로 어떻게 이를 가져올 지가
고민이었는데, 기여한 레포지토리를 모두 순회해야 했고, 이에 대한
링크별 기여를 모두 체크해주어야 하는 구조이다.
한편, Github V4는 POST의 body에 쿼리를 담아 graphql을
형성하면, 이에 대한 원하는 값만 응답을 받을 수 있다.

선언적 비동기를 위해 Suspense를 사용했다.
완성 후에 반드시 Suspense의 진가를 깊게 공부할 필요가 있다.

'Suspense로 상위 컴포넌트를 감싸고, 그 컴포넌트 트리 안의
컴포넌트가 비동기 작업의 완료를 대기하고 있다면,
suspense는 알아서 주어진 fallback element를
보여준 후 비동기 작업이 완료됨에 따라 fulfill된 컴포넌트
트리를 보여준다.'

Suspense를 창안한 Sebastian Markbåge의 [runPureTask](https://gist.github.com/sebmarkbage/2c7acb6210266045050632ea611aebee)는
'특정 비동기 로직의 상태를 success, Fail 완결이 날때까지
계속 기다린다. React는 컴포넌트의 데이터 요청 상태를 계속 확인하고 렌더링을 시도한다.'

'Suspense의 진가는 이렇게 구구절절히 설명하기 보다 위의 swr, react-query의 suspense와의 콤비네이션을 직접 확인하는 것이 확실하다. 아래 두 코드를 보면 비동기 데이터 훅이 많으면 많을수록, 그리고 로딩 상태의 컴포넌트들이 트리에 많이 중첩되어 있을수록 suspense가 얼마나 코드를 선언적으로 만들어주는지 체감할 수 있을 것이다. 두 번째 코드에서 Child는 자신이 비동기 리소스를 사용하고 있다는 사실을 아예 몰라도 Root에서 적절히 처리된다는 사실에 주목하자.'

### reference

[Github GraphQL API](https://docs.github.com/en/graphql)

[Suspense for Data Fetching의 작동 원리와 컨셉 (feat.대수적 효과)](https://maxkim-j.github.io/posts/suspense-argibraic-effect)

[2021 상반기 회고록/#Concurrent Features & Suspense](https://blog.appleseed.dev/post/2021-spring-retrospection/#concurrent-features--suspense)
