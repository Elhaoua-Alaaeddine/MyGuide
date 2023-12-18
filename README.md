<h1>
MyGuide React Native App
</h1>
<h2>
Overview
</h2>
MyGuide is a simple React Native project designed to serve as your travel companion. It includes authentication features using Firebase, allowing users to create accounts, log in, and recover forgotten passwords. Once logged in, users can explore attractions, hotels, and restaurants in various cities, view detailed information, and interact with the community.

<h2>
Features
</h2>
<h3>
Authentication
</h3>
<ul>
  <li>Create Account: Users can create a new account with a valid email and password.</li>
  <li>Log In: Existing users can log in securely to access personalized content.</li>
  <li>Forgot Password: Password recovery functionality for users who forget their passwords.</li>
</ul>
<h3>
Profile Tab
</h3>
<ul>
  <li>View Profile Information: Users can see their profile picture, name, email, country, and role (tourist, business owner, authority figure).</li>
  <li>Buttons for Interaction:
  <ul>
    <li>Report Issues: Allows users to report issues or provide feedback.</li>
    <li>Update Information: Enables users to update their profile information.</li>
    <li>Upgrade Account: Users can upgrade their account to authority figure or business owner status.</li>
    <li>Log Out: Logs the user out of the application.</li>
    <li>Language Choice: Choose preferred language for the app.</li>
  </ul>
  </li>
</ul>
<h3>
Home Tab
</h3>
<ul>
  <li>Top Tabs: Attractions, Hotels, Restaurants, each with a respective search bar.</li>
  <li>City Selection: Users can pick a city they want to visit.</li>
  <li>Dynamic Content: Based on the selected city, the content of the tabs dynamically updates to display cards with information about attractions, hotels, and restaurants.</li>
</ul>
<h3>
Cards for Attractions, Hotels, Restaurants
</h3>
Each card includes:
<ul>
  <li>Image: Picture of the place.</li>
  <li>Title: Name of the place.</li>
  <li>Description: Brief information about the place.</li>
  <li>Average Rating: Displayed as stars.</li>
  <li>Rating System: Allows users to rate the place.</li>
  <li>Buttons:<ul><li>Comment: Users can leave comments about the place.</li>
  <li>Report: Report inappropriate content.</li></ul></li>
</ul>
<h3>
Google Maps Integration
</h3>
<ul>
  <li>Location Navigation: Clicking on the image of a place opens Google Maps with the location of the selected place.</li>
</ul>

<h2>
Getting Started
</h2>
<ol>
  <li>Clone the repository:</li>
<pre><code>git clone https://github.com/username/MyGuide.git</code></pre>
  <li>Navigate to the project directory:</li>
<pre><code>cd MyGuide</code></pre>
  <li>Install dependencies:</li>
<pre><code>npm install</code></pre>
  <li>Run the app:</li>
<pre><code>npx react-native run-android</code></pre>
or
<pre><code>npx react-native run-ios   </code></pre>
</ol>

<h2>
Technologies Used
</h2>
<ul>
  <li>React Native</li>
  <li>Firebase (Authentication)</li>
  <li>Nativewind (tailwind css for react native)</li>
</ul>


<h2>
Contributors
</h2>
Elhaoua-Alaaeddine
<h2>
License
</h2>
This project is licensed under the MIT License.
