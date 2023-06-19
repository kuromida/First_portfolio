const fruits = [
    {number: 1, title:"레드향" },
    {number: 2, title:"샤인머스켓"},
    {number: 3, title:"산청딸기"},
    {number: 4, title:"한라봉"},
    {number: 5, title:"사과"},
    {number: 6, title:"애플망고"},
    {number: 7, title:"딸기"},
    {number: 8, title:"천혜향"},
    {number: 9, title:"과일선물세트"},
    {number: 10, title: "귤"},
]
fruits[0]
//{number: 1, title: '레드향'}

for (let i = 0 ; i<fruits.length; i++){
    console.log(fruits[i].number , fruits[i].title);
}
//VM4524:2 1 '레드향'
//VM4524:2 2 '샤인머스켓'
//VM4524:2 3 '산청딸기'
//VM4524:2 4 '한라봉'
//VM4524:2 5 '사과'
//VM4524:2 6 '애플망고'
//VM4524:2 7 '딸기'
//VM4524:2 8 '천혜향'
//VM4524:2 9 '과일선물세트'
//VM4524:2 10 '귤'
for (let i = 0 ; i<fruits.length; i++){
    console.log(fruits[i].number +" "+fruits[i].title);
}
//1 레드향
//2 샤인머스켓
//3 산청딸기
//4 한라봉
//5 사과
//6 애플망고
//7 딸기
//8 천혜향
//9 과일선물세트
//10 귤
//undefined