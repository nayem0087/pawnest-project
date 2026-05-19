'use client'

import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from "@heroui/react";
import React, { useContext } from 'react';
import { AuthContext } from '@/providers/AuthProvider';


const AddPets = () => {

  const { user } = useContext(AuthContext);

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const pet = Object.fromEntries(formData.entries())

    console.log(pet);

    const res = await fetch('http://localhost:5000/pet', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(pet)
    })
    const data = await res.json();

    console.log(data);

  }

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <Card>
        <form
          onSubmit={onSubmit}
          className="p-10 space-y-8 max-w-3xl mx-auto w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Pet Name */}
            <TextField name="petName" isRequired>
              <Label>Pet Name</Label>
              <Input
                placeholder="Enter pet name"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>

            {/* Species */}
            <div>
              <Select
                name="species"
                isRequired
                className="w-full"
                placeholder="Select Species"
              >
                <Label>Species</Label>

                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Dog" textValue="Dog">
                      Dog
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Cat" textValue="Cat">
                      Cat
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Bird" textValue="Bird">
                      Bird
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Rabbit" textValue="Rabbit">
                      Rabbit
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Other" textValue="Other">
                      Other
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Breed */}
            <TextField name="breed" isRequired>
              <Label>Breed</Label>
              <Input
                placeholder="Enter breed name"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>

            {/* Age */}
            <TextField name="age" type="number" isRequired>
              <Label>Age</Label>
              <Input
                type="number"
                placeholder="Enter age"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>

            {/* Gender */}
            <div>
              <Select
                name="gender"
                isRequired
                className="w-full"
                placeholder="Select Gender"
              >
                <Label>Gender</Label>

                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="Male" textValue="Male">
                      Male
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="Female" textValue="Female">
                      Female
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Health Status */}
            <TextField name="healthStatus" isRequired>
              <Label>Health Status</Label>
              <Input
                placeholder="Enter physical condition"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>

            {/* Vaccination Status */}
            <div>
              <Select
                name="vaccinationStatus"
                isRequired
                className="w-full"
                placeholder="Enter Vaccination Status"
              >
                <Label>Vaccination Status</Label>

                <Select.Trigger className="rounded-2xl">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item
                      id="Vaccinated"
                      textValue="Enter Vaccinated"
                    >
                      Vaccinated
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="Not Vaccinated"
                      textValue="Not Vaccinated"
                    >
                      Not Vaccinated
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Location */}
            <TextField name="location" isRequired>
              <Label>Location</Label>
              <Input
                placeholder="Enter location"
                className="rounded-2xl"
              />
              <FieldError />
            </TextField>

            {/* Adoption Fee */}
            <TextField
              name="adoptionFee"
              type="number"
              isRequired
            >
              <Label>Adoption Fee</Label>
              <Input
                type="number"
                placeholder="Enter price"
                className="rounded-2xl w-full"
              />
              <FieldError />
            </TextField>

            {/* Image URL */}
            <div className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="Enter img url"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  placeholder="Say something about pet"
                  className="rounded-3xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Owner Email */}
            <div className="md:col-span-2">
              <Label htmlFor="input-type-email">Email</Label> 
              <br />
              <Input className={'w-full mt-1'} id="input-type-email" placeholder="Enter your email" type="email" />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full rounded-2xl bg-green-500 text-white hover:bg-green-600"
          >
            Add Pet
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddPets;