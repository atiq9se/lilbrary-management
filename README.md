Overview: The Library Management System is built with Express, TypeScript, and MongoDB (via Mongoose). It allows administrators to manage books and borrowing records efficiently while enforcing business rules such as book availability and quantity management.

Technologies Used: Node.js, Express.js, TypeScript, MongoDB, Mongoose

Business Logic:
Borrowing is allowed only if enough copies are available.
Copies are decremented on borrow.
Book available becomes false if copies reach 0.

Features

✅ Schema Validation with Mongoose
✅ Business Logic Enforcement (copy control, availability)
✅ Mongoose Middleware (pre-save for borrow)
✅ Aggregation Pipeline (borrow summary)
✅ Filtering & Sorting on Book Listings
✅ Static or Instance Method on Book Model (optional enhancement)
