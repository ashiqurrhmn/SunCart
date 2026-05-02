"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { CgProfile } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import { toast } from "react-toastify";

export function UpdateProfileForm() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.trim();
    const image = formData.get("image")?.trim();

    if (!name && !image) {
         toast.warning("Nothing to update!");
      return;
    }
    const updateData = {};

    if (name) updateData.name = name;
    if (image) updateData.image = image;

    await authClient.updateUser(updateData);
    toast.success("Profile updated successfully!");
  };
  return (
    <Modal>
      <Button className="bg-orange-500">
        <CiEdit />
        Update
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header className="text-2xl flex gap-3 items-center justify-center">
              <CgProfile />
              <Modal.Heading className="text-2xl">Update Profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="text">
                    <Label>Image URL</Label>
                    <Input placeholder="Enter your Image URL" />
                  </TextField>
                  <Modal.Footer>
                    <Button
                      slot="close"
                      className="text-orange-500"
                      variant="secondary"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      slot="close"
                      className="bg-orange-500"
                    >
                      Submit
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
