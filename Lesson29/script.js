/* 
CRUD - set of basic operations or functions that are commonly used in the context of database management and web applications to manage and manipulate data.
C - create - POST method (has request body to transfer data)
R - read - GET method (cannot have request body to send data to the server)
U - update - PUT / PATCH method (have request body to transfer data)
D - delete - DELETE method
Status codes
HTTP status codes are three-digit numbers that the server sends in response to a client's request made to a web server. They provide information about the outcome of the request, whether it was successful, encountered an error, or requires further action. HTTP status codes are grouped into several ranges, each indicating a different category of response. 
100... - Informational Responses
200... - Successful Responses (200 OK, 201 Created, 204 No content)
300.. - redirection (301 Moved Permanently, Found (or 307 Temporary Redirect))
400... - Errors (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
500... - Service error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)
*/

const URL = 'https://jsonplaceholder.typicode.com/posts';

const fetchAllPosts = document.getElementById('fetch-button');
fetchAllPosts.addEventListener('click', getPosts);

async function getPosts() {
	const response = await fetch(URL);
	const result = await response.json();
	result.map(post => addPostToHTML(post));
}

function addPostToHTML (post) {
	const title = document.createElement('h2');
	title.innerText = post.title;

	const paragraph = document.createElement('p');
	paragraph.innerText = post.body;

	const updateButton = document.createElement('a');
	updateButton.setAttribute('id', 'update-button');
	updateButton.setAttribute('class', 'button button--success');
	updateButton.innerText = 'Update post';
	updateButton.href = `http://127.0.0.1:5501/Lesson28/update/update-post.html?postId=${post.id}`;

	const deleteButton = document.createElement('button');
	deleteButton.setAttribute('class', 'button button--danger');
	deleteButton.innerText = 'Delete post';
	deleteButton.addEventListener('click', () => deletePost(post.id));

	const listItem = document.createElement('li');
	listItem.append(title);
	listItem.append(paragraph);
	listItem.append(updateButton);
	listItem.append(deleteButton);
	document.getElementById('posts-list').append(listItem);
}

function getPostById() {}

// TODO: move this to the script file attached to the create-post.html page
function createPost() {}

function deletePost(postId) {
	fetch(`${URL}/${postId}`, {
		method: 'DELETE',
	});
}
