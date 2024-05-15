import React from "react";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Tabs defaultValue="account" className="w-full h-[80vh]">
      <TabsList>
        <TabsTrigger value="personal">Personal</TabsTrigger>
        <TabsTrigger value="education">Account</TabsTrigger>
        <TabsTrigger value="experience">Account</TabsTrigger>
        <TabsTrigger value="other">Create</TabsTrigger>
      </TabsList>
      <TabsContent value="personal" className="h-[100%]">
        <Card className="h-[100%]">
          <ScrollArea className="h-[100%]">
            <div className="mb-5 flex flex-col justify-center px-5 gap-2 text-white bg-pink-400 rounded-tl-md rounded-tr-md h-[10dvh]">
              <CardTitle className="capitalize font-medium">
                Personal details
              </CardTitle>
              <CardDescription className="capitalize text-white">
                Make changes to your <strong> profile account</strong> here.
                <span className="capitalize p-1 bg-[#ef4444]">
                  click save when you're done.
                </span>
              </CardDescription>
            </div>
            <form
              noValidate
              onSubmit={handleSubmit}
              className="px-4 flex flex-col justify-between gap-5"
            >
              <div className="flex gap-4 justify-between">
                <div className="w-1/3">
                  <Label className="flex items-center gap-1">
                    First Name
                    <span className="text-red-500 text-xl font-medium">*</span>
                  </Label>
                  <Input id="firstName" placeholder="enter first name" />
                </div>
                <div className="w-1/3">
                  <Label className="flex items-center gap-1">
                    Middle Name
                    <span className="text-red-500 text-xl font-medium">*</span>
                  </Label>
                  <Input id="middleName" placeholder="enter middle name" />
                </div>
                <div className="w-1/3">
                  <Label className="flex items-center gap-1">
                    Last Name
                    <span className="text-red-500 text-xl font-medium">*</span>
                  </Label>
                  <Input id="lastName" placeholder="enter last name" />
                </div>
              </div>
              <div className="flex gap-4 justify-between">
                <div className="w-1/2">
                  <Label className="flex items-center gap-1">
                    Email
                    <span className="text-red-500 text-xl font-medium">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "email is required",
                      pattern: {
                        value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                        message: "email not valid",
                      },
                    })}
                    placeholder="enter email"
                  />
                  {errors.email && (
                    <p style={{ color: "red", fontSize: "15px" }}>
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="w-1/2">
                  <Label className="flex items-center gap-1">
                    Phone
                    <span className="text-red-500 text-xl font-medium">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="number"
                    {...register("phone", {
                      required: "Phone No. is required",
                    })}
                    placeholder="enter phone no."
                  />
                </div>
              </div>
              <div>
                <div>
                  <Label className="flex items-center gap-1">
                    Address
                    <span className="text-red-500 text-xl font-medium">*</span>
                  </Label>
                  <Textarea
                    id="address"
                    className="border rounded-md"
                    placeholder="enter address"
                  ></Textarea>
                </div>
              </div>
              <div className="flex justify-between gap-4">
                <div className="w-1/4">
                  <Label className="flex items-center gap-1">
                    Pin Code
                    <span className="text-red-500 text-xl font-medium">*</span>
                  </Label>
                  <Input
                    className="pincode"
                    type="number"
                    placeholder="enter pincode"
                  />
                </div>
                <div className="w-1/4">
                  <Label className="flex items-center gap-1">
                    Country
                    <span className="text-red-500 text-xl font-medium">*</span>
                  </Label>
                  <Input id="country" placeholder="enter country" />
                </div>
                <div className="w-1/4">
                  <Label className="flex items-center gap-1">
                    State
                    <span className="text-red-500 text-xl font-medium">*</span>
                  </Label>
                  <Input placeholder="enter state" />
                </div>
                <div className="w-1/4">
                  <Label className="flex items-center gap-1">
                    City
                    <span className="text-red-500 text-xl font-medium">*</span>
                  </Label>
                  <Input placeholder="enter city" />
                </div>
              </div>
              <div>
                <Button>Submit</Button>
              </div>
            </form>
          </ScrollArea>
        </Card>
      </TabsContent>
      <TabsContent value="education"></TabsContent>
      <TabsContent value="experience"></TabsContent>
      <TabsContent value="other"></TabsContent>
    </Tabs>
  );
};

export default Form;
