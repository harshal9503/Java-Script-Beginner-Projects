const quizData = [
    {
        'question': 'If Facebook were a country, how big would it be in terms of population (members)?' ,
        'a' : '.3 million' ,
        'b' : ' 1 billion'  ,
        'c' : ' 1.4 billion'  ,
        'd' : ' 7 billion' ,
        'correct' : 'b'
    },
    {
        'question': 'World-wide, what language is used the most on the internet?' ,
        'a' : 'German' ,
        'b' : 'English'  ,
        'c' : 'Spanish'  ,
        'd' : 'Chinese' ,
        'correct' : 'b'
    },
    {
        'question': 'Which of these is not a social media platform?' ,
        'a' : 'Instagram' ,
        'b' : 'Twitter'  ,
        'c' : 'YouTube'  ,
        'd' : 'All of These' ,
        'correct' : 'd'
    },
    {
        'question': 'If Wikipedia were a book, how many pages would it be?' ,
        'a' : '400 million' ,
        'b' : ' 1 billion'  ,
        'c' : '2 million'  ,
        'd' : '200 thousand' ,
        'correct' : 'c'
    },
    {
        'question': 'What does HTML stand for?' ,
        'a' : 'Hyper Text Markup Language' ,
        'b' : 'High Text Markup Language'  ,
        'c' : 'Home Tool Markup Language'  ,
        'd' : 'Hyperlinks and Text Markup Language' ,
        'correct' : 'a'
    },
    {
        'question': 'Which tag is used to define an unordered list in HTML?' ,
        'a' : '<ul>' ,
        'b' : '<ol>'  ,
        'c' : '<li>'  ,
        'd' : '<pl>' ,
        'correct' : 'a'
    },
    {
        'question': `What does the 'img' tag represent in HTML? ` ,
        'a' : 'image' ,
        'b' : 'paragraph'  ,
        'c' : 'Link'  ,
        'd' : 'List' ,
        'correct' : 'a'
    },
    {
        'question': 'Which HTML element is used to define important text?' ,
        'a' : '<strong>' ,
        'b' : '<em>' ,
        'c' : '<i>'  ,
        'd' : '<b>' ,
        'correct' : 'a'
    },
    {
        'question': 'What does CSS stand for?' ,
        'a' : 'Cascading Style Script' ,
        'b' : 'Creative Style Sheet'  ,
        'c' : 'Cascading Style Sheets'  ,
        'd' : 'Computer Style Syntax' ,
        'correct' : 'c'
    }, {
        'question': 'Which property is used to change the text color in CSS?' ,
        'a' : 'text-color' ,
        'b' : 'color'  ,
        'c' : 'font-color'  ,
        'd' : 'text-style' ,
        'correct' : 'b'
    }, {
        'question': 'What does the "box-sizing" property in CSS do?' ,
        'a' : `Adjusts the width of an element's border` ,
        'b' : `Determines how an element's box model is calculated`  ,
        'c' : ' Sets the spacing between elements'  ,
        'd' : 'Controls the rotation of an element' ,
        'correct' : 'a'
    }, {
        'question': 'Which of the following is NOT a valid CSS selector?' ,
        'a' : '.class' ,
        'b' : '#id'  ,
        'c' : 'elementName'  ,
        'd' : '*all' ,
        'correct' : 'd'
    }, {
        'question': 'Which property is used to specify the font family in CSS?' ,
        'a' : 'font-style' ,
        'b' : 'text-font'  ,
        'c' : 'font-family'  ,
        'd' : 'typeface' ,
        'correct' : 'a'
    }, {
        'question': 'What is the correct way to declare a variable in JavaScript?' ,
        'a' : 'var myVariable;' ,
        'b' : 'let myVariable'  ,
        'c' : 'const myVariable;'  ,
        'd' : 'all of the above' ,
        'correct' : 'd'
    }, {
        'question': 'Which attribute is used to specify the URL of the page the link goes to in HTML?' ,
        'a' : 'src' ,
        'b' : 'href'  ,
        'c' : 'link'  ,
        'd' : 'url' ,
        'correct' : 'b'
    }, {
        'question': 'Which method is used to add a new element to the end of an array in JavaScript?' ,
        'a' : 'push()' ,
        'b' : 'append()'  ,
        'c' : 'addToEnd()'  ,
        'd' : 'insert()' ,
        'correct' : 'a'
    }, 
     {
        'question': `What does the 'typeof' operator return when applied to a function in JavaScript?` ,
        'a' : `"function"` ,
        'b' : `"object"` ,
        'c' : `"undefined"`  ,
        'd' : 'array' ,
        'correct' : 'a'
    }, {
        'question': `What is the purpose of the 'querySelector()' method in JavaScript? ` ,
        'a' : 'To select multiple elements by class name' ,
        'b' : 'To select multiple elements by tag name'  ,
        'c' : 'To select a single element by its ID'  ,
        'd' : 'To select a single element by its class name' ,
        'correct' : 'c'
    },
    {
        'question': `Which event is triggered when a user clicks on an HTML element in JavaScript? ` ,
        'a' : 'hover' ,
        'b' : 'change'  ,
        'c' : 'click'  ,
        'd' : 'submit' ,
        'correct' : 'c'
    },
    {
        'question': `What is the function of the WHERE clause in a MySQL query?` ,
        'a' : 'To specify the columns to be retrieved' ,
        'b' : 'To specify the table to be updated'  ,
        'c' : 'To filter rows based on a condition'  ,
        'd' : 'To sort the result set' ,
        'correct' : 'c'
    },
    {
        'question': `Which SQL function is used to find the total number of rows in a table? ` ,
        'a' : 'COUNT()' ,
        'b' : 'SUM()'  ,
        'c' : 'AVG()'  ,
        'd' : 'MAX()' ,
        'correct' : 'a'
    },
    {
        'question': `What does the INNER JOIN keyword do in MySQL? ` ,
        'a' : ' Combines rows from two or more tables based on a related column' ,
        'b' : ' Retrieves all rows from both tables, regardless of any matching criteria'  ,
        'c' : ' Deletes all rows from a table'  ,
        'd' : 'Updates rows in one table based on a related column in another table' ,
        'correct' : 'a'
    },
    {
        'question': `Which SQL command is used to make permanent changes to the data in a MySQL database? ` ,
        'a' : 'ALTER' ,
        'b' : 'COMMIT'  ,
        'c' : 'ROLLBACK'  ,
        'd' : ' UPDATE' ,
        'correct' : 'b'
    },
    {
        'question': `Which keyword is used to retrieve data from a MySQL database? ` ,
        'a' : 'SELECT' ,
        'b' : 'UPDATE'  ,
        'c' : 'INSERT'  ,
        'd' : 'DELETE' ,
        'correct' : 'a'
    },   
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        <h4> Quiz is Created By Harshal</h4>
    </div>
`
}
loadQuestion(index);