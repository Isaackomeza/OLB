const productsUI = document.querySelector('.products-section');

const products = [
    {
        id: 1,
        category: 'bags',
        name: 'The wonderful Bag',
        description: 'Wonderful Bag for machines and students at school. The bag is so comfortable because it is not that heavy',
        img: './assets/img/bag1.jpg',
        price: '12 $'
    },
    {
        id: 2,
        category: 'jewelry',
        name: 'Banana leaf Basket',
        description: 'Black and gold toned basket 12.5" x 5" Single piece / work Made in Rwanda Free shipping Weight 0.90 LB',
        img: './assets/img/basket1.jpg',
        price: '3 $'
    },
    {
        id: 3,
        category: 'jewelry',
        name: 'Baskets',
        description: 'The wonderful Baskets includes colorful sisal bowls and delicate Agaseke Peace Baskets, which are a wonderful symbol of reconciliation.',
        img: './assets/img/basket3.jpg',
        price: '1 = 3 $'
    },
    {
        id: 4,
        category: 'shoes',
        name: 'Bathroom Shoes',
        description: 'Bathroom Shoes that can be washed and the color still remains the same.it is so comfortable.',
        img: './assets/img/shoe1.jpg',
        price: '9 $'
    }
]

let productLook = "";
products.map(product => {
    productLook +=
        `<div class="product ${product.category}" id="${product.id}">
            <div class="product-img">
                <img src="${product.img}" alt="Product" class="img-responsive" />
            </div>
            <div class="product-text">
                <div class="category">
                    <span>${product.category}</span>
                </div>
                <div class="title-product">
                    <h3>${product.name}</h3>
                </div>
                <div class="description-prod">
                    <p>${product.description}</p>
                </div>
                <div class="card-footer">
                    <div class="footer-left"><span class="price">${product.price}</span></div>
                    <div class="footer-right">
                        <a target="_blank" href="https://bit.ly/OLBe-BusinessGroupLtd" class="buy-btn">
                            <img title="Click to checkout and order the Product"
                                src="https://img.icons8.com/material-outlined/24/ffffff/shopping-cart--v1.png" />
                        </a>
                    </div>
                </div>
            </div>
        </div>`
    productsUI.innerHTML = productLook
    // productsUI.innerHTML += product
})


// FILTER JS............................................


filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("product");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// const category = document.getElementsByClassName(product.category)

// category.addEventListener("click", filterSelection);