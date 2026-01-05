"use client";

import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function NotificationBell({ count = 3 }: { count?: number }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative cursor-pointer">
          <Bell className="h-6 w-6 text-muted-foreground" />

          {count > 0 && (
            <Badge className="absolute bg-destructive -top-1 -right-1 h-5 min-w-5 rounded-full px-1 text-xs">
              {count}
            </Badge>
          )}
        </div>
      </PopoverTrigger>

      <PopoverContent className="w-72">
        <p className="text-sm font-medium">Notifications</p>
        <div className="mt-2 space-y-2 text-sm text-muted-foreground">
          <p>🔔 New sermon uploaded</p>
          <p>👥 New member joined</p>
          <p>📢 Announcement posted</p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
