import React from "react";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import axios from "axios";
import Swal from "sweetalert2";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const baseUrl = "http://localhost:8080/test";
    try {
      await axios
        .post(baseUrl, data)
        .then(() => {
          console.log("success");
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Error occurred",
            text: "Error",
          });
        });
    } catch (error) {}
  };

  return (
    <Tabs defaultValue="personal" className="w-full h-[80vh]">
      <TabsList>
        <TabsTrigger value="personal">Personal</TabsTrigger>
        <TabsTrigger value="education">Account</TabsTrigger>
        <TabsTrigger value="experience">Account</TabsTrigger>
        <TabsTrigger value="other">Create</TabsTrigger>
      </TabsList>
      <TabsContent value="personal" className="h-[100%]">
        <Card className="h-[100%]">
          <ScrollArea className="h-[100%]">
            <div className="mb-5 flex flex-col justify-center px-5   gap-2 text-white bg-pink-400 rounded-tl-md rounded-tr-md min-h-[10dvh] max-h-content">
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
              onSubmit={handleSubmit(onSubmit)}
              className="px-4 flex flex-col justify-between gap-5"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <div className="sm:w-1/3">
                  <Label className="flex items-center gap-1">
                    First Name
                    <span className="text-red-500 text-xl font-medium">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="enter first name"
                    {...register("firstName", { required: true })}
                  />
                  {errors.firstName && (
                    <p className="text-red-500">First Name is required</p>
                  )}
                </div>
                <div className="sm:w-1/3">
                  <Label className="flex items-center gap-1">
                    Middle Name
                    <span className="text-red-500 text-xl font-medium">*</span>
                  </Label>
                  <Input
                    id="middleName"
                    type="text"
                    placeholder="enter middle name"
                    {...register("middleName", { required: true })}
                  />
                  {errors.middleName && (
                    <p className="text-red-500">Middle Name is required</p>
                  )}
                </div>
                <div className="sm:w-1/3">
                  <Label className="flex items-center gap-1">
                    Last Name
                    <span className="text-red-500 text-xl font-medium">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="enter last name"
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && (
                    <p className="text-red-500">Last Name is required</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <div className="sm:w-1/2">
                  <Label className="flex items-center gap-1">
                    Email
                    <span className="text-red-500 text-xl font-medium">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="enter email"
                    {...register("email", {
                      required: "email is required",
                      pattern: {
                        value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                        message: "email not valid",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="sm:w-1/2">
                  <Label className="flex items-center gap-1">
                    Phone
                    <span className="text-red-500 text-xl font-medium">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="number"
                    placeholder="enter phone no."
                    {...register("phone", {
                      required: "Phone No. is required",
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-500">{errors.phone.message}</p>
                  )}
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
                    {...register("address", { required: true })}
                  />
                  {errors.address && (
                    <p className="text-red-500">Address is required</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="md:w-1/4">
                  <Label className="flex items-center gap-1">
                    Pin Code
                    <span className="text-red-500 text-xl font-medium">*</span>
                  </Label>
                  <Input
                    className="pincode"
                    type="number"
                    placeholder="enter pincode"
                    {...register("pincode", { required: true })}
                  />
                  {errors.pincode && (
                    <p className="text-red-500">Pin Code is required</p>
                  )}
                </div>

                <div className="md:w-1/4">
                  <Label className="flex items-center gap-1">
                    Country
                    <span className="text-red-500 text-xl font-medium">*</span>
                  </Label>
                  <Input
                    id="country"
                    placeholder="enter country"
                    {...register("country", { required: true })}
                  />
                  {errors.country && (
                    <p className="text-red-500">Country is required</p>
                  )}
                </div>

                <div className="md:w-1/4">
                  <Label className="flex items-center gap-1">
                    State
                    <span className="text-red-500 text-xl font-medium">*</span>
                  </Label>
                  <Input
                    id="state"
                    placeholder="enter state"
                    {...register("state", { required: true })}
                  />
                  {errors.state && (
                    <p className="text-red-500">State is required</p>
                  )}
                </div>

                <div className="md:w-1/4">
                  <Label className="flex items-center gap-1">
                    City
                    <span className="text-red-500 text-xl font-medium">*</span>
                  </Label>
                  <Input
                    id="city"
                    placeholder="enter city"
                    {...register("city", { required: true })}
                  />
                  {errors.city && (
                    <p className="text-red-500">City is required</p>
                  )}
                </div>
              </div>
              <div className="py-2">
                <Button type="submit" className="w-full sm:w-max">
                  Submit
                </Button>
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
