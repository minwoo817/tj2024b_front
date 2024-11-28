/*
    중간과제 9: 기계식 주차장 시스템 구현
        [요구사항]
        1. 주차할 수 있는 총 차량 대수는 20대입니다.
        2. 차량 번호와 주차할 위치를 클릭/입력받아 [입차] 버튼 클릭한다.
            단] 해당 위치에 입차된 차량이 존재하면 '입차불가' 안내 출력 아니면 '입차성공' 안내 출력
        3. 차량번호를 입력받아 [출차] 버튼 클릭한다.
            단] 출차 되는 차량의 위치와 주차료(금액) 안내 출력
            단] 금액은 1초당 100원 계산, 단 하루가 지나지 않는 조건
        ======================================================================================
        [개발순서]
        1. 프론트엔드 html 구성
        2. JS 메모리 구성(배열/변수/CSV)
        3. 함수 구성(함수명, 실행조건, 매개변수 판단)
        4. 각 함수별 기능 구현, 코드 작성
        5. 각 함수별 기능 구현 후 HTML(onclick) 연동
        6. 테스트
*/
let 주차 = []
function 차량함수(){
    let carnum = document.querySelector('.carNum').value;
    let carplace = document.querySelector('.carPlace').value;
    let board = `${carnum},${carplace}`
    주차.push(board);

    입차함수();
}

function 입차함수(){
    let carin = document.querySelector('.carIn');
    let html = ''
    for(let i = 0; i <= 주차.length - 1; i++){
        let board = 주차[i];
        if( 주차.indexOf( carplace ) != -1 ){  
            alert( '입차불가' ); 
            continue;
        }
        else{
            alert('입차성공');
        }
    }
    body.innerHTML = html;
}
