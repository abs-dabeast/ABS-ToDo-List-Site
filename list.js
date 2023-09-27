const container = document.querySelector('.container');
const display = document.querySelector('.display')
// const createParagraphTag = document.createElement('p')

// // // adding txt inside the p tag
// // createParagraphTag.innerText = 'I\'m a paragraph tag.'
// // console.log(createParagraphTag);

// // // container.appenchild(createParagraphTag

// // // container.appendChild(createParagraphTag)
// // console.log(container);

// const createParagraphTag = document.createElement('p')

// createParagraphTag.innerText = 'beans'
// container.appendChild(createParagraphTag)
// console.log(container);
// const container = document.querySelector('.container')
// const createParagraphTag = document.createElement('p')
// const createBeans = document.createElement('p')
// createBeans.innerText = 'egg'
// createParagraphTag.innerText = 'ewagoin'
// // container.append(createParagraphTag, createBeans)
// // console.log(container);

// const createBeansTag = document.createElement('p')
// const createBreadTag = document.createElement('p')
// const createEggsTag = document.createElement('p')



// // adding text
// createBeansTag.innerText = 'i\'m the beans paragraph';
// createBreadTag.innerText = 'i\'m the bread paragraph';
// createEggsTag.innerText = 'i\'m the eggs paragraph'; 

// // adding attributes
// createBreadTag.setAttribute('class', 'breadParagraph')
// createEggsTag.setAttribute('class', 'eggsParagraph')

// container.append(createBreadTag, createEggsTag)

// // 
// createEggsTag.addEventListener('click', function(){
//     createEggsTag.remove()
// })
// // appending elements
// container.append(createParagraphTag, createBeansTag, createEggsTag);


// // console.log(container);

console.log(container);
const displayUserListofItems = document.querySelector('.displayUserListofItems');
const userinput = document.querySelector('#userinput');
const addlist = document.querySelector('.addlist');

// const userinputvalue = userinput.value
// const displayUserListofItems = document.querySelector('.displayUserListofItems')

function createElement(){
    if(userinput.value !== ''){
        // creating elements
        const userListAndDeleteUserListCont = document.createElement('div');
        const userList = document.createElement('p');
        const deleteUserList = document.createElement('button');
        const icon = document.createElement('i');
        const displayDate = document.createElement('p')


        // setting attributes
        userListAndDeleteUserListCont.setAttribute('class', 'userListAndDeleteUserListCont');
        userList.setAttribute('class', 'userList');
        deleteUserList.setAttribute('class', 'deleteUserList');
        icon.setAttribute('class','far fa-trash-alt');
        displayDate.setAttribute('class', 'displayDate')

    
        // Adding text to the button
        // deleteUserList.innerText = 'delete';
        userList.innerText = userinput.value;

        // Appending
        deleteUserList.append(icon)
        // adding event listener to the delete user list button
        deleteUserList.addEventListener('click', function(){
            userListAndDeleteUserListCont.remove();
        });
        userListAndDeleteUserListCont.append(userList,deleteUserList);
 
        userListAndDeleteUserListCont.append(displayDate)

        displayUserListofItems.append(userListAndDeleteUserListCont);

        console.log(displayUserListofItems);
        let date = new Date();

        let now = Date.now();
        console.log(now);

        let getYear = date.getFullYear();

 
        let getMonth = date.getMonth();

        let getDate = date.getDate();

        let getDay = date.getDay(); 
        displayDate.innerText = `Year: ${getYear} Month: ${getMonth} Date: ${getDate} Day: ${getDay} `
    }
    else{
        displayError.innerText = 'Enter a text'
        userinput.addEventListener('click', function(){
            displayError.innerText =''
        })
        // alert('Please enter text');
        // console.log('enter a text');
        // // userListAndDeleteUserListCont = ''
    }
}

function eraseUserInput(){
    userinput.value = ''
    // 
}
addlist.addEventListener('click', function(){
    createElement()
    eraseUserInput()
})