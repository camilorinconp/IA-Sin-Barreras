import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  trend?: string;
}

export function StatsCard({ title, value, description, icon: Icon, trend }: StatsCardProps) {
  return (
    <Card className="hover-lift card-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="flex items-baseline space-x-2">
              <p className="text-3xl font-semibold text-primary">{value}</p>
              {trend && (
                <span className="text-sm font-medium text-brand-emerald">+{trend}</span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="p-3 rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}