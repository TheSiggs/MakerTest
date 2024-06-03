# Kilkimi Whiskies Online Store

Maker has expanded and is now selling Scotch whiskies online, under the trading name Kilkimi Whiskies.

## Consideration If I Had More Time
- Add more tests
  - The tests I put in only tested basic functionality and not different combinations of products
- Move BL to PHP side
  - All the cart logic is in the frontend, putting it in the php side would be better to separate responsibility
  - This would also allow the PHP side to manage the cart and store carts in the db to allow for easier manipulation
- Implement remove from cart logic
  - I only implemented add to cart logic - this is incomplete to the CRUD method set
- Allow qty update in the cart area and not just by pressing "Add to Cart" on the product
  - Allows for the cart to separate from the products
- Implement cart completion logic
  - You cannot actually "complete" your purchase with this
- Implement API authentication logic on the backend Ajax scripts
  - This will allow for security when accessing the backend
- Use environment variables for hard coded variables
  - The urls in the fetch statements should be stored in env variables to allow for easy changing depending on environments
- Make better use of constants for certain variables. i.e the "free" tag
- Split out the frontend and backend logic into their own repositories
  - Makes it's easier to separate responsibilities and less overheads as the docker setup is only used for the php backend
- Create better directory structure for the frontend
  - This will allow for better management of components
  - I would use the atomic structure to better organize components - https://www.linkedin.com/pulse/in-depth-look-atomic-architecture-react-sanjeev-sharma/

## Requirements

You have been engaged to build a simple website/system of your choice that users can add items to, calculate and display the total items and price.

It’s important to demonstrate in your solution the following:

- A clear frontend and backend separation of tasks.
- Any appropriate automated tests.
- Any considerations that in the future, someone else may be working on your code and changing or extending it.

## Current Inventory

The items that Kilkimi Whiskies currently carries are as follows:

| SKU  | Name                        | Price ($) |
|------|-----------------------------|-----------|
| DEAN | Deanston 12 years old       | 99.99     |
| KIL  | Kilkerran 12 years old      | 89.99     |
| ARR  | Arran 10 years old          | 79.99     |
| JOHN | Johnnie Walker Green Label  | 75.99     |

## Special Pricing Rules

These are some of our current promotions:

- **Johnnie Walker Green Label** has a 4-for-3 offer; if you buy four bottles, you only pay for three.
- **Kilkerran 12 years old** has a one bottle per order limit.
- **Arran 10 years old** has a bulk buy special; if you buy 12 bottles, the price per bottle drops to $75 each.
- If the total order exceeds $500, one free bottle of **Deanston 12 years old** is given for free.

## Notes

- Use React for the frontend, and PHP for the backend programming languages. If possible, do not use any frameworks for PHP.
- Approach this any way you like that may showcase your approach to development. If necessary, justify your chosen approach.
- Do not spend more than a few hours on this, or however much time you want to put into it; it is OK to submit a partially finished code – we just want to get an idea of your coding logic and style.
- Please put your code up in a git repository that we can clone from (we can supply a public key if needed). Commit along the way, so that we may see your thinking process.
- Have fun! Don’t stress out on this!
