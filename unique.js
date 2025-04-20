// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getDatabase, ref, set, push, get, child, update, remove
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5vXQRKthbui4gVzmCEiCHaYYh5ZYxfw4",
  authDomain: "namaste-nepal-8ad55.firebaseapp.com",
  databaseURL: "https://namaste-nepal-8ad55-default-rtdb.firebaseio.com",
  projectId: "namaste-nepal-8ad55",
  storageBucket: "namaste-nepal-8ad55.firebasestorage.app",
  messagingSenderId: "561895580122",
  appId: "1:561895580122:web:df93df021b81a47a6620e3",
  measurementId: "G-PXPNSW8LND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Add new user or update existing user
window.saveUser = function (name, email, contact, address, id = null) {
  const userRef = id ? ref(db, 'users/' + id) : push(ref(db, 'users'));

  set(userRef, { name, email, contact, address })
    .then(() => alert(id ? "User updated!" : "User added!"))
    .catch(err => console.error(err));
};

// Read all users from Firebase
window.readUsers = function () {
  const dbRef = ref(db);
  get(child(dbRef, 'users'))
    .then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const table = document.getElementById('userTable');
        table.innerHTML = "<tr><th>Name</th><th>Email</th><th>Contact</th><th>Address</th><th>Actions</th></tr>";

        for (let id in data) {
          table.innerHTML += `
            <tr>
              <td>${data[id].name}</td>
              <td>${data[id].email}</td>
              <td>${data[id].contact}</td>
              <td>${data[id].address}</td>
              <td>
                <button onclick="editUser('${id}', '${data[id].name}', '${data[id].email}', '${data[id].contact}', '${data[id].address}')">Edit</button>
                <button onclick="deleteUser('${id}')">Delete</button>
              </td>
            </tr>`;
        }
      } else {
        alert("No users found.");
      }
    })
    .catch(error => console.error(error));
};

// Delete a user from Firebase
window.deleteUser = function (id) {
  remove(ref(db, 'users/' + id))
    .then(() => {
      alert("User deleted.");
      readUsers(); // Refresh the user list after deletion
    })
    .catch(error => console.error(error));
};

// Pre-fill the form for editing an existing user
window.editUser = function (id, name, email, contact, address) {
  document.getElementById('name').value = name;
  document.getElementById('email').value = email;
  document.getElementById('contact').value = contact;
  document.getElementById('address').value = address;
  document.getElementById('userId').value = id;
};

// Handle form submission for adding or updating a user
document.getElementById('userForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const contact = document.getElementById('contact').value;
  const address = document.getElementById('address').value;
  const id = document.getElementById('userId').value;

  if (id) {
    saveUser(name, email, contact, address, id); // Update the user
  } else {
    saveUser(name, email, contact, address); // Add new user
  }

  // Reset the form after submission
  document.getElementById('userForm').reset();
  document.getElementById('userId').value = ''; // Clear the hidden user ID
});
