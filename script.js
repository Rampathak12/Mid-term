
function handleSubmit(event) {
    event.preventDefault(); 
    
  
    var suggestion = document.getElementById('suggestion').value.trim();
    
  
    if (suggestion === '') {
        alert('Please provide a suggestion before submitting.');
    } else {
      
        alert('Thank you for your suggestion: \n' + suggestion);
  
        document.getElementById('suggestion').value = '';
    }
}


document.querySelector('form').addEventListener('submit', handleSubmit);
