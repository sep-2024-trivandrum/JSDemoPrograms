let toggleForm = true;
let toggleEditForm = true;

let allBooks = [
    {
        bookId: 101,
        bookTitle: "Harry Potter and the Order of Phoeneix",
        bookPrice: 250,
        bookGenre: "Fantasy",
        bookPublished: "2010-10-10",
        bookDescription: "Harry Potter is a series of novels by British author J. K. Rowling. The novels follow Harry Potter, an 11-year-old boy who discovers he is the son of famous wizards and will attend Hogwarts School of Witchcraft and Wizardry.",
        bookImageUrl: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bookAuthor: {
            authorId: 501,
            authorFirstName: "Rowling",
            authorLastName: "J.K"
        }
    },
    {
        bookId: 102,
        bookTitle: "Harry Potter and the Prizoner of Azkaban",
        bookPrice: 350,
        bookGenre: "Fantasy",
        bookPublished: "2011-11-11",
        bookDescription: "Harry Potter is a series of novels by British author J. K. Rowling. The novels follow Harry Potter, an 11-year-old boy who discovers he is the son of famous wizards and will attend Hogwarts School of Witchcraft and Wizardry.",
        bookImageUrl: "https://images.unsplash.com/photo-1633856364580-97698963b68b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bookAuthor: {
            authorId: 501,
            authorFirstName: "Rowling",
            authorLastName: "J.K"
        }
    },
    {
        bookId: 103,
        bookTitle: "The Dragon Fire",
        bookPrice: 150,
        bookGenre: "Commedy",
        bookPublished: "2009-10-10",
        bookDescription: "Geronimo is a mild-mannered, nervous mouse who prefers a quiet life. However, he often finds himself in the middle of adventures with his family.",
        bookImageUrl: "https://images.unsplash.com/photo-1505063366573-38928ae5567e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2VyaW5pbW8lMjBzdGl0bHRvbiUyMGJvb2tzfGVufDB8fDB8fHww",
        bookAuthor: {
            authorId: 502,
            authorFirstName: "Geronimo",
            authorLastName: "Stilton"
        }
    }
];

let allAuthors = [
    {
        authorId: 501,
        authorFirstName: "Rowling",
        authorLastName: "J.K"
    },
    {
        authorId: 502,
        authorFirstName: "Geronimo",
        authorLastName: "Stilton"
    }

];

function loadAllBooks(){
    let content = ``;
    allBooks.forEach((eachBook) => {
        content += `<tr>`;
        content += `<td>${eachBook.bookId}</td>`;
        content += `<td><img src="${eachBook.bookImageUrl}" width="80" height="50"></td>`;
        content += `<td>${eachBook.bookTitle}</td>`;
        content += `<td><button type="button" class="btn btn-warning" onclick="loadABook('${eachBook.bookId}')">VIEW</button></td>`;
        content += `<td><button type="button" class="btn btn-primary" onclick="showEditBookForm('${eachBook.bookId}')">EDIT</button></td>`;
        content += `<td><button type="button" class="btn btn-danger" onclick="deleteBook('${eachBook.bookId}')">REMOVE</button></td>`;
        content += `</tr>`;
    });
    document.getElementById("display").innerHTML = content;
}

function loadABook(bookId){

    let aBook = allBooks.filter((eachBook) => eachBook.bookId==bookId);

    let content = `
            <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                    <ul class="list-group">
                            <li class="list-group-item btn btn-warning m-3" onclick="closeView()">CLOSE</li>
                    </ul>
                    <div class="card">
                        <img width="auto" height="200px" src="${aBook[0].bookImageUrl}">
                        <div class="card-title"><h3>${aBook[0].bookTitle}</h3></div>
                        <div class="card-text mx-5">${aBook[0].bookDescription}</div>
                        <div class="card-title my-1">Book ID: ${aBook[0].bookId}</div>
                        <div class="row">
                            <div class="col-6"><div class="card-text">Book Price: ${aBook[0].bookPrice}  </div></div>
                            <div class="col-6">  <div class="card-text">Book Published: ${aBook[0].bookPublished}  </div></div>
                        </div>
                        <div class="row">
                            <div class="col-6"><div class="card-text">Book Genre: ${aBook[0].bookGenre}  </div></div>
                            <div class="col-6"> <div class="card-text">Book Author: ${aBook[0].bookAuthor.authorLastName} ${aBook[0].bookAuthor.authorFirstName}  </div></div>
                        </div>
                    </div>
                    <ul class="list-group">
                            <li class="list-group-item btn btn-warning m-3" onclick="closeView()">CLOSE</li>
                    </ul>
                </div>
                <div class="col-3"></div>
            </div>
            `;
            document.getElementById("view").innerHTML = content;
}

function closeView(){
    document.getElementById("view").innerHTML = "";
}

