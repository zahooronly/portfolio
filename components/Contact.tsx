"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const formData = useRef<HTMLFormElement | null>(null);
  const sendEmail = (values: z.infer<typeof formSchema>) => {
    if (formData.current) {
      emailjs
        .sendForm(
          "service_6cr0enb",
          "template_ftf5n3g",
          formData.current,
          "pD6TZSVafFfd7QPXA"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log(values);
          },
          (error) => {
            console.log(error.text);
            console.log(values);
          }
        );
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  return (
    <div className="">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-slate-500 dark:text-slate-100">
        Message Me.
      </h2>
      <div className="mt-3 sm:max-w-[65%] max-w-full mx-auto  border-l-4 rounded-lg p-6">
        <Form {...form}>
          <form
            ref={formData}
            onSubmit={form.handleSubmit(sendEmail)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-slate-100">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Zahoor." {...field} />
                  </FormControl>
                  <FormDescription>Your Full Name.</FormDescription>
                  <FormMessage className="dark:text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-slate-100">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="yourname@domain.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    Your complete email address.
                  </FormDescription>
                  <FormMessage className="dark:text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-slate-100">
                    Your Message:
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Type your message..." {...field} />
                  </FormControl>
                  <FormDescription>
                    Elaborate you message in detail.{" "}
                  </FormDescription>
                  <FormMessage className="dark:text-red-500" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="secondary"
              className="border hover:shadow-md dark:shadow-white/20"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default Contact;
