let classmates = ["철수","영희","훈이"]
//undefined
classmates
//(3) ['철수', '영희', '훈이']
classmates[0]
//'철수'
classmates[1]
//'영희'
classmates[2]
//'훈이'
classmates.includes("훈이")
//true
classmates.includes("맹구")
//false
classmates.length
//3
classmates.push("맹구")
// 4
classmates[3]
// '맹구'
classmates.push("맹구")
// 5
classmates.pop()
// '맹구'
classmates.pop()
// '맹구'
classmates.length
// 3
classmates
// (3) ['철수', '영희', '훈이']

let developer =["열정","창의력","집중력","끈기","도전"]
let dream = ["커리어점프","성공","할수있다"]

developer.concat(dream)
//(8) ['열정', '창의력', '집중력', '끈기', '도전', '커리어점프', '성공', '할수있다']
let result = developer.concat(dream)
