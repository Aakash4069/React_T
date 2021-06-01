// Q9) How can you call logMessage function so that it logs "Hello, World!"?
const object = {
    message: 'Hello, World!'
    
};

function logMessage() {
    console.log(this.message); // "Hello, World!"
}
object.logMessage();