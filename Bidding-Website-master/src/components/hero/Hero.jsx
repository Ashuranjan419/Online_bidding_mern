import { Body, Caption, Container, PrimaryButton, ProfileCard, Title } from "../../router";
import { IoIosSearch } from "react-icons/io";
import { AiOutlinePropertySafety } from "react-icons/ai";
import PropTypes from "prop-types";
import { CiCirclePlus } from "react-icons/ci";
export const User1 = "https://cdn-icons-png.flaticon.com/128/6997/6997662.png";
export const User2 = "https://cdn-icons-png.flaticon.com/128/236/236832.png";
export const User3 = "https://cdn-icons-png.flaticon.com/128/236/236831.png";
export const User4 = "https://cdn-icons-png.flaticon.com/128/1154/1154448.png";

export const Hero = () => {
  return (
    <>
      <section className="hero bg-primary py-8">
        <Container className="flex items-center justify-between md:flex-row flex-col">
          <div className="w-full md:w-1/2 text-white pr-12">
            <Title level={3} className="text-white">
              Build, sell & collect digital items.
            </Title>
            <Body className="leading-7 text-gray-200 my-8">
            Welcome to Bid-Out – Your Premier Online Auction Platform!
           At Bid-Out, we bring the thrill of the auction experience to your fingertips. Our platform is designed to connect buyers and sellers, offering a wide range of exclusive items across various categories, from collectibles and electronics to rare finds and everyday essentials. With secure transactions, fair bidding practices, and a user-friendly interface, Bid-Out is the perfect place for seasoned collectors and first-time bidders alike.
           Discover incredible deals, engage in exciting bidding wars, and experience the excitement of winning unique items at unbeatable prices. Our dedicated team ensures that every auction is transparent and enjoyable, with detailed item listings and clear auction terms.
           Join us today and start your bidding journey! Whether you're here to sell or to score your next big win, Bid-Out is the auction community you've been looking for.
           Happy bidding!
            </Body>
            
            <div className="flex items-center gap-8 my-8">
              <div>
                <Title level={4} className=" text-white">
                  842M
                </Title>
                <Body className="leading-7 text-gray-200">Total Product</Body>
              </div>
              <div>
                <Title level={4} className=" text-white">
                  842M
                </Title>
                <Body className="leading-7 text-gray-200">Total Auction</Body>
              </div>
              <div>
                <Title level={4} className=" text-white">
                  54
                </Title>
                <Body className="leading-7 text-gray-200">Total Category</Body>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 my-16 relative py-16">
            <img src="../images/home/hero.webp" alt="" />
            <div className="horiz-move absolute md:top-28 top-8 left-0">
              <Box title="Proof of quality" />
            </div>
            <div className="horiz-move absolute bottom-72 right-0">
              <Box title="Safe and secure" />
            </div>

            <div className="px-5 py-4 bg-white shadow-md flex items-center gap-5 rounded-xl ml-5 -mt-5 vert-move w-1/2">
              <Title>58M Happy Client</Title>
              <div className="flex items-center">
                <ProfileCard className="border-2 border-white">
                  <img src={User1} alt="User1" className="w-full h-full object-cover" />
                </ProfileCard>
                <ProfileCard className="border-2 border-white -ml-4">
                  <img src={User2} alt="User1" className="w-full h-full object-cover" />
                </ProfileCard>
                <ProfileCard className="border-2 border-white -ml-4">
                  <img src={User3} alt="User1" className="w-full h-full object-cover" />
                </ProfileCard>
                <ProfileCard className="border-2 border-white -ml-4">
                  <img src={User4} alt="User1" className="w-full h-full object-cover" />
                </ProfileCard>

                <ProfileCard className="border-2 border-white -ml-4">
                  <CiCirclePlus size={27} />
                </ProfileCard>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <div className="bg-white w-full py-16 -mt-10 rounded-t-[40px]"></div>
    </>
  );
};

/*const SearchBox = () => {
  return (
    <>
      <form className="">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-800 sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-2 flex items-center ps-3 pointer-events-none">
            <IoIosSearch color="black" size={25} />
          </div>
          <input type="search" id="default-search" className="block shadow-md w-full p-6 ps-16 text-sm text-gray-800 rounded-full bg-gray-50 outline-none" placeholder="Search product..." />
          <PrimaryButton className="absolute end-2.5 bottom-2">Search</PrimaryButton>
        </div>
      </form>
    </>
  );
};*/

const Box = ({ title, desc }) => {
  return (
    <>
      <div className="px-5 py-4 bg-white shadow-md flex items-center gap-5 rounded-xl w-auto">
        <div className="w-14 h-14 bg-green_100 flex items-center justify-center rounded-full">
          <AiOutlinePropertySafety size={27} className="text-primary" />
        </div>
        <div>
          <Title>{title}</Title>
          <Caption>{desc}</Caption>
        </div>
      </div>
    </>
  );
};

Box.propTypes = {
  title: PropTypes.any,
  desc: PropTypes.any,
};
