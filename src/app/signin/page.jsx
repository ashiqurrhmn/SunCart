"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const {data, error} = await authClient.signIn.email({
        email,
        password,
        callbackURL: '/'
    });

    console.log({data, error});
  };

  return (
      <Card className="w-full mx-auto my-30 bg-orange-50 shadow-2xl max-w-md sm:max-w-lg md:max-w-xl py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8">
        
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-orange-500 mb-4 sm:mb-6">
          Sign In
        </h1>

        <Form className="flex flex-col  gap-4" onSubmit={onSubmit}>
          

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-gray-700">Email</Label>
            <Input
              placeholder="john@example.com"
              className="focus:ring-2 focus:ring-orange-400"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="text-gray-700">Password</Label>
            <Input
              placeholder="Enter your password"
              className="focus:ring-2 focus:ring-orange-400"
            />
            <Description className="text-xs text-gray-500">
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex flex-col sm:flex-row gap-2 mt-2">
            
            <Button type="submit" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white">
              <Check />
              Sign in
            </Button>

            <Button
              type="reset"
              variant="secondary"
              className="w-full sm:w-auto border-orange-400 text-orange-500 hover:bg-orange-100"
            >
              Reset
            </Button>

          </div>
        </Form>

      </Card>
  );
}