import { z } from "zod";

import { useAuthStore } from "@/features/auth/store/use-auth-store";
import { Button } from "@/shared/ui/button";
import SectionTitle from "@/shared/ui/custom/section-title";
import SectionWrapper from "@/shared/ui/custom/section-wrapper";
import Wrapper from "@/shared/ui/custom/wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Switch } from "@/shared/ui/switch";
import { Textarea } from "@/shared/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateNewTest } from "../api/query";
import { formSchema } from "../model/form-schema";
import SelectCourseLevel from "./select-course-level";
import SelectEduLevel from "./select-edu-level";
import SelectSemestr from "./select-semestr";

export function CreateNewTest() {
  const { user } = useAuthStore();
  const { mutate: createNewTest } = useCreateNewTest({
    onSuccess: (data) => {
      console.log(data);
      toast.success("Tabriklaymiz", {
        description: "Test muvaffaqiyatli yaratildi",
      });
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      subject: "",
      faculty: "",
      courseLevel: "",
      eduLevel: "",
      semestr: "",
      university: "",
      file: undefined,
      visibility: false,
    },
    mode: "onChange",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    const visibility = values.visibility ? "private" : "public";

    for (const [key, value] of Object.entries(values)) {
      if (value === undefined || value === null) continue;
      if (key === "visibility") continue;

      if (value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, String(value));
      }
    }

    formData.append("visibility", visibility);
    formData.append("userId", String(user?.id ?? ""));

    createNewTest(formData);
  }

  return (
    <SectionWrapper>
      <Wrapper>
        <SectionTitle title="Create a new test" />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Title <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="My cool test" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Test file (.txt) <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".txt"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        field.onChange(file);
                      }}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Subject <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Informatics" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="visibility"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <p>Public</p>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <p>Private</p>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="university"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>University</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Technical University of Bukhara"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="faculty"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Faculty</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Faculty of Computer Science"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <SelectEduLevel control={form.control} />

            <SelectCourseLevel control={form.control} />

            <SelectSemestr control={form.control} />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Test description" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </Wrapper>
    </SectionWrapper>
  );
}
