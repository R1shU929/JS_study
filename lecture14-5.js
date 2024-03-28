// 14-5 네트워크 통신 활용
// fetch api
// fetch 메서드
// 네트워크 통신으로 원격에 요청을 보내고 답을 받아오는 프로미스를 반환
fetch("https://showcases.yalco.kr/javascript/mockserver/race-result")
  .then((response) => {
    console.log(response);
    return response;
  })
  .then((response) => response.json())
  .then(console.log);
// 반환되는 결과 ( response )
// 요청의 결과에 대한 정보들을 담은 객체 !
// json 메서드 - 결과의 body로 받은 텍스트를 JSON 객체로 변환하여 반환
