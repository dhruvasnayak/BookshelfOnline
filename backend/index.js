const express = require('express');
const firebase = require('firebase');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const firebaseConfig = {
  
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");

app.post('/api/data', async (req, res) => {
  try {
    var { bname, aname,gname,about, plink, ilink } = req.body;
    
    aname = aname.toLowerCase();
    bname = bname.toLowerCase();
    User.add({
      aname: aname,
      bname: bname,
      gname:gname,
      about:about,
      plink: plink,
      ilink: ilink
    })

    console.log('User added to Firestore database!');
  } catch (error) {
    console.error(error);
    console.log('Error adding user to Firestore database');
  }
});

app.post('/api/search', async (req, res) => {
  try {
    var search = req.body.search;
    search = search.toLowerCase();
    console.log(search);
    
    const snapshot = await User.where("bname", "==", search).get();
    const snapshot2 = await User.where("aname","==",search).get();
    const users = [];

    if (!snapshot.empty || !snapshot2.empty) {
       snapshot.forEach(doc => {
          users.push({ id: doc.id, ...doc.data() });
        });
       snapshot2.forEach(doc => {
          users.push({ id: doc.id, ...doc.data() });
          console.log(doc.data());
        });
        res.json(users);
    }
    else {
      res.status(404).send('not found');
    }

  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching users from Firestore database');
  }
});

app.get('/api/content', async (req, res) => {
  try {
    const usersSnapshot = await User.get();
    const users = [];
    usersSnapshot.forEach(doc => {
      users.push({ id: doc.id, ...doc.data() });
    });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching users from Firestore database');
  }
});


app.listen(5000, () => console.log("running on port 5000"));

