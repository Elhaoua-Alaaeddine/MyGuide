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
Create Account: Users can create a new account with a valid email and password.

Log In: Existing users can log in securely to access personalized content.

Forgot Password: Password recovery functionality for users who forget their passwords.
<h3>
Profile Tab
</h3>
View Profile Information: Users can see their profile picture, name, email, country, and role (tourist, business owner, authority figure).

Buttons for Interaction:

Report Issues: Allows users to report issues or provide feedback.
Update Information: Enables users to update their profile information.
Upgrade Account: Users can upgrade their account to authority figure or business owner status.
Log Out: Logs the user out of the application.
Language Choice: Choose preferred language for the app.
<h3>
Home Tab
</h3>
Top Tabs: Attractions, Hotels, Restaurants, each with a respective search bar.

City Selection: Users can pick a city they want to visit.

Dynamic Content: Based on the selected city, the content of the tabs dynamically updates to display cards with information about attractions, hotels, and restaurants.

<h3>
Cards for Attractions, Hotels, Restaurants
</h3>
Each card includes:

Image: Picture of the place.
Title: Name of the place.
Description: Brief information about the place.
Average Rating: Displayed as stars.
Rating System: Allows users to rate the place.
Buttons:
Comment: Users can leave comments about the place.
Report: Report inappropriate content.
<h3>
Google Maps Integration
</h3>
Location Navigation: Clicking on the image of a place opens Google Maps with the location of the selected place.
<h2>
Getting Started
</h2>
Clone the repository:

<pre><code>
git clone https://github.com/username/MyGuide.git
</code></pre>
Navigate to the project directory:

<pre><code>
cd MyGuide
</code></pre>
Install dependencies:
<pre><code>
npm install
</code></pre>

Run the app:
<pre>
  <code>
npx react-native run-android
    
  </code>
</pre>
or

<pre>
  <code>
npx react-native run-ios
    
  </code>
</pre>
<h2>
Technologies Used
</h2>
React Native
Firebase (Authentication)
<h2>
Contributors
</h2>
Your Name
<h2>
License
</h2>
This project is licensed under the MIT License.
