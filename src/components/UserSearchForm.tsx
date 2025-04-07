import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface UserSearchFormProps {
  onSearch: (username: string) => void;
  isLoading: boolean;
}

export default function UserSearchForm({ onSearch, isLoading }: UserSearchFormProps) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md space-x-2">
      <Input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="flex-grow"
        disabled={isLoading}
      />
      <Button type="submit" disabled={isLoading || !username.trim()}>
        {isLoading ? 'Loading...' : 'Analyze'}
      </Button>
    </form>
  );
}
