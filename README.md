# Todo-App
This is a Todo app made using React.js.
....
# Backend
....
Main file for the backend -> Server.js

Database -> MongoDB
....
# Features
Create
Read
Update 
Delete
....
# Routes 


Router.get('/', Taskcontroller.GetAllTasks)

Description : GET ALL THE tasks


Router.post('/', Taskcontroller.createTask)

Description : Create a new task


Router.get("/:id", Taskcontroller.GetAtask)

Description : GET a Single task


Router.patch('/:id', Taskcontroller.UpdateTask)

Description : Update a task


Router.delete('/:id', Taskcontroller.DeleteAtask)

Description : Delete a task

....
## I have used Axios to connect Backend to Frontend
....

# Frontend 

# React Js

....

# Stylesheet
Tailwindcss

I have made 3 components in the frontend and connected backend to frontend using Axios Library I have also added the feature to search your tasks

....
# Working 

Add your task to the form and then click add and then your task will be added to the table mongodb is connected to handle the data tick the checkbox when your task is completed and all set!
you can also edit and delete the task if you want

-----
# For more information check out the video in the Videos folder.


-----

https://todo-mern-app-razm.vercel.app/
