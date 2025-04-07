import { Repository } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface RepositoryListProps {
  repositories: Repository[];
}

export default function RepositoryList({ repositories }: RepositoryListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Repositories ({repositories.length})</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repositories.map((repo) => (
          <Card key={repo.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-start">
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {repo.name}
                </a>
                <div className="flex items-center text-sm">
                  <span className="mr-4">⭐ {repo.stargazers_count}</span>
                  <span>🍴 {repo.forks_count}</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {repo.description && <p className="text-sm mb-2">{repo.description}</p>}
              <div className="flex justify-between text-xs text-gray-500">
                {repo.language && <span>{repo.language}</span>}
                <span>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
