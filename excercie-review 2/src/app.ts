import { fetchUsers, fetchUserById } from "./fetchData";
import { User } from "./interfaces";

function createUserCard(user: User): string {
  return `
    <div class="user-card">
      <h2>${user.name}</h2>
      <p><strong>Username:</strong> ${user.username}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
      <p><strong>Company:</strong> ${user.company.name}</p>
    </div>
  `;
}
async function populateUserDropdown() {
  const userSelect = document.getElementById(
    "user-select"
  ) as HTMLSelectElement;
  try {
    const users = await fetchUsers();
    users.forEach((user) => {
      const option = document.createElement("option");
      option.value = user.id.toString();
      option.textContent = user.name;
      userSelect.appendChild(option);
    });
  } catch (error) {
    console.error("Error populating user dropdown:", error);
  }
}

async function displayUserDetails(userId: number) {
  const userDetails = document.getElementById("user-details") as HTMLDivElement;
  try {
    const user = await fetchUserById(userId);
    if (userDetails) {
      userDetails.innerHTML = createUserCard(user);
    }
  } catch (error) {
    if (userDetails) {
      userDetails.innerHTML = `<p>Error fetching user details</p>`;
    }
  }
}

function setupEventListeners() {
  const userSelect = document.getElementById(
    "user-select"
  ) as HTMLSelectElement;
  userSelect.addEventListener("change", (event) => {
    const target = event.target as HTMLSelectElement;
    const userId = Number(target.value);
    if (userId) {
      displayUserDetails(userId);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateUserDropdown();
  setupEventListeners();
});
