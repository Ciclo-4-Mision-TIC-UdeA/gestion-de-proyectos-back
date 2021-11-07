import connectDB from './db/db';
import UserModel from './models/user';
import * as Enums from './models/enums';
import ProjectModel from './models/project';

// const Customer = require('./models/customer');
// const Order = require('./models/order');

// Customer.insertMany([
//   {
//     name: 'Daniel',
//     email: 'dsl@c.com',
//   },
//   {
//     name: 'Susana',
//     email: 's@c.com',
//   },
// ])
//   .then((c) => {
//     console.log(c);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

// const customers = await Customer.find().then((c) => {
//   return c;
// });
// Order.create({
//   total: 1500,
//   customer_id: customers[0]._id,
// });

// UserModel.create({
//   name: 'Daniel',
//   lastName: 'Saldarriaga',
//   document: '1065377193',
//   email: 'dsl1@c.com',
//   role: Enums.Enum_UserRole.estudiante,
// })
//   .then((u) => {
//     console.log(u);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

// ProjectModel.create({
//   name: 'Test',
//   budget: 120,
//   startDate: Date.now(),
//   finishDate: new Date('2022/11/10'),
//   leader: '6187d3a20a1d2fc06ea9b1f0',
// })
//   .then((p) => {
//     console.log('project', p);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

// ProjectModel.findOne({ _id: '6187d906541df1983cd78518' })
//   .populate('leader')
//   .then((p) => {
//     console.log(p);
//   });

const main = async () => {
  await connectDB();
  const usr = await UserModel.find();
  console.log(usr);
  // order = await Order.find({ customer_id: '6186629a2dde6bb7f645aeaf' });
  // console.log(order);
};

main();
