document.getElementById('title').innerText = person.message;

const personContainer = document.getElementById('person-container');
const persons = person.result;
persons.forEach(person => {
    const personDiv = document.createElement('div');
    personDiv.classList.add('col');
    personDiv.innerHTML = `
        <div class="card">
            <div class="card-header">
                Person Name: ${person.name.common}
            </div>
            <div class="card-body">
                <p class="card-text">age: ${person.age}</p>
                <p class="card-text">Street: ${person.address.street}, House No: ${person.address.house}</p>
            </div>
        </div>
    `;
    personContainer.appendChild(personDiv);
    
});
