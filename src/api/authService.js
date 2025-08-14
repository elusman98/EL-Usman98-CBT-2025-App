// This service simulates a backend API using localStorage.

// Initialize a dummy database if it doesn't exist
const initializeDB = () => {
  const db = localStorage.getItem("testAppDB");
  if (!db) {
    const initialData = {
      users: {
        elusman: { password: "elusman98", name: "EL-Usman98" },
        usman: { password: "password123", name: "Usman Abdullahi" },
      },
      results: {
        usman: [
          {
            score: 18,
            totalQuestions: 24,
            percentage: 75,
            date: new Date().toISOString(),
          },
        ],
        jane: [],
      },
    };
    localStorage.setItem("testAppDB", JSON.stringify(initialData));
  }
};

initializeDB();

// --- AUTH FUNCTIONS ---

export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate network delay
      const db = JSON.parse(localStorage.getItem("testAppDB"));
      const user = db.users[username];
      if (user && user.password === password) {
        resolve({ username, name: user.name });
      } else {
        reject("Invalid username or password.");
      }
    }, 500);
  });
};

// --- RESULTS FUNCTIONS ---

export const saveResult = (username, result) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const db = JSON.parse(localStorage.getItem("testAppDB"));
      if (!db.results[username]) {
        db.results[username] = [];
      }
      db.results[username].unshift(result); // Add new result to the beginning
      localStorage.setItem("testAppDB", JSON.stringify(db));
      resolve("Result saved successfully.");
    }, 300);
  });
};

export const getResultsForUser = (username) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const db = JSON.parse(localStorage.getItem("testAppDB"));
      resolve(db.results[username] || []);
    }, 300);
  });
};
