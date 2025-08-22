import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  school?: string;
  avatar?: string;
}

export function TestimonialCard({ quote, author, role, school, avatar }: TestimonialCardProps) {
  return (
    <Card className="hover-lift card-shadow">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
          <div className="flex-1">
            <blockquote className="text-sm text-muted-foreground mb-4 italic leading-6">
              "{quote}"
            </blockquote>
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={avatar} alt={author} />
                <AvatarFallback className="bg-primary/10 text-primary font-medium">
                  {author.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-foreground">{author}</p>
                <p className="text-xs text-muted-foreground">
                  {role}{school && ` • ${school}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}