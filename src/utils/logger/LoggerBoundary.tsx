import React, { Component, ReactNode } from "react";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { logger } from "./logger";

type LoggerBoundaryProps = {
 children: ReactNode;
};

type LoggerBoundaryState = {
 hasError: boolean;
};

export class LoggerBoundary extends Component<LoggerBoundaryProps, LoggerBoundaryState> {
 constructor(props: LoggerBoundaryProps) {
  super(props);
  this.state = { hasError: false };
 }

 static getDerivedStateFromError() {
  return { hasError: true };
 }

 componentDidCatch(error: Error, info: React.ErrorInfo) {
  logger.error("Unhandled error caught in LoggerBoundary", { error: error.message, stack: info.componentStack });
 }

 handleDownloadLogs = () => {
  logger.downloadLogs();
 };

 handleClearLogs = () => {
  logger.clearLogs();
  this.setState({ hasError: false });
 };

 render() {
  if (this.state.hasError) {
   return (
    <div className="flex justify-center items-center h-screen">
     <Card className="w-[400px] text-center shadow-lg">
      <CardHeader>
       <CardTitle className="text-destructive">Something went wrong</CardTitle>
       <CardDescription>The error has been logged. You can download the logs for debugging.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
       <Button variant="default" onClick={this.handleDownloadLogs}>
        📥 Download Logs
       </Button>
       <Button variant="destructive" onClick={this.handleClearLogs}>
        🗑️ Clear Logs & Retry
       </Button>
      </CardContent>
     </Card>
    </div>
   );
  }

  return this.props.children;
 }
}
