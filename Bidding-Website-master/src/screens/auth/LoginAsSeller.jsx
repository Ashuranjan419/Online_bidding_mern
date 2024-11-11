import React, { useState, useEffect } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Caption, Container, CustomNavLink, PrimaryButton, Title } from "../../router";
import { commonClassNameOfInput } from "../../components/common/Design";

export const LoginAsSeller = () => {
  // State to handle input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSellerLoggedIn, setIsSellerLoggedIn] = useState(false); // To track if seller is logged in

  // Effect to check if seller is already logged in
  useEffect(() => {
    const sellerData = JSON.parse(localStorage.getItem("seller")); // Fetch stored seller data from localStorage
    if (sellerData) {
      setIsSellerLoggedIn(true); // If seller data exists, mark as logged in
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you would typically make an API call to log in the seller.
    // Simulating successful login for the demo:
    const sellerData = { email, password }; // Store login info (This should come from your backend)

    // Save seller data to localStorage upon successful login
    localStorage.setItem("seller", JSON.stringify(sellerData));
    setIsSellerLoggedIn(true); // Mark as logged in
  };

  // If seller is already logged in, redirect or show different content
  if (isSellerLoggedIn) {
    return (
      <div className="text-center">
        <Title level={3}>Welcome Back, Seller</Title>
        <p>You are logged in as {email}</p>
        <CustomNavLink href="/seller-dashboard">Go to Dashboard</CustomNavLink>
      </div>
    );
  }

  return (
    <>
      <section className="regsiter pt-16 relative">
        <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute top-2/3"></div>
        <div className="bg-[#241C37] pt-8 h-[40vh] relative content">
          <Container>
            <div>
              <Title level={3} className="text-white">
                Login Seller
              </Title>
              <div className="flex items-center gap-3">
                <Title level={5} className="text-green font-normal text-xl">
                  Home
                </Title>
                <Title level={5} className="text-white font-normal text-xl">
                  /
                </Title>
                <Title level={5} className="text-white font-normal text-xl">
                  Seller
                </Title>
              </div>
            </div>
          </Container>
        </div>
        <form className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl" onSubmit={handleLogin}>
          <div className="text-center">
            <Title level={5}>New Seller Member</Title>
            <p className="mt-2 text-lg">
              Do you already have an account? <CustomNavLink href="/create-account">Signup Here</CustomNavLink>
            </p>
          </div>

          <div className="py-5 mt-8">
            <Caption className="mb-2">Enter Your Email *</Caption>
            <input
              type="email"
              name="email"
              className={commonClassNameOfInput}
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Caption className="mb-2">Password *</Caption>
            <input
              type="password"
              name="password"
              className={commonClassNameOfInput}
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 py-4">
            <input type="checkbox" />
            <Caption>I agree to the Terms & Policy</Caption>
          </div>
          <PrimaryButton type="submit" className="w-full rounded-none my-5 uppercase">
            Become Seller
          </PrimaryButton>
          <div className="text-center border py-4 rounded-lg mt-4">
            <Title>OR SIGNIN WITH</Title>
            <div className="flex items-center justify-center gap-5 mt-5">
              <button className="flex items-center gap-2 bg-red-500 text-white p-3 px-5 rounded-sm">
                <FaGoogle />
                <p className="text-sm">SIGNIN USING GOOGLE</p>
              </button>
              <button className="flex items-center gap-2 bg-indigo-500 text-white p-3 px-5 rounded-sm">
                <FaFacebook />
                <p className="text-sm">SIGNIN USING FACEBOOK</p>
              </button>
            </div>
          </div>
          <p className="text-center mt-5">
            By clicking the signup button, you create a Cobiro account, and you agree to Cobiros <span className="text-green underline">Terms & Conditions</span> &
            <span className="text-green underline"> Privacy Policy </span> .
          </p>
        </form>
        <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute bottom-96 right-0"></div>
      </section>
    </>
  );
};