function showAddBookForm(){
    let content = ``;

    let authorContent = ``;
    allAuthors.forEach((eachAuthor) => {
        authorContent += `<option value='${eachAuthor.authorId}'>${eachAuthor.authorId} - ${eachAuthor.authorLastName}, ${eachAuthor.authorFirstName}</option>`;
    }); 

    if(toggleForm){
        content = `
        <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                    <div class="card">
                        <form>
                            <div class="card-header bg-success text-light"><h3>ADD A NEW BOOK</h3></div>
                            <div class="card-body">
                                <div class="form-control-group">
                                    <label for="bTitle">Book Title:</label>
                                    <input type="text" id="bTitle" class="form-control">
                                </div>
                                <div class="form-control-group">
                                    <label for="bPrice">Book Price:</label>
                                    <input type="text" id="bPrice" class="form-control">
                                </div>
                                <div class="form-control-group">
                                    <label for="bGenre">Book Genre:</label>
                                    <select id="bGenre" class="form-control">
                                        <option>--select--</option>
                                        <option value="Commedy">Commedy</option>
                                        <option value="Fantasy">Fantasy</option>
                                    </select>
                                </div>
                                <div class="form-control-group">
                                    <label for="bPublished">Book Published:</label>
                                    <input type="date" id="bPublished" class="form-control">
                                </div>
                                <div class="form-control-group">
                                    <label for="bDescription">Book Description:</label>
                                    <textarea id="bDescription" class="form-control"></textarea>
                                </div>
                                <div class="form-control-group">
                                    <label for="bImage">Book Image Url:</label>
                                    <input type="text" id="bImage" class="form-control">
                                </div>
                                <div class="form-control-group">
                                    <label for="bAuthor">Book Author:</label>
                                    <select id="bAuthor" class="form-control">
                                        <option>--select--</option>
                                        ${authorContent}
                                    </select>
                                </div>
                            </div>
                            <div class="card-footer bg-success text-light">
                                <button type="button" class="btn btn-light text-success" onclick="addBook()">ADD</button>
                                <button type="reset" class="btn btn-light text-success mx-5">CLEAR</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-3"></div>
            </div>
        `;
    } else {
        content = ``;
    }
    toggleForm = !toggleForm;
    document.getElementById("add-form").innerHTML = content;
}

function addBook(){
    let formData = {
        bookId: allBooks[allBooks.length-1].bookId + 1,
        bookTitle: document.getElementById("bTitle").value,
        bookPrice: document.getElementById("bPrice").value,
        bookGenre: document.getElementById("bGenre").value,
        bookPublished: document.getElementById("bPublished").value,
        bookDescription: document.getElementById("bDescription").value,
        bookImageUrl: document.getElementById("bImage").value,
        bookAuthor: {
            authorId: document.getElementById("bAuthor").value
        }
    }
    allBooks.push(formData);
    showAddBookForm();
    loadAllBooks();
}

function deleteBook(bookId){
    allBooks = allBooks.filter((eachBook) => eachBook.bookId!=bookId);
    loadAllBooks();
}

function showEditBookForm(bookId){
    let content = ``;

    let aBook = allBooks.filter((eachBook) => eachBook.bookId==bookId);

    let authorContent = ``;
    allAuthors.forEach((eachAuthor) => {
        authorContent += `<option value='${eachAuthor.authorId}' ${aBook[0].bookAuthor.authorId==eachAuthor.authorId?'selected':''}>
                            ${eachAuthor.authorId} - ${eachAuthor.authorLastName}, ${eachAuthor.authorFirstName}
                         </option>`;
    }); 

    if(toggleEditForm){
        content = `
        <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                    <div class="card">
                        <form>
                            <div class="card-header bg-primary text-light"><h3>EDIT A BOOK</h3></div>
                            <div class="card-body">
                                <div class="form-control-group">
                                    <label for="bTitle">Book Title:</label>
                                    <input type="text" id="bTitle" class="form-control" value="${aBook[0].bookTitle}">
                                </div>
                                <div class="form-control-group">
                                    <label for="bPrice">Book Price:</label>
                                    <input type="text" id="bPrice" class="form-control" value="${aBook[0].bookPrice}">
                                </div>
                                <div class="form-control-group">
                                    <label for="bGenre">Book Genre:</label>
                                    <select id="bGenre" class="form-control">
                                        <option>--select--</option>
                                        <option value="Commedy" ${aBook[0].bookGenre == 'Commedy'?'selected':''} >Commedy</option>
                                        <option value="Fantasy" ${aBook[0].bookGenre == 'Fantasy'?'selected':''}>Fantasy</option>
                                    </select>
                                </div>
                                <div class="form-control-group">
                                    <label for="bPublished">Book Published:</label>
                                    <input type="date" id="bPublished" class="form-control" value="${aBook[0].bookPublished}"> 
                                </div>
                                <div class="form-control-group">
                                    <label for="bDescription">Book Description:</label>
                                    <textarea id="bDescription" class="form-control">${aBook[0].bookDescription}</textarea>
                                </div>
                                <div class="form-control-group">
                                    <label for="bImage">Book Image Url:</label>
                                    <input type="text" id="bImage" class="form-control" value="${aBook[0].bookImageUrl}">
                                </div>
                                <div class="form-control-group">
                                    <label for="bAuthor">Book Author:</label>
                                    <select id="bAuthor" class="form-control">
                                        <option>--select--</option>
                                        ${authorContent}
                                    </select>
                                </div>
                            </div>
                            <div class="card-footer bg-primary text-light">
                                <button type="button" class="btn btn-light text-primary" onclick="editBook()">UPDATE</button>
                                <button type="reset" class="btn btn-light text-primary mx-5">CLEAR</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-3"></div>
            </div>
        `;
    } else {
        content = ``;
    }
    toggleEditForm = !toggleEditForm;
    document.getElementById("edit-form").innerHTML = content;
}

function updateBook(){

}

function loadAllAuthors(){

}