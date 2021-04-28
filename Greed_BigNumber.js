function solution(number, k) {
    let arry = number.split("");
    let answerSize = arry.length - k;
    // answerArry의 자리수는 answerArry - answerArry의 idx
    let answerArry = new Array(answerSize);
    let answer = "";
    
    let stIdx = 0;
    for(let i = 0; i < answerArry.length; i ++){
        //let digits_answ = answerArry.length - i;
        let maxNum = 0;
        for(let y = stIdx ;y < arry.length; y++){
            //let digits_arry = arry.length - y;
            // 조건 1. number에서의 자리수가 answerArray의 자리수보다 크거나 같다

            if(arry.length - y >= answerArry.length - i){
                if(maxNum < arry[y]){
                    maxNum = parseInt(arry[y]);
                    stIdx = y+1;
                }
            }
        }
        answer += String(maxNum);
    }
    
    return answer;
}


solution("1924",2) //94
solution("1231234",3) // 3234
solution("4177252841",4) //"775841"
