import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, AlertTriangle } from "lucide-react";

const WP_API_URL = "https://wp.grindatunet.no/wordpress/wp-json/wp/v2/guest_reviews";
const TOKEN = "YOUR_ACCESS_TOKEN"; // Replace with actual WordPress API token

export const CabinBookForm = () => {
 const [title, setTitle] = useState("");
 const [content, setContent] = useState("");
 const [success, setSuccess] = useState(false);
 const [error, setError] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setSuccess(false);
  setError(false);

  try {
   await axios.post(WP_API_URL, { title, content, status: "publish" }, { headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" } });

   setSuccess(true);
   setTitle("");
   setContent("");
  } catch (err) {
   console.error("Error submitting review:", err);
   setError(true);
  }
 };

 return (
  <div className="max-w-2xl mx-auto py-8">
   <Card className="shadow-md border border-gray-200 p-6 rounded-xl">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skriv en gjesteanmeldelse</h2>

    {success && (
     <Alert>
      <CheckCircle className="h-5 w-5 text-green-600" />
      <AlertTitle>Innlegget er publisert!</AlertTitle>
      <AlertDescription>Takk for din anmeldelse!</AlertDescription>
     </Alert>
    )}

    {error && (
     <Alert variant="destructive">
      <AlertTriangle className="h-5 w-5 text-red-600" />
      <AlertTitle>Noe gikk galt!</AlertTitle>
      <AlertDescription>Vennligst prøv igjen senere.</AlertDescription>
     </Alert>
    )}

    <CardContent>
     <form onSubmit={handleSubmit} className="space-y-4">
      <Input type="text" placeholder="Tittel på anmeldelsen" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <Textarea placeholder="Skriv din anmeldelse her..." rows={5} value={content} onChange={(e) => setContent(e.target.value)} required />
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
       Publiser anmeldelse
      </Button>
     </form>
    </CardContent>
   </Card>
  </div>
 );
};
