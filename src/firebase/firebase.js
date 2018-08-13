import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDTI1EZnyXHR7nft8-k4wbPTs21wKuhQbw",
  authDomain: "expensifyapp-16aa8.firebaseapp.com",
  databaseURL: "https://expensifyapp-16aa8.firebaseio.com",
  projectId: "expensifyapp-16aa8",
  storageBucket: "expensifyapp-16aa8.appspot.com",
  messagingSenderId: "377869199547"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_changed', (snapShot) => {
//   console.log(snapShot.key, snapShot.val());
// })

// // database.ref('expenses').on('value', (snapShot) => {
// //   const expenses = [];
// //   snapShot.forEach((child) => {
// //     const newExpense = {
// //       id: child.key,
// //       ...child.val()
// //     }
// //     expenses.push(newExpense);
// //   })
// //   console.log(expenses);
// // })

// // database.ref('expenses').push({
// //   descriptions: 'Rent Bill',
// //   notes: '000##@$%%#@',
// //   amount: 199,
// //   createdAt: 3000 
// // });

// // database.ref('expenses').push({
// //   descriptions: 'Travel Cost',
// //   notes: 'asdfdasf1213314',
// //   amount: 999,
// //   createdAt: 1000 
// // });

// // database.ref('expenses').push({
// //   descriptions: 'Phone Bill',
// //   notes: 'sdfasdsdf123312541235345',
// //   amount: 144,
// //   createdAt: 2000 
// // });

// // database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.location.city}`);
// // })

// // database.ref().set({
// //   name: 'LoL Cupid',
// //   age: 26,
// //   stressLevel: 6,
// //   job: {
// //     title: 'web developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Yangon',
// //     country: 'MM'
// //   }
// // }).then(() => {
// //   console.log('data is saved to database');
// // }).catch((e) => {
// //   console.log('Failed to save data to database');
// // })

// // database.ref('location/country').set('Myanmar')
// //   .then(() => {
// //     console.log('data is saved to database');
// //   }).catch((e) => {
// //     console.log('Failed to save data to database');
// //   });

// // database.ref('attributes').set({
// //   height: 6,
// //   weight: 155
// // }).then(() => {
// //   console.log('data is saved to database');
// // }).catch((e) => {
// //   console.log('Failed to save data to database');
// // })

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Mandalay'
// // })
// //   .then(() => {
// //     console.log('Age Key is removed');
// //   }).catch((e) => {
// //     console.log('Failed to Remove');
// //   })

