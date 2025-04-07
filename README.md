# GitHub Profile Analyzer

A web application that allows users to analyze GitHub profiles, view repositories, and visualize commit activity.

## 🚀 Live Demo

Check out the live deployment of this project:

[![Deployed App](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)](https://github-profile-analyzer-one.vercel.app/)

You can access the GitHub Profile Analyzer at [https://github-profile-analyzer-one.vercel.app/](https://github-profile-analyzer-one.vercel.app/)

## Features

- Search for GitHub users by username
- View user profile information including avatar, bio, and stats
- Display a list of user repositories with details like stars, forks, and language
- Visualize commit activity over the last 30 days
- Responsive design for desktop and mobile devices

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For styling with utility classes
- **ShadCN UI**: Component library built on Tailwind CSS
- **Recharts**: For data visualization
- **Axios**: For API requests
- **date-fns**: For date manipulation
- **Sonner**: For toast notifications

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Himanshusharma2046/github-profile-analyzer.git
   cd github-profile-analyzer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Building for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Deployment

This application can be deployed to various platforms:

- Vercel (recommended for Next.js apps)
- Netlify
- GitHub Pages
- AWS Amplify
- Any static hosting service

## Usage

1. Enter a GitHub username in the search box
2. Click "Analyze" to fetch and display the user's profile information
3. Explore the user's repositories and commit activity

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- GitHub API for providing the data
- ShadCN UI for the beautiful components
- Next.js team for the amazing framework
```
