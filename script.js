document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            const incompleteTasksList = document.getElementById('incomplete-tasks');
            const completedTasksList = document.getElementById('completed-tasks');
            
            // Clear previous data
            incompleteTasksList.innerHTML = '';
            completedTasksList.innerHTML = '';
            
            // Filter tasks for userId 1
            const filteredData = data.filter(todo => todo.userId === 1);
            
            // Separate tasks and create elements
            filteredData.forEach(todo => {
                const listItem = document.createElement('li');
                listItem.classList.add('list-group-item');
                
                // Create checkbox input
                const checkbox = document.createElement('input');
                checkbox.classList.add('form-check-input', 'me-1');
                checkbox.type = 'checkbox';
                checkbox.id = `todo-${todo.id}`;
                checkbox.checked = todo.completed;  // Set checked if completed is true
                
                // Create label for the checkbox
                const label = document.createElement('label');
                label.classList.add('form-check-label');
                label.htmlFor = `todo-${todo.id}`;
                label.textContent = todo.title;  // Set todo title as label text
                
                // Append checkbox and label to list item
                listItem.appendChild(checkbox);
                listItem.appendChild(label);

                // Append list item to the appropriate list
                if (todo.completed) {
                    completedTasksList.appendChild(listItem);
                } else {
                    incompleteTasksList.appendChild(listItem);
                }
            });

            // Monitor changes to checkboxes and validate completion count
            monitorCheckboxes();
        })
        .catch(error => console.error('Error fetching data:', error));
});

// Function to monitor checkbox changes and validate completion count
function monitorCheckboxes() {
    const incompleteCheckboxes = document.querySelectorAll('#incomplete-tasks .form-check-input');
    
    incompleteCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const checkedCount = Array.from(incompleteCheckboxes).filter(cb => cb.checked).length;

            if (checkedCount === 5) {
                showCompletionAlert();
            }
        });
    });
}

// Function to show alert when exactly 5 tasks are completed
function showCompletionAlert() {
    new Promise((resolve) => {
        // Resolve the promise to show the alert
        resolve('Congrats. 5 Tasks have been Successfully Completed');
    }).then(message => {
        // Use setTimeout to ensure the alert is shown after DOM update
        setTimeout(() => {
            alert(message);
        }, 0);
    }).catch(error => {
        console.error('Error in showing alert:', error);
    });
}
