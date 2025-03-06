"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { City, State } from "@/lib/types";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

interface ContactFormProps {
  city?: City;
  state?: State;
  service?: string;
  location?: string;
}

export default function ContactForm({ city, state, service, location }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", values);
      
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Determine the placeholder text based on available information
  const getPlaceholder = () => {
    if (location) {
      return `Tell us about your ${service || 'service'} needs in ${location}`;
    } else if (city && state) {
      return `Tell us about your ${service || 'service'} needs in ${city.name}, ${state.abbreviation}`;
    } else {
      return `Tell us about your ${service || 'service'} needs`;
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-blue-700">This form has been disabled</h3>
      <p className="text-gray-700 mb-4">Contact form functionality has been removed as requested.</p>
    </div>
  );
}
