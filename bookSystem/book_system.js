let books=[];


function addBook()
{
    const bookname=document.getElementById('bookName').value;
    const authorName=document.getElementById('authorName').value;
    const bookDescription=document.getElementById('bookDescription').value;
    const pagesNumber=document.getElementById('pagesNumber').value;
    if(bookname&&authorName&&bookDescription && !isNaN(pagesNumber))
    {
        const book={
            name:bookname,
            author:authorName,
            Description:bookDescription,
            pages:pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
        
    }
    else{
        alert('please fill all the details properly');
    }
}
function showbooks()
{
    const bookstore=books.map((book,index)=>`<h1>Book Number ${index+1}</h1>
    <p><strong>Book Name :</strong>${book.name}</p>
    <p><strong>Author Name :</strong>${book.author}</p>
    <p><strong>Book Description :</strong>${book.Description}</p>
    <p><strong>No.of Pages :</strong>${book.pages}</p>
    <button onclick="editbooks(${index+1})">edit books</button> 
    <button onclick="deletebutton(${index+1})">delete books</button> 
    `);
    document.getElementById('books').innerHTML=bookstore.join('');
}
//<button onclick="editbutton(${index+1})">edit books</button>

function clearInputs()
{
    document.getElementById('bookName').value='';
    document.getElementById('authorName').value='';
    document.getElementById('bookDescription').value='';
    document.getElementById('pagesNumber').value='';
}

function deletebutton(index)
{ 
    books.splice(index,1);
    
    showbooks();
}
function editbooks(index)
{
    const book = books[index];

    // Populate the input fields with the current details
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.author;
    document.getElementById('bookDescription').value = book.description;
    document.getElementById('pagesNumber').value = book.pages;

    // Remove the current book from the array (we'll re-add it after editing)
    books.splice(index, 1);

    // Update the UI to reflect the change
    showbooks();
}

