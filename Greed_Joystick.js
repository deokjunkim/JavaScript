'use strict';
function solution(name) {
    const arrName = name.split("");    
    
    let check = true;    
    let arrInfo = {};
    arrInfo.lrCheck =false;
    arrInfo.totalCount = 0;
    arrInfo.idx = 0;
    let answer = 0;
    
    while(check){
        arrInfo.count = 0;
        
        arrInfo = UpAndDown(arrName, arrInfo.idx, arrInfo.totalCount, arrInfo.lrCheck);
        answer += arrInfo.count;
 
        if(arrInfo.totalCount == arrName.length){
            break;
        }

        arrInfo.count = 0;
        if(!arrInfo.lrCheck){
            arrInfo = lefAndRigt(arrName, arrInfo.idx, arrInfo.totalCount);
        }
        else{
            console.log('LEFT!');
            arrInfo.idx --;
            arrInfo.count ++;
            console.log(arrInfo);
            console.log();
        }
        answer += arrInfo.count;
 
        if(arrInfo.totalCount == arrName.length){
            break;
        }
 
        // console.log(arrInfo.idx, arrInfo.count);
 
    }
    console.log('ANSWER!!! : ', answer);
    return answer;
}
 
function lefAndRigt(arrName, idx, totalCount){
    console.log('lefAndRigt');
    let returnObj= {}
    let aCount = 0;
    let tIdx = idx;
    for(let i = idx+1; i < arrName.length; i ++){
        if(arrName[i] == 'A'){    
            aCount ++;
            tIdx++;
        }
        else{
            tIdx++;
            break;
        }
    }
    totalCount += aCount;
    // Left
    console.log('aCount : ', aCount);
    console.log('idx : ', idx);
 
    if(aCount == arrName.length - (idx+1)){
        returnObj.totalCount = totalCount;        
        returnObj.count = 0;
    }
    else if(aCount + 1 > arrName.length + idx - tIdx ){        
        for(let i=0 ; i< idx+1; i++){
            console.log('LEFT!');
        }
        returnObj.totalCount = totalCount;
        returnObj.lrCheck = true;
        returnObj.idx = arrName.length-1;
        returnObj.count = idx+1;        
    }
    // Right
    else{
        for(let i=0 ; i< aCount+1; i++){
            console.log('RIGHT!');
        }
        returnObj.totalCount = totalCount;
        returnObj.lrCheck = false;
        returnObj.idx = aCount>0 ? idx+aCount+1:idx+1;
        returnObj.count = aCount>0 ? aCount+1:1;        
    }
    console.log(returnObj);
    console.log();
    return returnObj;
 
}
 
function UpAndDown(arrName, idx, totalCount, lrCheck){
    console.log('UpAndDown');
    let returnObj= {}
    const ACode = 65;
    let nameCode = 0;
    let count = 0;    
    console.log(idx);
    nameCode = arrName[idx].charCodeAt();
    // console.log(arrName[idx],' : ', nameCode);
    // console.log('A : ', ACode);
    let cha = nameCode - ACode;
    console.log('CHA : ', cha);
    if(cha > 13){    
        console.log('DOWN!');
        count += (26 - (cha));
    }
    else if(cha != 0){
        console.log('UP!');
        count += (cha);
    }    
    returnObj.totalCount = totalCount + 1;
    returnObj.idx = idx;
    returnObj.count = count;
    returnObj.lrCheck = lrCheck;
    console.log(returnObj);
    console.log();
    return returnObj;
}
 
solution("JEROEN");
// console.log();
solution("JAN");
// console.log();
solution("JAZ");
// console.log();
solution("BBBBBB");