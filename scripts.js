document.addEventListener('DOMContentLoaded', function () {
    const chocolateSelector = document.getElementById('chocolate-selector');
    const selectedChocolates = document.getElementById('selected-chocolates');
    const selectedList = document.getElementById('selected-list');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;
    let selectedCount = 0;

    const chocolates = [
        { id: 1, name: 'Milk Chocolate', price: 2.50 },
        { id: 2, name: 'Dark Chocolate', price: 3.00 },
        { id: 3, name: 'White Chocolate', price: 2.75 },
        { id: 4, name: 'Hazelnut Chocolate', price: 3.50 },
        { id: 5, name: 'Caramel Chocolate', price: 3.25 },
        { id: 6, name: 'Almond Chocolate', price: 3.75 },
        { id: 7, name: 'Raspberry Chocolate', price: 3.20 },
        { id: 8, name: 'Mint Chocolate', price: 3.40 },
        { id: 9, name: 'Orange Chocolate', price: 3.30 },
        { id: 10, name: 'Coconut Chocolate', price: 3.60 },
        { id: 11, name: 'Peanut Butter Chocolate', price: 3.80 },
        { id: 12, name: 'Cherry Chocolate', price: 3.45 },
        { id: 13, name: 'Toffee Chocolate', price: 3.55 },
        { id: 14, name: 'Espresso Chocolate', price: 3.65 },
        { id: 15, name: 'Strawberry Chocolate', price: 3.15 },
        // Add more chocolate options as needed
    ];

    chocolates.forEach(chocolate => {
        const chocolateOption = document.createElement('div');
        chocolateOption.className = 'chocolate-option';
        chocolateOption.innerHTML = `
            <label>
                <input type="checkbox" data-id="${chocolate.id}" data-price="${chocolate.price}">
                ${chocolate.name} - $${chocolate.price.toFixed(2)}
            </label>
        `;
        chocolateSelector.appendChild(chocolateOption);

        const checkbox = chocolateOption.querySelector('input');
        checkbox.addEventListener('change', function () {
            updateSelectedChocolates();
        });
    });

    function updateSelectedChocolates() {
        const selectedCheckboxes = chocolateSelector.querySelectorAll('input:checked');
        selectedCount = selectedCheckboxes.length;
        totalPrice = 0;

        selectedList.innerHTML = '';

        selectedCheckboxes.forEach(checkbox => {
            const chocolateId = parseInt(checkbox.dataset.id);
            const chocolate = chocolates.find(choco => choco.id === chocolateId);
            if (chocolate) {
                const listItem = document.createElement('li');
                listItem.textContent = `${chocolate.name} - $${chocolate.price.toFixed(2)}`;
                selectedList.appendChild(listItem);

                totalPrice += chocolate.price;
            }
        });

        totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

        if (selectedCount > 8) {
            alert('You cannot select more than 8 chocolates.');
            selectedCheckboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
            updateSelectedChocolates();
        }
    }
});
