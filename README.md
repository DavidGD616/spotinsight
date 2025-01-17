# SpotInsight 🎵

SpotInsight is your personal Spotify Wrapped app! It analyzes your Spotify listening habits and delivers insightful and interactive summaries of your favorite music. From top artists and tracks to your most-loved genres, SpotInsight gives you a detailed view of your music journey.

## 🌟 Features

- **Top Artists and Tracks**: Discover your most-played artists and songs over various time periods.
- **Genre Breakdown**: Get insights into your favorite music genres.
- **Yearly Recap**: Similar to Spotify Wrapped, see how your music taste evolves over time.
- **Interactive Visualizations**: Enjoy detailed charts and graphs of your listening stats.
- **Spotify Integration**: Log in with your Spotify account to access your personalized data.

## 🔗 Live Demo

[SpotInsight Live](https://spotinsight-inky.vercel.app)

## 🛠️ Tech Stack

SpotInsight is built with modern technologies to provide a seamless user experience:

- **Frontend**: [React.js](https://reactjs.org/)
- **Backend**: [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/)
- **API**: [Spotify Web API](https://developer.spotify.com/documentation/web-api/) for accessing Spotify user data
- **Authentication**: OAuth 2.0 for Spotify login and secure data access
- **Styling**: CSS, TailwindCSS.

## 📥 Installation

To run SpotInsight locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/DavidGD616/spotinsight.git
   cd spotinsight

2. Install Dependencies: Use npm or yarn to install the required packages:
   ```bash
   SPOTIFY_CLIENT_ID=your_client_id
   SPOTIFY_CLIENT_SECRET=your_client_secret
   REDIRECT_URI=your_redirect_url

- Replace your_client_id and your_client_secret with the credentials obtained from the Spotify Developer Dashboard.
- Replace your_redirect_url with your app’s redirect URL (e.g., http://localhost:8888/callback).

3. Run the App: Start the development server:

   ```bash
   npm start
4. Open your browser and navigate to http://localhost:3000.

## 🎮 Usage
1. Log in with Spotify: Use the Spotify OAuth flow to authenticate your account.
2. Explore Insights: View your top artists, tracks, and genres, along with interactive visualizations.
3. Share Your Stats: Share your music stats with friends and show off your Spotify Wrapped-inspired results!
   
