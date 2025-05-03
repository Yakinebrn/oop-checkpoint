document.addEventListener("DOMContentLoaded", function () {
    const shopping_carts = document.querySelector(".list-products");
    const label = document.querySelector(".total-price");

    class Product {
        constructor(id, name, price, img) {
            this.id = id;
            this.name = name;
            this.price = price;
            this.img = img;
        }
    }

    class Item extends Product {
        constructor(id, name, price, img, quantity) {
            super(id, name, price, img);
            this.quantity = quantity;
        }

        getTotalPrice() {
            return this.quantity * this.price;
        }
    }

    class Cart {
        constructor(items = []) {
            this.items = items;
        }

        addItem(newItem) {
            this.items.push(newItem);
            this.displayItem();
        }

        incrementItem(itemId) {
            const item = this.items.find((item) => item.id === itemId);
            if (item) item.quantity += 1;
            this.displayItem();
        }

        decrementItem(itemId) {
            const item = this.items.find((item) => item.id === itemId);
            if (item) {
                item.quantity -= 1;
                if (item.quantity <= 0) this.removeItem(itemId);
            }
            this.displayItem();
        }

        removeItem(itemId) {
            this.items = this.items.filter((item) => item.id !== itemId);
            this.displayItem();
        }

        getTotalAmount() {
            return this.items.reduce(
                (total, item) => total + item.getTotalPrice(),
                0
            );
        }

        displayItem() {
            shopping_carts.innerHTML = "";

            if (this.items.length === 0) {
                label.innerHTML = `<h2>Your Shopping Cart is Empty</h2>`;
                return;
            }

            this.items.forEach((item) => {
                const html = `
            <div class="card">
              <img src="${item.img}" class="card-img-top" alt="${item.name}" />
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.price} €</p>
                <div>
                  <i class="fas fa-minus-circle" data-action="decrement" data-id="${item.id}"></i>
                  <span class="quantity">${item.quantity}</span>
                  <i class="fas fa-plus-circle" data-action="increment" data-id="${item.id}"></i>
                </div>
                <div>
                  <i class="fas fa-trash-alt" data-action="remove" data-id="${item.id}"></i>
                  <i class="fas fa-heart" data-action="heart" data-id="${item.id}"></i>
                </div>
              </div>
            </div>`;
                shopping_carts.innerHTML += html;
            });

            label.innerHTML = `<span>Total price: ${this.getTotalAmount()} €</span>`;
        }
    }

    const cart = new Cart();
    cart.addItem(
        new Item(
            1,
            "AppleBlossoms Squishy",
            10,
            "images/shopping-card-1.jpg",
            1
        )
    );
    cart.addItem(
        new Item(
            2,
            "Sylvanians strawberries collection",
            35,
            "images/shopping-card-2.jpg",
            1
        )
    );
    cart.addItem(
        new Item(3, "Kokeshi perfume", 85, "images/shopping-card-3.jpg", 1)
    );

    shopping_carts.addEventListener("click", (e) => {
        const action = e.target.dataset.action;
        const itemId = parseInt(e.target.dataset.id, 10);

        if (action === "increment") {
            cart.incrementItem(itemId);
        } else if (action === "decrement") {
            cart.decrementItem(itemId);
        } else if (action === "remove") {
            cart.removeItem(itemId);
        } else if (action === "heart") {
            const heart = e.target;
            heart.style.color = heart.style.color === "red" ? "black" : "red";
        }
    });
});
