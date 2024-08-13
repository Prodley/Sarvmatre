'use client'
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Define the schema using Zod
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  website: z.string().url().optional(),
  agree: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms",
  }),
  newsletter: z.boolean().optional(),
  project: z.string().min(1, "Project description is required"),
});

type ContactFormSchema = z.infer<typeof contactFormSchema>;

export function ContactFormLayout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormSchema> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="w-full  container mx-auto py-16 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">
              What&apos;s your name? <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Your full name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">
              Your email address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              placeholder="E-mail address"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Website URL</Label>
            <Input
              id="website"
              placeholder="www.domain.com"
              type="url"
              {...register("website")}
            />
            {errors.website && (
              <p className="text-red-500 text-sm">{errors.website.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <Checkbox id="agree" {...register("agree")} />
              <label
                htmlFor="agree"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to Move processing the information submitted in order to
                respond to your request.
              </label>
            </div>
            {errors.agree && (
              <p className="text-red-500 text-sm">{errors.agree.message}</p>
            )}
            <div className="flex items-start space-x-2">
              <Checkbox id="newsletter" {...register("newsletter")} />
              <label
                htmlFor="newsletter"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Sign up to receive our monthly newsletter.
              </label>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="project">
            Describe your project <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="project"
            placeholder="Write here..."
            className="min-h-[200px]"
            {...register("project")}
          />
          {errors.project && (
            <p className="text-red-500 text-sm">{errors.project.message}</p>
          )}
        </div>
      </div>
      <div className="mt-8">
        <Button type="submit" className="ml-auto bg-black text-white">
          <SendIcon className="mr-2 h-4 w-4" />
          Send request
        </Button>
      </div>
    </form>
  );
}

function SendIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}
