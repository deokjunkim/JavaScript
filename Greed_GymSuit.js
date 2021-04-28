function solution(n, lost, reserve) {   
    // n : 전체 학생의 수
    // lost : 도난당한 학생들의 번호가 담긴 배열
    // reserve : 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열

    // 도난당한 학생이면서 여벌의 체육복을 가지고 있는 학생
    let answer  = n - lost.length;
    for(let i = 0; i < lost.length; i++){
        for(let y = 0; y < reserve.length; y++){
            if(lost[i] == reserve[y]){
                answer++;
                reserve.splice(y,1);
                lost.splice(i,1);
                break;
            }
        }
    }

    // 도난당한 학생이고 여벌의 체육복이 없는 학생
    for(let i = 0; i < lost.length; i++){
        for(let y = 0; y < reserve.length; y++){
            if(lost[i] == reserve[y] - 1){
                answer++;
                reserve.splice(y,1);
                break;
            }
            else if(lost[i] == reserve[y] + 1){
                answer++;
                reserve.splice(y,1);
                break;
            }
            else if(lost[i] == reserve[y]){
                answer++;
                reserve.splice(y,1);
                break;
            }
        }
    }
    return answer;
}