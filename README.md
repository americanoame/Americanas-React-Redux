# 🖥️ State-Management-with-Redux

<table>
  <tr>
    <td><img src="https://github.com/americanoame/react-flip-cards/assets/77306236/c3bf58b7-8a24-46ae-bad2-98f7e498dbab)"><td>
  </tr>
</table>

### Shopping Cart

- Adding and Removing Items: The shopping cart functionality allows users to add products to remove them, and adjust quantities. Redux handles the state management for these operations, ensuring that the cart’s state is consistently updated across the application.
- Actions and Reducers: I implemented actions and reducers to manage the cart’s state. Actions like addToCart and removeFromCart trigger state changes, while reducers update the state based on these actions.

### Wish List

- Managing Wish List: Similar to the shopping cart, the wish list allows users to save products for later. Redux manages the wish list state, enabling users to add and remove items easily.

- Duplicate Checks: When a product is added to the wish list, the application checks if it’s already there. If it is, a toast notification informs the user that the product is already in the wish list.

### Data Fetching with @reduxjs/toolkit/query/react

- Fetching Products: I used @reduxjs/toolkit/query/react to fetch product data from the server. This tool simplifies data fetching and caching, providing a streamlined approach to handle API calls.

- Data Management: The fetched data is stored in the Redux store, making it accessible throughout the application. This approach ensures that the product data is readily available for various components, improving performance and user experience.

### Filtering Products

- Category Filtering: Users can filter products based on categories. Redux manages the filtering state, allowing users to switch between different product categories seamlessly.

- Dynamic Filtering: The filtering logic is dynamic, meaning it updates the product list in real-time as users select different categories.

### Toast Notifications

- User Feedback: I integrated a toast component, likely using a library like react-toastify, to provide real-time feedback to users. This includes notifications for adding items to the cart or wish list, and informing users if a product is already in the wish list.

- Enhanced UX: Toast notifications enhance the user experience by providing immediate feedback without disrupting the flow of the application.

### You May Also Like" Section

- Related Products: The "You May Also Like" section displays related products, offering users additional items they might be interested in.

- Adding to Cart: Users can add products directly from this section to their shopping cart, making it easy to discover and purchase related items.

**Frontend:**

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

**Backend:**
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

- Two steps to run the application

```
npm init -y
```

```
npm i
```

```
npm run dev
```




