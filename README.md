# 🛍️ Girly Shopping Cart — Object-Oriented JavaScript

This project is a feminine-themed shopping cart built using **HTML**, **CSS**, and **JavaScript**. It was developed as part of a programming checkpoint, with a focus on applying **Object-Oriented JavaScript (OOJ)** principles to structure the logic of a web-based shopping experience.

## 📚 Project Objective

The goal of this checkpoint was to **rebuild a shopping cart using Object-Oriented JavaScript**, based on a previous version built with DOM manipulation and functional programming. This version uses **JavaScript classes and objects** to manage product data, cart items, and cart operations in a modular and scalable way.

---

## ✨ Features

- Stylish and feminine ("girly") user interface with interactive design.
- Product catalog using object instances.
- Add/remove items from the cart.
- Calculate total item quantities and prices dynamically.
- Display cart content with real-time updates.
- Object-Oriented Architecture using JavaScript classes.

---

## 🧱 Technical Implementation

The application is structured around three main JavaScript classes:

### `Product`
Represents a single product with the following properties:
- `id`
- `name`
- `price`

### `ShoppingCartItem`
Represents an item in the shopping cart, storing:
- `product` (a Product instance)
- `quantity`

Includes a method:
- `getTotalPrice()` – returns the total price for this item (`product.price * quantity`).

### `ShoppingCart`
Represents the entire cart, managing an array of `ShoppingCartItem` instances.

Includes methods:
- `addItem(product, quantity)`
- `removeItem(productId)`
- `getTotalItems()` – returns total quantity of all items.
- `getTotalPrice()` – returns the total cost of all items.
- `displayCart()` – displays cart content in the UI.
