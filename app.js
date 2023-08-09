const question=[{
    'Que':'whice is the following is markup language',
    'a':'HTML',
    'b':'CSS',
    'c':'JAVASCRIPT',
    'd':'PHP',
    'correct':'a'
},
{
    'Que': "which year was javascript launched?",
    'a': "1996",
    'b': "1995",
    'c': "1994",
    'd': "none of above",
    'correct':'b'
},
{
    'Que':"What does the css stand for?",
      'a':"HYPERTEXT MARKUP LANGUAGE",
      'b':" CASCADING STYLE SHEET",
      'c':" JASON OBJECT NOTATION",
      'd':"HELOCOPTER TERMINAL MOTARBOARD LAMBORGANI",
      'correct':"b",
}
]
let index=0;
let total=question.length;
let right=0,
wrong=0;
const quesBox=document.getElementById("quesBox")
const optionInputs=document.querySelectorAll('.option')
const loadQuestion=()=>{
    if(index===total){
        return endQuiz()
    }
    reset()
    const data=question[index]
    // console.log(data)
    quesBox.innerText=`${index+1}${data.Que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}
const submitQuiz = () =>{
    const data=question[index];
    const ans=getAnswer()
    if (ans===data.correct){
        right++;
    }else{
        wrong++;
}
index++;
loadQuestion();
return;
}
const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                console.log(input.value)
                answer= input.value;
                }
            }
     )
     return answer;
}
const reset =()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
    <h3>Thanks for play the quiz</h3>
    <h2>${right}/ ${total}  are correct</h2>
    </div>`
}
//initial call
loadQuestion();