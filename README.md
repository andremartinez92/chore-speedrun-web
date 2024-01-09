# WIP Project

# What is this project?

This is a very early stage work in progress project for personal use.

# What's the basic idea?

This project has two goals that can function independently or together.
The first goal is to be able to track chores (or other to-dos) that need to be done with a set frequency. For example, if you'd like to clean your dishwasher thoroughly every 30 days, you can create a chore "Clean dishwasher" with a "recurring days" value of 30. This task will be added to the "Uncompleted chores" table, where you can set is as completed at any time. When you do this, the task will be moved from the "Uncompleted chores" table to the "Completed chores".
30 days after completing the task, it will automatically be moved from the "completed" tasks back to the "uncompleted" ones.

The second goal is to be able to track the time it takes to do a chore. This can serve two purposes:

- Having a concrete idea of how long it takes to perform the task, and in the future even use this data for analytics purposes;
- Gamify doing the chores.

The gamification of the chores is done by letting the user compete with himself, trying to get better times each time they perform the task (as an athlete would). The record of the user for that particular chore will always be displayed at the top of the screen.

# Implemented features

These are features that have already been implemented. However, as this is a work in progress, many more may be added in the future.

- Email & password auth (currently missing some success/error messages);
- Google auth;
- Chore creation and deletion;
- New time creation and deletion;
- Stopwatch;
- Light/dark theme.

# Stack choices

- Next.js: I chose this framework to have more experience with it;
- Tailwind: I chose this library to have more experience with it;
- Shadcn: ease of use and flexibility;
- GraphQL: ease of use and flexibility, and I am familiar with it;
- Supabase: used as database/backend. Easy to use and it automatically generates graphQL queries and mutations. It has a lot of documentation to make it easy to integrate with Next.js.
