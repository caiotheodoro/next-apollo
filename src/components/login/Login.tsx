import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Container,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import LoginInput from "./LoginInput";

const Login = () => {
  const router = useRouter();
  return (
    <Container h="100vh">

      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .required("Username is required")
            .max(200, "Username too long"),
          password: Yup.string()
            .required("Password is required")
            .min(6, "Password too short")
            .max(200, "Password too long"),
          email: Yup.string()
            .required("Email is required")
            .email("Invalid email")
            .max(200, "Email too long"),
        })}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        <VStack h="100%" justify="center">
          <VStack as={Form} shadow="2xl" w="100%" bg="gray.50" p="4">
            <Heading>Login</Heading>
            <LoginInput name="email" label="Email" />
            <LoginInput name="username" label="Username" />
            <LoginInput
              name="password"
              type="password"
              label="Password"
            />
            <ButtonGroup
              colorScheme="purple"
              w="100%"
              size="lg"
              pt="4"
            >
              <Button
                variant="outline"
                w="100%"
                onClick={() => router.back()}
                leftIcon={<ArrowBackIcon />}
              >
                Back
              </Button>
              <Button w="100%" type="submit">
                Login
              </Button>
            </ButtonGroup>
          </VStack>
        </VStack>
      </Formik>
    </Container>
  );
};

export default Login;
