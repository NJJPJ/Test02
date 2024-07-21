

리액트는 3000 포트
springboot는 80 포트 사용해야 합니다.

프로젝트 폴더 안 src -> main -> frontend 폴더에서 콘솔 열고 npm start 하고
스프링부트 폴더 안 Test01Application에서도 스프링부트 서버 시작해야합니다.

리액트와 스프링부트는 별개의 서버이며 CORS proxy 설정을 통해 서로 소통합니다. 현재 RESTController만 만들어져있고 RestAPI 형식으로 통신하게 해놨습니다.
리액트를 실행하면 anxios 통신으로 /index 요청 날려서 메시지만 return 받아서 출력하는 것으로 만들어 놨습니다.

현재는 개발 단계이므로 이렇게 나누어 놨으며 배포 단계에서는 gradle에 추가하여서 jar 파일 생성 후 합쳐서 빌드하면 localhost:80 에서 동작 가능합니다.

