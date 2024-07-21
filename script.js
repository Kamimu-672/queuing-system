document.getElementById('queue-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();
    if (name) {
        addToQueue(name);
        nameInput.value = '';
    }
});

function addToQueue(name) {
    const li = document.createElement('li');
    li.textContent = name;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        removeFromQueue(li);
    });
    li.appendChild(removeButton);
    document.getElementById('queue-list').appendChild(li);
}

function removeFromQueue(li) {
    document.getElementById('queue-list').removeChild(li);
}

