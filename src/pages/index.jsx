import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Icon } from "@iconify/react";
import api from "../api/index";
import { FaPlus } from "react-icons/fa";

import photo from "../assets/dokter.png";
import photo2 from "../assets/Group 97.png";
// import photo3 from "../assets/makan.png";
import mcu from "../assets/mcu.jpg";
import lab from "../assets/lab2.jpg";
import swab from "../assets/swab.jpg";
import kemo from "../assets/kemo.jpg";
import fisio from "../assets/fisio.jpg";
import ambulance from "../assets/ambulance2.jpg";
// import wonton from "../assets/wonton.png";
// import ayam from "../assets/ayam.png";
// import steak from "../assets/steak.png";
// import ayam2 from "../assets/ayam-t.png";
// import mie from "../assets/spaghetti.png";
// import mac from "../assets/macaroni.png";

import NavbarLanding from "../components/layouts/NavbarLanding";
import CardMakanan from "../components/Cards/CardMakanan";

const LandingPage = () => {
  const [food, setFood] = useState([]);

  const slicedFood = [];
  for (let i = 0; i < food.length; i += 4) {
    slicedFood.push(food.slice(i, i + 4));
  }

  const fetchDataFood = async () => {
    try {
      const { data } = await api.get("/makanan");
      setFood(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataFood();
  }, []);

  return (
    <>
      <NavbarLanding />

      <div>
        <img src={photo2} alt="" className="w-full" />
      </div>

      <div id="about-us" className="flex justify-stretch px-8">
        <img src={photo} className="photo" alt="" />
        <div>
          <h3 className="font-bold font-hijau-pudar mt-36 text-xl">ABOUT US</h3>
          <h1 className="font-bold font-hijau text-4xl mt-3">
            Profesional Medical <br />
            Care in Full Measure
          </h1>
          <p className="font-hijau text-justify text-xl mt-4">
            Nutri Health is a leading healthcare institution
            <br />
            dedicated to providing compassionate and <br />
            comprehensive medical services. We prioritize your <br />
            health and well-being, striving to create a healing <br />{" "}
            environment that combines advanced medical <br /> technology with a
            human touch.{" "}
          </p>
        </div>
      </div>

      <div id="service" className="bg-service justify-center p-8">
        <h3 className="font-hijau-pudar text-xl text-center font-semibold ">
          SERVICES
        </h3>
        <h1 className="font-bold font-hijau text-4xl text-center">
          High-Quality Services
        </h1>
        <p className="text-lg text-center font-hijau mt-3">
          Our emergency care services are available 24/7 to provide immediate{" "}
          <br />
          medical attention in critical situations
        </p>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex justify-center gap-x-12 w-full mt-12">
              <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white ">
                <img className="w-full" src={mcu} alt=" Medical Check Up " />
                <div className="px-6 py-4">
                  <div className="font-semibold font-hijau text-xl mb-2">
                    Medical Checkup
                  </div>
                  <ul>
                    <div className="flex">
                      <div className="">
                        <Icon
                          icon="maki:doctor"
                          color="#66d37e"
                          width="20"
                          height="20"
                        />
                      </div>
                      <p className="font-medium font-abu ml-3">
                        dr. Jane Cooper
                      </p>
                    </div>
                    <div className="flex mt-2">
                      <div className="">
                        <Icon
                          icon="vaadin:money"
                          color="#66d37e"
                          width="20"
                          height="20"
                        />
                      </div>
                      <p className="font-medium font-abu ml-3">Rp 250.000</p>
                    </div>
                    <div className="flex mt-2">
                      <div className="">
                        <Icon
                          icon="maki:doctor"
                          color="#66d37e"
                          width="20"
                          height="20"
                        />
                      </div>
                      <p className="font-medium font-abu ml-3">19.00</p>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
                <img className="w-full h-667" src={lab} alt="Laboratorium" />
                <div className="px-6 py-4">
                  <div className="font-semibold font-hijau text-xl mb-2">
                    Laboratorium
                  </div>
                  <ul>
                    <div className="flex">
                      <div className="">
                        <Icon
                          icon="maki:doctor"
                          color="#66d37e"
                          width="20"
                          height="20"
                        />
                      </div>
                      <p className="font-medium font-abu ml-3">
                        dr. Wade Warren
                      </p>
                    </div>
                    <div className="flex mt-2">
                      <div className="">
                        <Icon
                          icon="vaadin:money"
                          color="#66d37e"
                          width="20"
                          height="20"
                        />
                      </div>
                      <p className="font-medium font-abu ml-3">Rp 250.000</p>
                    </div>
                    <div className="flex mt-2">
                      <div className="">
                        <Icon
                          icon="maki:doctor"
                          color="#66d37e"
                          width="20"
                          height="20"
                        />
                      </div>
                      <p className="font-medium font-abu ml-3">19.00</p>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
                <img className="w-full" src={swab} alt="Swab PCR" />
                <div className="px-6 py-4">
                  <div className="font-semibold font-hijau text-xl mb-2">
                    Swab PCR
                  </div>
                  <ul>
                    <div className="flex">
                      <div className="">
                        <Icon
                          icon="maki:doctor"
                          color="#66d37e"
                          width="20"
                          height="20"
                        />
                      </div>
                      <p className="font-medium font-abu ml-3">
                        dr. Esther Howard
                      </p>
                    </div>
                    <div className="flex mt-2">
                      <div className="">
                        <Icon
                          icon="vaadin:money"
                          color="#66d37e"
                          width="20"
                          height="20"
                        />
                      </div>
                      <p className="font-medium font-abu ml-3">Rp 250.000</p>
                    </div>
                    <div className="flex mt-2">
                      <div className="">
                        <Icon
                          icon="maki:doctor"
                          color="#66d37e"
                          width="20"
                          height="20"
                        />
                      </div>
                      <p className="font-medium font-abu ml-3">19.00</p>
                    </div>
                  </ul>
                </div>
              </div>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="flex justify-center gap-x-12 w-full mt-12">
              <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-white">
                <img className="w-full" src={ambulance} alt="Ambulance" />
                <div className="px-6 py-4">
                  <div className="font-hijau font-semibold text-xl mb-2">
                    Ambulance
                  </div>
                  <ul>
                    <div className="flex">
                      <div className="">
                        <Icon
                          icon="maki:doctor"
                          color="#66d37e"
                          width="20"
                          height="20"
                        />
                      </div>
                      <p className="font-medium font-abu ml-3">
                        dr. Wade Warren
                      </p>
                    </div>
                    <div className="flex mt-2">
                      <div className="">
                        <Icon
                          icon="vaadin:money"
                          color="#66d37e"
                          width="20"
                          height="20"
                        />
                      </div>
                      <p className="font-medium font-abu ml-3">Rp 250.000</p>
                    </div>
                    <div className="flex mt-2">
                      <div className="">
                        <Icon
                          icon="maki:doctor"
                          color="#66d37e"
                          width="20"
                          height="20"
                        />
                      </div>
                      <p className="font-medium font-abu ml-3">19.00</p>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-white">
                <img className="w-full" src={fisio} alt="Fisioterapi" />
                <div className="px-6 py-4">
                  <div className="font-hijau font-semibold text-xl mb-2">
                    Fisioterapi
                  </div>
                  <ul>
                    <div className="flex">
                      <div className="">
                        <Icon
                          icon="maki:doctor"
                          color="#66d37e"
                          width="20"
                          height="20"
                        />
                      </div>
                      <p className="font-medium font-abu ml-3">
                        dr. Wade Warren
                      </p>
                    </div>
                    <div className="flex mt-2">
                      <div className="">
                        <Icon
                          icon="vaadin:money"
                          color="#66d37e"
                          width="20"
                          height="20"
                        />
                      </div>
                      <p className="font-medium font-abu ml-3">Rp 250.000</p>
                    </div>
                    <div className="flex mt-2">
                      <div className="">
                        <Icon
                          icon="maki:doctor"
                          color="#66d37e"
                          width="20"
                          height="20"
                        />
                      </div>
                      <p className="font-medium font-abu ml-3">19.00</p>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-white">
                <img className="w-full" src={kemo} alt="Kemoterapi" />
                <div className="px-6 py-4">
                  <div className="font-hijau font-semibold text-xl mb-2">
                    Kemoterapi
                  </div>
                  <ul>
                    <div className="flex">
                      <div className="">
                        <Icon
                          icon="maki:doctor"
                          color="#66d37e"
                          width="20"
                          height="20"
                        />
                      </div>
                      <p className="font-medium font-abu ml-3">
                        dr. Wade Warren
                      </p>
                    </div>
                    <div className="flex mt-2">
                      <div className="">
                        <Icon
                          icon="vaadin:money"
                          color="#66d37e"
                          width="20"
                          height="20"
                        />
                      </div>
                      <p className="font-medium font-abu ml-3">Rp 250.000</p>
                    </div>
                    <div className="flex mt-2">
                      <div className="">
                        <Icon
                          icon="maki:doctor"
                          color="#66d37e"
                          width="20"
                          height="20"
                        />
                      </div>
                      <p className="font-medium font-abu ml-3">19.00</p>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="nutrition" className="px-48">
        <div className=" justify-between">
          <h1 className="font-bold text-4xl font-hijau mt-28">
            Food Nutrition
          </h1>
          <div className="absolute flex justify-end gap-4 transform -translate-y-7 pr-40 left-5 right-5">
            <a href="#slide-1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide-2" className="btn btn-circle">
              ❯
            </a>
          </div>

          <div className="carousel w-full">
            {slicedFood.map((slide, i) => (
              <div
                key={i}
                id={`slide-${i + 1}`}
                className="carousel-item relative w-full">
                <div className="flex mt-8 gap-8">
                  {slide.map((item, j) => (
                    <CardMakanan
                      key={j}
                      item={item}
                      icon={<FaPlus size={20} />}
                      action={"add"}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-hijau text-putih mt-10">
        <div className="container mx-auto py-10">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold">Nutri Health</h3>
              <p className="mt-3">
                Jl. Sunan Kalijaga No. 100, Tansungpinang, Kepulauan Riau
              </p>
              <p className="mt-3">Email: nutrihealth@mail.com</p>
              <p className="mt-3">Phone: (+62) 812-3456-7890 </p>
            </div>
            <div className="w-full md:w-1/3 mt-5 md:mt-0 pl-10">
              <h3 className="text-xl font-bold">About Us</h3>
              <ul className="mt-3">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="mt-1">
                  <Link to="">About</Link>
                </li>
                <li className="mt-1">
                  <Link to="">Services</Link>
                </li>
                <li className="mt-1">
                  <Link to="">Nutrition</Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 mt-5 md:mt-0">
              <h3 className="text-xl font-bold">Connect with Us</h3>
              <ul className="mt-3 flex flex-row gap-4">
                <li>
                  <a href="#">
                    <Icon icon="fe:facebook" width="30" height="30" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <Icon icon="dashicons:instagram" width="30" height="30" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <Icon icon="mdi:twitter" width="30" height="30" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <Icon icon="ic:round-whatsapp" width="30" height="30" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-10">
            <p>Copyrigth &copy; 2023 Nutri Health. All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
