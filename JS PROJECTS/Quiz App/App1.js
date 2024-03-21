const questions = [
    {
        'Que': 'If Facebook were a country, how big would it be in terms of population (members)?' ,
        'a' : '.3 million' ,
        'b' : ' 1 billion'  ,
        'c' : ' 1.4 billion'  ,
        'd' : ' 7 billion' ,
        'correct' : 'b'
    },
    {
        'Que': 'World-wide, what language is used the most on the internet?' ,
        'a' : 'German' ,
        'b' : 'English'  ,
        'c' : 'Spanish'  ,
        'd' : 'Chinese' ,
        'correct' : 'b'
    },
    {
        'Que': 'Which of these is not a social media platform?' ,
        'a' : 'Instagram' ,
        'b' : 'Twitter'  ,
        'c' : 'YouTube'  ,
        'd' : 'All of These' ,
        'correct' : 'd'
    },
    {
        'Que': 'If Wikipedia were a book, how many pages would it be?' ,
        'a' : '400 million' ,
        'b' : ' 1 billion'  ,
        'c' : '2 million'  ,
        'd' : '200 thousand' ,
        'correct' : 'c'
    },
    {
        'Que': 'What does HTML stand for?' ,
        'a' : 'Hyper Text Markup Language' ,
        'b' : 'High Text Markup Language'  ,
        'c' : 'Home Tool Markup Language'  ,
        'd' : 'Hyperlinks and Text Markup Language' ,
        'correct' : 'a'
    },
    {
        'Que': 'Which tag is used to define an unordered list in HTML?' ,
        'a' : '<ul>' ,
        'b' : '<ol>'  ,
        'c' : '<li>'  ,
        'd' : '<pl>' ,
        'correct' : 'a'
    },
    {
        'Que': 'What does the "<img>" tag represent in HTML?' ,
        'a' : 'image' ,
        'b' : 'paragraph'  ,
        'c' : 'Link'  ,
        'd' : 'List' ,
        'correct' : 'a'
    },
    {
        'Que': 'Which HTML element is used to define important text?' ,
        'a' : '<strong>' ,
        'b' : '<em>' ,
        'c' : '<i>'  ,
        'd' : '<b>' ,
        'correct' : 'a'
    },
    {
        'Que': 'What does CSS stand for?' ,
        'a' : 'Cascading Style Script' ,
        'b' : 'Creative Style Sheet'  ,
        'c' : 'Cascading Style Sheets'  ,
        'd' : 'Computer Style Syntax' ,
        'correct' : 'c'
    }, {
        'Que': 'Which property is used to change the text color in CSS?' ,
        'a' : 'text-color' ,
        'b' : 'color'  ,
        'c' : 'font-color'  ,
        'd' : 'text-style' ,
        'correct' : 'b'
    }, {
        'Que': 'What does the "box-sizing" property in CSS do?' ,
        'a' : `Adjusts the width of an element's border` ,
        'b' : `Determines how an element's box model is calculated`  ,
        'c' : ' Sets the spacing between elements'  ,
        'd' : 'Controls the rotation of an element' ,
        'correct' : 'a'
    }, {
        'Que': 'Which of the following is NOT a valid CSS selector?' ,
        'a' : '.class' ,
        'b' : '#id'  ,
        'c' : 'elementName'  ,
        'd' : '*all' ,
        'correct' : 'd'
    }, {
        'Que': 'Which property is used to specify the font family in CSS?' ,
        'a' : 'font-style' ,
        'b' : 'text-font'  ,
        'c' : 'font-family'  ,
        'd' : 'typeface' ,
        'correct' : 'a'
    }, {
        'Que': 'What is the correct way to declare a variable in JavaScript?' ,
        'a' : 'var myVariable;' ,
        'b' : 'let myVariable'  ,
        'c' : 'const myVariable;'  ,
        'd' : 'all of the above' ,
        'correct' : 'd'
    }, {
        'Que': 'Which attribute is used to specify the URL of the page the link goes to in HTML?' ,
        'a' : 'src' ,
        'b' : 'href'  ,
        'c' : 'link'  ,
        'd' : 'url' ,
        'correct' : 'b'
    }, {
        'Que': 'Which method is used to add a new element to the end of an array in JavaScript?' ,
        'a' : 'push()' ,
        'b' : 'append()'  ,
        'c' : 'addToEnd()'  ,
        'd' : 'insert()' ,
        'correct' : 'a'
    }, 
     {
        'Que': `What does the 'typeof' operator return when applied to a function in JavaScript?` ,
        'a' : `"function"` ,
        'b' : `"object"` ,
        'c' : `"undefined"`  ,
        'd' : 'array' ,
        'correct' : 'a'
    }, {
        'Que': `What is the purpose of the 'querySelector()' method in JavaScript? ` ,
        'a' : 'To select multiple elements by class name' ,
        'b' : 'To select multiple elements by tag name'  ,
        'c' : 'To select a single element by its ID'  ,
        'd' : 'To select a single element by its class name' ,
        'correct' : 'c'
    },
    {
        'Que': `Which event is triggered when a user clicks on an HTML element in JavaScript? ` ,
        'a' : 'hover' ,
        'b' : 'change'  ,
        'c' : 'click'  ,
        'd' : 'submit' ,
        'correct' : 'c'
    },
    {
        'Que': `What is the function of the WHERE clause in a MySQL query?` ,
        'a' : 'To specify the columns to be retrieved' ,
        'b' : 'To specify the table to be updated'  ,
        'c' : 'To filter rows based on a condition'  ,
        'd' : 'To sort the result set' ,
        'correct' : 'c'
    },
    {
        'Que': `Which SQL function is used to find the total number of rows in a table? ` ,
        'a' : 'COUNT()' ,
        'b' : 'SUM()'  ,
        'c' : 'AVG()'  ,
        'd' : 'MAX()' ,
        'correct' : 'a'
    },
    {
        'Que': `What does the INNER JOIN keyword do in MySQL? ` ,
        'a' : ' Combines rows from two or more tables based on a related column' ,
        'b' : ' Retrieves all rows from both tables, regardless of any matching criteria'  ,
        'c' : ' Deletes all rows from a table'  ,
        'd' : 'Updates rows in one table based on a related column in another table' ,
        'correct' : 'a'
    },
    {
        'Que': `Which SQL command is used to make permanent changes to the data in a MySQL database? ` ,
        'a' : 'ALTER' ,
        'b' : 'COMMIT'  ,
        'c' : 'ROLLBACK'  ,
        'd' : ' UPDATE' ,
        'correct' : 'b'
    },
    {
        'Que': `Which keyword is used to retrieve data from a MySQL database? ` ,
        'a' : 'SELECT' ,
        'b' : 'UPDATE'  ,
        'c' : 'INSERT'  ,
        'd' : 'DELETE' ,
        'correct' : 'a'
    },   
]
let index = 0;
let total = question.length;
let right = 0 , wrong =0 ;
const queBox = document.getElementById("queBox")
const optionInputs  = document.querySelectorAll('.options')
const loadQuestion =()=>{
    if(index===total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
    console.log(data);
    queBox.innerText =`${index+1} ${data.Que}`;
    optionInputs[0].nextElementSibling.innerText= data.b;
    optionInputs[1].nextElementSibling.innerText= data.c;
    optionInputs[2].nextElementSibling.innerText= data.a;
    optionInputs[3].nextElementSibling.innerText= data.d;
}
const submitQuiz =()=>{
    const ans = getAnswer()
    //console.log(ans,data.correct)
    if(ans=== data.correct){
        right++;
    } else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;

}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input)=> { 
            if(input.checked){
                answer =input.value;
            }

        }
        ) 
        return answer;
    } 
const reset=()=>{
    optionInputs.forEach(
        (input) =>{
            input.checked = false;
        }
    )
};
const endQuiz = () => {
    document.getElementById("box").innerHTML=`
    <div style ="text-align : center">
    <h3> Thank-You ❤️ </h3>
    <h2> ${right} / ${total} are correct </h2>
    </div>
    `
}
//initial CAll
loadQuestion();