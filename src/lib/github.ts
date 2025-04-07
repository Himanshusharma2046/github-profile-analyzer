import axios from 'axios';
import { User, Repository, CommitData } from '@/types';
import { format, subDays } from 'date-fns';

const BASE_URL = 'https://api.github.com';

export async function fetchUserProfile(username: string): Promise<User> {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw new Error('Failed to fetch user profile');
  }
}

export async function fetchUserRepositories(username: string): Promise<Repository[]> {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}/repos?sort=updated&per_page=100`);
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw new Error('Failed to fetch repositories');
  }
}

export async function fetchCommitActivity(username: string): Promise<CommitData[]> {
  try {
    // GitHub API doesn't directly provide daily commits for a user
    // This is a simplified approach - in a real app, you might need to fetch commits for each repo
    // and aggregate them, which would require many API calls
    
    // For demonstration, we'll create mock data based on the user's repositories
    const repos = await fetchUserRepositories(username);
    const today = new Date();
    
    // Generate mock commit data for the last 30 days
    const commitData: CommitData[] = Array.from({ length: 30 }, (_, i) => {
      const date = subDays(today, i);
      // Generate a random count based on repository count (just for demonstration)
      const count = Math.floor(Math.random() * Math.min(repos.length * 2, 10));
      return {
        date: format(date, 'yyyy-MM-dd'),
        count
      };
    }).reverse(); // Reverse to show oldest to newest
    
    return commitData;
  } catch (error) {
    console.error('Error fetching commit activity:', error);
    throw new Error('Failed to fetch commit activity');
  }
}
