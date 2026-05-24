'use client';

import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from "@heroui/react";
import React, { useContext } from 'react';
import { AuthContext } from '@/providers/AuthProvider';
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from 'next/navigation'; 



const AddPet = () => {
  const { user } = useContext(AuthContext);

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const petRawData = Object.fromEntries(formData.entries());

    const petData = {
      ...petRawData,
      age: Number(petRawData.age),
      adoptionFee: Number(petRawData.adoptionFee),
      ownerEmail: user?.email || petRawData.ownerEmail,
      ownerName: user?.displayName || 'Anonymous',
      status: 'available',
      createdAt: new Date().toISOString()
    };

    try {
      const res = await fetch('http://localhost:5000/pet', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(petData)
      });
      
      const data = await res.json();
      
      if (data.insertedId) {
        toast.success('Pet added successfully!');
        router.push('/dashboard/my-listing'); 
      } else {
        toast.error('Failed to add pet. Please try again.');
      }
    } catch (error) {
      console.error("Error inserting pet:", error);
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <Card className="bg-green-100">
        <form onSubmit={onSubmit} className="p-10 space-y-8 max-w-3xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Pet Name */}
            <TextField name="petName" isRequired>
              <Label>Pet Name</Label>
              <Input placeholder="Enter pet name" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Species */}
            <Select name="species" isRequired className="w-full" placeholder="Select Species">
              <Label>Species</Label>
              <Select.Trigger className="rounded-2xl">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="Dog" textValue="Dog">Dog<ListBox.ItemIndicator /></ListBox.Item>
                  <ListBox.Item id="Cat" textValue="Cat">Cat<ListBox.ItemIndicator /></ListBox.Item>
                  <ListBox.Item id="Bird" textValue="Bird">Bird<ListBox.ItemIndicator /></ListBox.Item>
                  <ListBox.Item id="Rabbit" textValue="Rabbit">Rabbit<ListBox.ItemIndicator /></ListBox.Item>
                  <ListBox.Item id="Other" textValue="Other">Other<ListBox.ItemIndicator /></ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            {/* Breed */}
            <TextField name="breed" isRequired>
              <Label>Breed</Label>
              <Input placeholder="Enter breed name" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Age */}
            <TextField name="age" isRequired>
              <Label>Age</Label>
              <Input type="number" placeholder="Enter age" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Gender */}
            <Select name="gender" isRequired className="w-full" placeholder="Select Gender">
              <Label>Gender</Label>
              <Select.Trigger className="rounded-2xl">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="Male" textValue="Male">Male<ListBox.ItemIndicator /></ListBox.Item>
                  <ListBox.Item id="Female" textValue="Female">Female<ListBox.ItemIndicator /></ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            {/* Health Status */}
            <TextField name="healthStatus" isRequired>
              <Label>Health Status</Label>
              <Input placeholder="Enter physical condition" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Vaccination Status */}
            <Select name="vaccinationStatus" isRequired className="w-full" placeholder="Select Vaccination Status">
              <Label>Vaccination Status</Label>
              <Select.Trigger className="rounded-2xl">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="Vaccinated" textValue="Vaccinated">Vaccinated<ListBox.ItemIndicator /></ListBox.Item>
                  <ListBox.Item id="Not Vaccinated" textValue="Not Vaccinated">Not Vaccinated<ListBox.ItemIndicator /></ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            {/* Location */}
            <TextField name="location" isRequired>
              <Label>Location</Label>
              <Input placeholder="Enter location" className="rounded-2xl" />
              <FieldError />
            </TextField>

            {/* Adoption Fee */}
            <TextField name="adoptionFee" isRequired>
              <Label>Adoption Fee</Label>
              <Input type="number" placeholder="Enter price" className="rounded-2xl w-full" />
              <FieldError />
            </TextField>

            {/* Image URL */}
            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label>Image URL</Label>
                <Input type="url" placeholder="Enter img url" className="rounded-2xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea placeholder="Say something about pet" className="rounded-3xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Owner Email */}
            {/* Owner Email */}
            <div className="md:col-span-2">
              <Label className="text-sm font-medium">Email</Label>
              <input
                type="email"
                name="ownerEmail"
                defaultValue={user?.email || ""}
                placeholder="Enter your email"
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-2xl outline-none focus:border-green-500"
              />
            </div>
          </div>

          <Link href={'/my-listing'}>
            <Button type="submit" className="w-full rounded-2xl bg-green-500 text-white hover:bg-green-600">
              Add Pet
            </Button>
          </Link>
        </form>
      </Card>
    </div>
  );
};

export default AddPet;