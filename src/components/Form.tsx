import React from "react";
import { Form, Formik } from "formik";
import Input from "./Input";
import Button from "./Button";

interface IForm {
  userName: string;
}

interface MyFormProps {
  getUser: (userName: string) => Promise<void>;
}

const initialValues: IForm = {
  userName: "",
};

const MyForm: React.FC<MyFormProps> = ({ getUser }) => {
  return (
    <div className="flex w-full md:w-4/6 mx-auto flex-col">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { resetForm, setSubmitting, setErrors }) => {
          try {
            await getUser(values.userName);
            resetForm();
          } catch (error) {
            setErrors({ userName: "User Not Found" });
            console.error("Error:", error);
          } finally {
            setSubmitting(false);
          }
        }}
        validateOnChange={true}
        validate={(values) => {
          const errors: { [key: string]: string } = {};
          if (!values.userName.trim()) {
            errors.userName = "Username is required";
          } else if (/\s/.test(values.userName)) {
            errors.userName = "Username cannot contain spaces";
          }
          return errors;
        }}
      >
        {({ values, isSubmitting, handleChange, errors }) => (
          <Form>
            <Input
              title="Enter Github Username"
              name="userName"
              value={values.userName}
              onChange={handleChange}
              error={errors.userName}
            />
            <Button
              type="submit"
              disabled={isSubmitting || Boolean(errors?.userName)}
            >
              Search
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
