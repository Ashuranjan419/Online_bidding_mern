import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Caption, Container, CustomNavLink, PrimaryButton, Title } from "../../router";
import { commonClassNameOfInput } from "../../components/common/Design";

export const Login = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent page reload on form submit

    const { email, password } = formData;

    // Make the API call to login the user
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        // Save authentication token or user data if needed (e.g., in localStorage or context)
        localStorage.setItem("authToken", result.token);  // Example: Store the token
        alert("Login successful");

        // Reset the form fields after successful login
        setFormData({
          email: "",
          password: "",
        });

        // Optionally, redirect to another page (e.g., homepage or dashboard)
        window.location.href = "/dashboard";  // Example redirect
      } else {
        alert(result.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <section className="login pt-16 relative">
      <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute top-2/3"></div>
      <div className="bg-[#241C37] pt-8 h-[40vh] relative content">
        <Container>
          <div>
            <Title level={3} className="text-white">
              Log In
            </Title>
            <div className="flex items-center gap-3">
              <Title level={5} className="text-green font-normal text-xl">
                Home
              </Title>
              <Title level={5} className="text-white font-normal text-xl">
                /
              </Title>
              <Title level={5} className="text-white font-normal text-xl">
                Log In
              </Title>
            </div>
          </div>
        </Container>
      </div>
      <form onSubmit={handleSubmit} className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl">
        <div className="text-center">
          <Title level={5}>New Member</Title>
          <p className="mt-2 text-lg">
            Don't have an account? <CustomNavLink href="/register">Sign Up Here</CustomNavLink>
          </p>
        </div>

        <div className="py-5 mt-8">
          <Caption className="mb-2">Enter Your Email *</Caption>
          <input
            type="email"
            name="email"
            className={commonClassNameOfInput}
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Caption className="mb-2">Password *</Caption>
          <input
            type="password"
            name="password"
            className={commonClassNameOfInput}
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center gap-2 py-4">
          <input type="checkbox" />
          <Caption>I agree to the Terms & Policy</Caption>
        </div>
        <PrimaryButton className="w-full rounded-none my-5">LOGIN</PrimaryButton>
        <div className="text-center border py-4 rounded-lg mt-4">
          <Title>OR SIGN IN WITH</Title>
          <div className="flex items-center justify-center gap-5 mt-5">
            <button className="flex items-center gap-2 bg-red-500 text-white p-3 px-5 rounded-sm">
              <FaGoogle />
              <p className="text-sm">SIGN IN USING GOOGLE</p>
            </button>
            <button className="flex items-center gap-2 bg-indigo-500 text-white p-3 px-5 rounded-sm">
              <FaFacebook />
              <p className="text-sm">SIGN IN USING FACEBOOK</p>
            </button>
          </div>
        </div>
        <p className="text-center mt-5">
          By clicking the login button, you agree to Cobiro's <span className="text-green underline">Terms & Conditions</span> and
          <span className="text-green underline"> Privacy Policy</span>.
        </p>
      </form>
      <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute bottom-96 right-0"></div>
    </section>
  );
};
