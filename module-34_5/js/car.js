const carContainer = document.getElementById('car-container');
data.forEach(car => {
    const carDiv = document.createElement('div');
    carDiv.classList.add('col');
    carDiv.innerHTML = `
    <div class="card h-100">
        <img src="${car.imageURL}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Car Name: ${car.name}</h5>
            <p class="card-text">Car Details: ${car.description}</p>
            <button class="btn btn-primary">Car Price: ${car.price}
        </div>
    </div>
    `;
    carContainer.appendChild(carDiv);
})