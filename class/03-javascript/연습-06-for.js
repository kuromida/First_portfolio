let persons = [
    { name : "철수", age: 17},
    { name :"영희", age:22 },
    { name :"도우너", age:5},
    { name :"그루트", age:65},
    { name :"도비", age: 3}
]

for (let count = 0 ; count <persons.length ; count++){

    if(persons[count].age >= 19){
        console.log("성인입니다.")
    }else{
        console.log("미성년자입니다.")
    }
}
//VM3193:6 미성년자입니다.
//VM3193:4 성인입니다.
//VM3193:6 미성년자입니다.
//VM3193:4 성인입니다.
//VM3193:6 미성년자입니다.
for (let count = 0 ; count <persons.length ; count++){

    if(persons[count].age >= 19){
        console.log(persons[count].name+"님은 성인입니다.")
    }else{
        console.log(persons[count].name+"님은 미성년자입니다.")
    }
}
//VM3389:6 철수님은 미성년자입니다.
//VM3389:4 영희님은 성인입니다.
//VM3389:6 도우너님은 미성년자입니다.
//VM3389:4 그루트님은 성인입니다.
//VM3389:6 도비님은 미성년자입니다.



const fruits = [
    { name: 1, title: "레드향"},
    { name: 2, title: "샤인머스캣"},
    { name: 3, title: "산청딸기"},
    { name: 4, title: "한라본"},
    { name: 5, title: "사과"},
    { name: 6, title: "애플망고"},
    { name: 7, title: "딸기"},
    { name: 8, title: "천혜향"},
    { name: 9, title: "과일선물세트"},
    { name: 10, title: "귤"},
];

for ( let cnt = 0 ; cnt <fruits.length ; cnt++){
    console.log(fruits[cnt].name +' '+fruits[cnt].title)
}

for ( let cnt = 0 ; cnt <fruits.length ; cnt++){
    console.log(`${fruits[cnt].name} ${fruits[cnt].title}`)
}

//  `   ` 은 문자와 변수 합쳐쓸때 사용하기 유용
// 1 레드향
// 2 샤인머스캣
// 3 산청딸기
// 4 한라본
// 5 사과
// 6 애플망고
// 7 딸기
// 8 천혜향
// 9 과일선물세트
// 10 귤


Math.floor( Math.random() * 1000000 )
93819
String (Math.floor( Math.random() * 1000000 ))
//'917706'
String (Math.floor( Math.random() * 1000000 ))
//'27280'
String (Math.floor( Math.random() * 1000000 ))
//'799965'
String (Math.floor( Math.random() * 1000000 ))
//'368147'
String (Math.floor( Math.random() * 1000000 ))
//'145552'
String (Math.floor( Math.random() * 1000000 ))
//'625617'
String (Math.floor( Math.random() * 1000000 )).padStart(6,"0")
//'015942'

//padstart(6,"0") : 6자리가 되지 않았다면 맨앞에 0을 넣어라 
let result = String (Math.floor( Math.random() * 1000000 )).padStart(6,"0")
result
//'398457'


