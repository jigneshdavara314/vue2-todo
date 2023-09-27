# vue3-todo-nuxt

## Setup

```bash
# MySQL Database
CREATE TABLE `todo_tasks` ( `id` INT NOT NULL AUTO_INCREMENT , `title` VARCHAR(50) NOT NULL , `is_complete` TINYINT NOT NULL DEFAULT '0' , `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`)) ENGINE = InnoDB;

# Set Database Configs In File
~/vue3-todo-nuxt/server/dbcon/index.ts
const pool = createPool({
  host: "localhost" # => "Provide Domain"
  user: "root", # => "Database User"
  database: "todo_nuxt", # => "Databse name"
  password: "root", # => "Database User Password"
});
```

```bash
Node >= 16.20
```

Make sure to install the dependencies:

```bash
# npm
npm install --legacy-peer-deps
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Test

```bash
npm run test:ui

It will add new tasks to database if task already exists then error message will be logged in console tab
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
