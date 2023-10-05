//Only title should show on side column, details show in text area
//when note is clicked on
const noteForm = document.getElementById('feedback-form');
const noteList = document.getElementById('noteList');
noteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let Title = document.getElementById('noteTitle').value;
    
    let Note = document.getElementById('noteInput').value;

    // Create an object with the username and feedback
    const newNote = {
      Title,
      Note
    };

    fetch('api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    })
      .then((res) => res.json())
      .then((data) => {
        Title = '';
        Note = '';
      });
  })
  .catch((error) => {
    console.error('Error:', error);
  });