1. noscript error
자바스크립트 로딩 실패
지금까지의 분석을 종합해보면, 문제의 가장 유력한 원인은 package.json의 homepage 경로 끝에 슬래시(/)가 누락되었던 것입니다. 제가 방금 그 부분을 수정했습니다.