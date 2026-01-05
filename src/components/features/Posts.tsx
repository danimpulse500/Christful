"use client";
import { Badge } from "@/components/ui/badge";
import { FileVideo2, AudioLines, Text } from "lucide-react";

export function Posts() {
  return (
    <div className="flex justify-center">
        <div className="flex gap-4">
            <Badge className="rounded-0 cursor-pointer">All</Badge>
            <Badge className="rounded-0 cursor-pointer bg-secondary text-foreground">
                <FileVideo2 className="h-3 w-3" />
                Video</Badge>
            <Badge className="rounded-0 cursor-pointer bg-secondary text-foreground">
                <AudioLines className="h-3 w-3" />
                Audio</Badge>
            <Badge className="rounded-0 cursor-pointer bg-secondary text-foreground">
                <Text className="h-3 w-3" />
                Text</Badge>
        </div>
    </div>
  );
}