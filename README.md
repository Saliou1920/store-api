# GET Products API

## Welcome! 👋

## Table of contents 🙂

- [Overview](#overview)
  - [The Challenge](#challenge)
  - [Technical requirements](#technical)
  - [Screenshot](#screenshot)
  - [Built with](#built-with)
- [Author](#author)

## Overview 🍡

This API is built for learning purposes. It's not deploy yet. It enables to access for example products data using a REST API. This Documentation describes how to request data from the API.

## Products 🔥

<code>GET: http://localhost:3000/api/v1/products</code>

```json
{
  "products": [
    {
      "featured": true,
      "rating": 3,
      "_id": "61cd3caf0aff245d43a112d9",
      "name": "wooden table",
      "price": 23,
      "company": "caressa",
      "createdAt": "2021-12-30T04:59:27.347Z",
      "__v": 0
    },
    {
      "featured": false,
      "rating": 3,
      "_id": "61cd3caf0aff245d43a112d8",
      "name": "wooden desk",
      "price": 40,
      "company": "ikea",
      "createdAt": "2021-12-30T04:59:27.347Z",
      "__v": 0
    },
    {
      "featured": true,
      "rating": 3,
      "_id": "61cd3caf0aff245d43a112da",
      "name": "a first wooden table",
      "price": 23,
      "company": "caressa",
      "createdAt": "2021-12-30T04:59:27.347Z",
      "__v": 0
    },
    {
      "featured": false,
      "rating": 3,
      "_id": "61cd3caf0aff245d43a112d7",
      "name": "wooden desk",
      "price": 15,
      "company": "ikea",
      "createdAt": "2021-12-30T04:59:27.347Z",
      "__v": 0
    },
    {
      "featured": false,
      "rating": 3,
      "_id": "61cd3caf0aff245d43a112d3",
      "name": "suede armchair",
      "price": 15,
      "company": "caressa",
      "createdAt": "2021-12-30T04:59:27.346Z",
      "__v": 0
    }
  ],
  "nbHiits": 5
}
```

## Search 💻

Search by name, price, page, company

<code>GET: http://localhost:3000/api/v1/products/?name=...</code>

<code>GET: http://localhost:3000/api/v1/products/?company=...</code>

Sort by price, rating , name

<code>GET: http://localhost:3000/api/v1/products/?sort=price</code>

Select fields company, rating

<code>GET: http://localhost:3000/api/v1/products/?fields=company,rating</code>

<hr>

| Parameter       | Description                                                                                       | Type    |
| --------------- | ------------------------------------------------------------------------------------------------- | ------- |
| featured=       | filter on a specific boolean condition (boolean)                                                  | Boolean |
| name= company=  | full-text query                                                                                   | String  |
| numericFilters= | filter on a specific numerical condition (<,<=,=,>or>=). Available numerical fields: price rating | String  |
| page=           | page number                                                                                       | Integer |
| limit=          | limit results. Defaults = 10                                                                      | Integer |

## Built with 🧰

- Node JS
- Express
- Mongo DB
- Mongoose

## Author ✨

- Linkedin - [@Saliou](https://saliou1920.github.io/Images-Gallery/)
