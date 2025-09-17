var store = [{
        "title": "MySQL 쿼리",
        "excerpt":"데이터베이스를 다루다 보면 SQL 쿼리 작성이 필수가 됩니다. 특히 MySQL을 사용할 때 자주 쓰이는 구문과 함수들을 정리해두면 실무에서 큰 도움이 됩니다. 이번 글에서는 SELECT 문의 기본 구조부터 문자열, 날짜, 숫자, 조건식 함수까지 MySQL에서 자주 사용하는 SQL 쿼리들을 예제와 함께 정리해보겠습니다. 💡 참고사항 이 글의 모든 예제는 MySQL 8.0 기준으로 작성되었습니다....","categories": ["SQL"],
        "tags": ["SQL","MySQL","Database","쿼리"],
        "url": "/asterisk/sql/SQL-%EC%BF%BC%EB%A6%AC/",
        "teaser": "/asterisk/assets/imgs/teaser.png"
      },{
        "title": "정규표현식 기초",
        "excerpt":"정규표현식(Regular Expression, 줄여서 Regex)은 문자열에서 특정 패턴을 찾고, 검사하고, 치환하기 위한 표현법입니다. 프로그래밍, 데이터 분석, 로그 검색, 웹 크롤링 등 다양한 분야에서 필수적으로 사용됩니다. 저의 경우 데이터 색인 시에 특정 데이터(날짜나 이름 등)의 형태를 변환할 때 주로 사용합니다. 1. 문자열의 시작과 끝 패턴 설명 예시 ^x 문자열이 x로 시작 ^Hello...","categories": ["정규표현식"],
        "tags": ["Regex","정규표현식","문자열"],
        "url": "/asterisk/%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D/%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D/",
        "teaser": "/asterisk/assets/imgs/teaser.png"
      },{
        "title": "FlowFile 조작을 위한 프로세서 비교",
        "excerpt":"NiFi 데이터 파이프라인에서 FlowFile 콘텐츠를 변환하고 보강하는 작업은 핵심적인 단계입니다. 이 과정에서 어떤 프로세서를 선택하느냐에 따라 파이프라인의 성능과 유지보수성이 크게 달라질 수 있습니다. 이번 포스트에서는 ReplaceText, ReplaceTextwithMapping, UpdateRecord, JoltTransformJSON 등 주요 FlowFile 편집 프로세서들의 특징과 사용법을 자세히 살펴보겠습니다. 1. ReplaceText - 간단한 텍스트 치환 특징 FlowFile에서 원하는 값을 직접 입력하여...","categories": ["Nifi"],
        "tags": ["Nifi","FlowFile","DataProcessing","ETL"],
        "url": "/asterisk/nifi/flowfile-%ED%8E%B8%EC%A7%91%EC%9A%A9-%ED%94%84%EB%A1%9C%EC%84%B8%EC%84%9C/",
        "teaser": "/asterisk/assets/imgs/teaser.png"
      },{
        "title": "Remote Process Group으로 중첩 데이터 구조 간소화",
        "excerpt":"NiFi에서 데이터 플로우를 설계할 때, 관련된 프로세서들을 묶어 논리적으로 명확한 파이프라인을 구성할 수 있게 해주는 ‘프로세스 그룹(Process Group)’은 필수적인 기능입니다. 그러나, 여러 프로세스 그룹에서 처리된 결과를 최종적으로 로깅하거나 통합 처리해야 하는 경우에는 문제가 발생합니다. 각 중첩 레벨마다 Output Port를 만들어 외부로 데이터를 꺼내오는 방식은 그룹의 깊이가 깊어질수록 설정이 번거로워지고 전체...","categories": ["Nifi"],
        "tags": ["Nifi","FlowFile"],
        "url": "/asterisk/nifi/Remote-Process-Group%EC%9C%BC%EB%A1%9C-%EC%A4%91%EC%B2%A9-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B5%AC%EC%A1%B0-%EA%B0%84%EC%86%8C%ED%99%94/",
        "teaser": "/asterisk/assets/imgs/teaser.png"
      }]
