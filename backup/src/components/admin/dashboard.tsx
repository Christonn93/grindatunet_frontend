"use client";

import { useState } from "react";
import { BarChart3, FileText, Home, Image, LayoutDashboard, MessageSquare, PlusCircle, Settings, Users } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
 Sidebar,
 SidebarContent,
 SidebarFooter,
 SidebarGroup,
 SidebarGroupContent,
 SidebarGroupLabel,
 SidebarHeader,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
 SidebarProvider,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DashboardHeader } from "./dashboard-header";
import { StatsCards } from "./stats-cards";
import { RecentComments } from "./recent-comments";
import { QuickDraft } from "./quick-draft";
import { RecentPosts } from "./recent-posts";

export default function Dashboard() {
 const [activeTab, setActiveTab] = useState("overview");

 return (
  <SidebarProvider>
   <div className="flex min-h-screen w-full bg-muted/40">
    <Sidebar>
     <SidebarHeader className="flex h-14 items-center border-b px-4">
      <div className="flex items-center gap-2 font-semibold">
       <LayoutDashboard className="h-6 w-6" />
       <span>WP Dashboard</span>
      </div>
     </SidebarHeader>
     <SidebarContent>
      <SidebarGroup>
       <SidebarGroupLabel>Main</SidebarGroupLabel>
       <SidebarGroupContent>
        <SidebarMenu>
         <SidebarMenuItem>
          <SidebarMenuButton isActive={activeTab === "overview"} onClick={() => setActiveTab("overview")}>
           <Home className="h-4 w-4" />
           <span>Dashboard</span>
          </SidebarMenuButton>
         </SidebarMenuItem>
         <SidebarMenuItem>
          <SidebarMenuButton onClick={() => setActiveTab("posts")}>
           <FileText className="h-4 w-4" />
           <span>Posts</span>
          </SidebarMenuButton>
         </SidebarMenuItem>
         <SidebarMenuItem>
          <SidebarMenuButton onClick={() => setActiveTab("media")}>
           <Image className="h-4 w-4" />
           <span>Media</span>
          </SidebarMenuButton>
         </SidebarMenuItem>
         <SidebarMenuItem>
          <SidebarMenuButton onClick={() => setActiveTab("comments")}>
           <MessageSquare className="h-4 w-4" />
           <span>Comments</span>
           <Badge className="ml-auto">5</Badge>
          </SidebarMenuButton>
         </SidebarMenuItem>
        </SidebarMenu>
       </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
       <SidebarGroupLabel>Management</SidebarGroupLabel>
       <SidebarGroupContent>
        <SidebarMenu>
         <SidebarMenuItem>
          <SidebarMenuButton onClick={() => setActiveTab("users")}>
           <Users className="h-4 w-4" />
           <span>Users</span>
          </SidebarMenuButton>
         </SidebarMenuItem>
         <SidebarMenuItem>
          <SidebarMenuButton onClick={() => setActiveTab("analytics")}>
           <BarChart3 className="h-4 w-4" />
           <span>Analytics</span>
          </SidebarMenuButton>
         </SidebarMenuItem>
         <SidebarMenuItem>
          <SidebarMenuButton onClick={() => setActiveTab("settings")}>
           <Settings className="h-4 w-4" />
           <span>Settings</span>
          </SidebarMenuButton>
         </SidebarMenuItem>
        </SidebarMenu>
       </SidebarGroupContent>
      </SidebarGroup>
     </SidebarContent>
     <SidebarFooter className="border-t p-4">
      <div className="flex items-center gap-2">
       <Avatar>
        <AvatarImage src="/placeholder.svg?height=32&width=32" />
        <AvatarFallback>JD</AvatarFallback>
       </Avatar>
       <div>
        <p className="text-sm font-medium">John Doe</p>
        <p className="text-xs text-muted-foreground">Administrator</p>
       </div>
      </div>
     </SidebarFooter>
    </Sidebar>
    <div className="flex flex-1 flex-col">
     <DashboardHeader />
     <main className="flex-1 p-4 md:p-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
       <TabsList className="grid w-full grid-cols-5 md:w-auto">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="posts">Posts</TabsTrigger>
        <TabsTrigger value="media">Media</TabsTrigger>
        <TabsTrigger value="comments">Comments</TabsTrigger>
        <TabsTrigger value="users">Users</TabsTrigger>
       </TabsList>
       <TabsContent value="overview" className="space-y-4">
        <StatsCards />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
         <Card className="lg:col-span-4">
          <CardHeader>
           <CardTitle>Recent Posts</CardTitle>
          </CardHeader>
          <CardContent>
           <RecentPosts />
          </CardContent>
         </Card>
         <Card className="lg:col-span-3">
          <CardHeader>
           <CardTitle>Quick Draft</CardTitle>
           <CardDescription>Write a quick draft to save for later</CardDescription>
          </CardHeader>
          <CardContent>
           <QuickDraft />
          </CardContent>
         </Card>
        </div>
        <Card>
         <CardHeader>
          <CardTitle>Recent Comments</CardTitle>
          <CardDescription>You have 5 comments awaiting moderation</CardDescription>
         </CardHeader>
         <CardContent>
          <RecentComments />
         </CardContent>
        </Card>
       </TabsContent>
       <TabsContent value="posts">
        <Card>
         <CardHeader className="flex flex-row items-center justify-between">
          <div>
           <CardTitle>All Posts</CardTitle>
           <CardDescription>Manage your blog posts</CardDescription>
          </div>
          <Button>
           <PlusCircle className="mr-2 h-4 w-4" />
           Add New
          </Button>
         </CardHeader>
         <CardContent>
          <p className="text-sm text-muted-foreground">Your posts content would go here.</p>
         </CardContent>
        </Card>
       </TabsContent>
       <TabsContent value="media">
        <Card>
         <CardHeader>
          <CardTitle>Media Library</CardTitle>
          <CardDescription>Manage your media files</CardDescription>
         </CardHeader>
         <CardContent>
          <p className="text-sm text-muted-foreground">Your media content would go here.</p>
         </CardContent>
        </Card>
       </TabsContent>
       <TabsContent value="comments">
        <Card>
         <CardHeader>
          <CardTitle>Comments</CardTitle>
          <CardDescription>Manage comments on your posts</CardDescription>
         </CardHeader>
         <CardContent>
          <p className="text-sm text-muted-foreground">Your comments content would go here.</p>
         </CardContent>
        </Card>
       </TabsContent>
       <TabsContent value="users">
        <Card>
         <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>Manage users and permissions</CardDescription>
         </CardHeader>
         <CardContent>
          <p className="text-sm text-muted-foreground">Your users content would go here.</p>
         </CardContent>
        </Card>
       </TabsContent>
      </Tabs>
     </main>
    </div>
   </div>
  </SidebarProvider>
 );
}
