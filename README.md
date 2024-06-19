# Dialog-Sunyi-Backend

## Getting Started

To get started running the project locally, please follow the steps below.

First, clone the repository.

```bash
git clone https://github.com/christoferNK22/Dialog-Sunyi-BE.git
```

Then, install dependencies and fetch data to your local machine. **Note that we use NPM**

```bash
cd Dialog-Sunyi-BE
npm install
```

Finally, run the development.

```bash
node app.js
```

---

## How To Use It

**Base Url** :  `https://dialog-sunyi-backend.vercel.app/`

| Endpoint | Usage | Example | Method |
|----------|-------|---------|----------|
| `/api/article` | Add Article | - |  POST  |
| `/api/articles` | Get Article | - |  GET   |
| `/api/article/:id` | Get Article by Id | `/article/65616bd5f02afdb3f4f95a01` |   GET  |
| `/api/class` | Add Class | - |  POST  |
| `/api/classes` | Get Class | - |  GET   |
| `/api/class/:id` | Get Class by Id | `/class/65616bd5f02afdb3f4f95a01` |   GET  |
| `/api/comment` | Add Comment | - |  POST  |
| `/api/comments` | Get Comment | - |  GET   |
| `/api/comment/:id` | Get Comment by Id | `/comment/65616bd5f02afdb3f4f95a01` |   GET  |
