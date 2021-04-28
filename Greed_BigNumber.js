function solution(number, k) {
    let arry = number.split("");
    arry.sort();
    console.log(arry);
    let answer = "";
    for(let i = 0 ; i < arry.length-k ; i ++){
        answer += arry[arry.length - (1 + i) ];
    }
    console.log(answer);
    return answer;
}

solution("1924",2) //94
solution("1231234",3) // 3234
solution("4177252841",4) //"775841"
