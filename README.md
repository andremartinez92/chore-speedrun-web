# WIP Project

# What is this project?

This is a very early stage work in progress project for personal use.
It can be found [here](https://chore-speedrun.vercel.app).

# What's the basic idea?

This project has two goals that can function independently or together.
The first goal is to be able to track chores (or other to-dos) that need to be done with a set frequency. For example, if you'd like to clean your dishwasher thoroughly every 30 days, you can create a chore "Clean dishwasher" with a "recurring days" value of 30. This task will be added to the "Uncompleted chores" table, where you can set it as completed at any time. When you do this, the task will be moved from the "Uncompleted chores" table to the "Completed chores".
30 days after completing the task, it will automatically be moved from the "completed" tasks back to the "uncompleted" ones.

The second goal is to be able to track the time it takes to do a chore. This can serve two purposes:

- Having a concrete idea of how long it takes to perform the task, and in the future even use this data for data analysis;
- Gamify doing the chores.

The gamification of the chores is done by letting the user compete with themselves, trying to get better times each time they perform the task (as an athlete would). The record of the user for that particular chore will always be displayed at the top of the screen.

# Implemented features

These are features that have already been implemented. However, as this is a work in progress, many more may be added in the future.

- Email & password auth (currently missing some success/error messages);
- Google auth;
- Chore creation and deletion;
- New time creation and deletion;
- Stopwatch;
- Light/dark theme;
- Prevents screen from turning off while stopwatch is running.

# Future improvements

This list includes some (but not all) of the future improvements planned for this application:

- Notify users when a task is automatically set to uncompleted;
- Edit chores;
- Better styles;
- Add unit, integration and E2E tests (using Jest, React Testing Library and Cypress/Playwright).

# Stack choices

- Next.js: I chose this framework to have more experience with it, specially with the app router;
- Tailwind: I chose this library to have more experience with it;
- Shadcn: ease of use and flexibility;
- GraphQL: ease of use, flexibility, and familiarity;
- Supabase (database & backend): easy to use and it automatically generates graphQL queries and mutations. It has a lot of documentation that makes it easy to integrate with Next.js. It also takes care of the daily cron job that changes completed tasks back to uncompleted;
- Github: familiarity, ease of use;
- Linear (for tracking tasks): familiarity, ease of use;
- Vercel (for hosting): easiest to use with Next.js.

# Other choices

- Naming files and folders: using kebab-case to prevent issues with upper/lowercase letters in Git + MacOS;
- Folder structure: the `app` folder only contains the page/loading/error/layout components. Everything else goes into the `features` folder, sorted by entity (`chores`, `records`, `auth`, `ui`). This way, it is easy to look at the `app` folder at a glance and understand its structure; otherwise, it would be very messy and difficult to understand.
