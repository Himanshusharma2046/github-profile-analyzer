import { User } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface UserProfileProps {
  user: User;
}

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <img 
          src={user.avatar_url} 
          alt={`${user.login}'s avatar`} 
          className="w-16 h-16 rounded-full"
        />
        <div>
          <CardTitle>{user.name || user.login}</CardTitle>
          <a 
            href={user.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline"
          >
            @{user.login}
          </a>
        </div>
      </CardHeader>
      <CardContent>
        {user.bio && <p className="mb-4">{user.bio}</p>}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">{user.public_repos}</p>
            <p className="text-sm text-gray-500">Repositories</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{user.followers}</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{user.following}</p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
