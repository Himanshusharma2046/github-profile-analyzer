'use client';

import { useState } from 'react';
import UserSearchForm from '@/components/UserSearchForm';
import UserProfile from '@/components/UserProfile';
import RepositoryList from '@/components/RepositoryList';
import CommitChart from '@/components/CommitChart';
import { fetchUserProfile, fetchUserRepositories, fetchCommitActivity } from '@/lib/github';
import { User, Repository, CommitData } from '@/types';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [commitData, setCommitData] = useState<CommitData[]>([]);

  const handleSearch = async (username: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const [userProfile, userRepos, commits] = await Promise.all([
        fetchUserProfile(username),
        fetchUserRepositories(username),
        fetchCommitActivity(username)
      ]);
      
      setUser(userProfile);
      setRepositories(userRepos);
      setCommitData(commits);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setUser(null);
      setRepositories([]);
      setCommitData([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">GitHub Profile Analyzer</h1>
      
      <div className="flex justify-center mb-8">
        <UserSearchForm onSearch={handleSearch} isLoading={isLoading} />
      </div>
      
      {error && (
        <Card className="mb-8 bg-red-50">
          <CardContent className="pt-6 text-red-600">
            {error}
          </CardContent>
        </Card>
      )}
      
      {isLoading && (
        <div className="text-center">
          <p>Loading user data...</p>
        </div>
      )}
      
      {user && !isLoading && (
        <div className="space-y-8">
          <UserProfile user={user} />
          
          <CommitChart commitData={commitData} />
          
          <RepositoryList repositories={repositories} />
        </div>
      )}
    </main>
  );
}
