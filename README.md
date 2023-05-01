# Challenge 18 - Social Network API ("SNAPI")
## About
"SNAPI" is a social networking API built with Node, Express, NoSQL, Mongoose and MongoDB. It is the backend functionality of a social networking app where users, "thoughts", and reactions can be created, updated, and removed from a database.

### Demo / Walkthrough
[Demonstration of API request route testing](https://drive.google.com/file/d/1WGd_rosy--iY2KgS1LhmUOB-ycXEBhuC/view?usp=share_link)
* Please note that the server may crash if you POST a new thought and then query the server again. The bug is being investigated.*
## Installation & Use
1. Download the repo and navigate to its root folder.
2. Run `npm install -y` in your terminal to install the node module dependencies.
3. Start the server by typing `npm run start`. (Or, if you have nodemon installed and would like to make changes and/or do some testing, you can type `npm run watch` instead)
4. Use an app like Insomnia to make CRUD requests to the server, as the app does not have a client side. 

## Contributions
- [Mongoose Docs: Queries](https://mongoosejs.com/docs/queries.html)
- [Mongoose Docs: Executing](https://mongoosejs.com/docs/queries.html#executing)
- [Mongoose Docs: How to use findOneAndUpdate()](https://mongoosejs.com/docs/tutorials/findoneandupdate.html)
- [Mongoose Docs: Connections](https://mongoosejs.com/docs/connections.html)
- [Mongoose Docs: Error handling](https://mongoosejs.com/docs/connections.html#error-handling)
- [Mongoose Docs: Subdocuments](https://mongoosejs.com/docs/subdocs.html)
- [Mongoose Docs: VirtualType](https://mongoosejs.com/docs/api/virtualtype.html)