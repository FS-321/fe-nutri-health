import { Link } from "react-router-dom";
import photo from "../assets/dokter.png";
import photo2 from "../assets/Group 97.png";
import photo3 from "../assets/makan.png";
import mcu from "../assets/mcu.jpg"
import lab from "../assets/lab2.jpg"
import swab from "../assets/swab.jpg"
import kemo from "../assets/kemo.jpg"
import fisio from "../assets/fisio.jpg"
import ambulance from "../assets/ambulance2.jpg"
import wonton from "../assets/wonton.png"
import ayam from "../assets/ayam.png"
import steak from "../assets/steak.png"
import ayam2 from "../assets/ayam-t.png"
import mie from "../assets/spaghetti.png"
import mac from "../assets/macaroni.png"
import { Icon } from '@iconify/react';
import React from "react";
import { fromJSON } from "postcss";

const LandingPage = () => {
  return (
    <>
      <nav className="bg-white shadow flex flex-row justify-around items-center py-4 relative">
        <h1 className="text-2xl font-bold custom-hijau">Health Care</h1>
        <ul className=" flex flex-row gap-8">
          <li>
            <a
              href="/"
              className="font-medium custom-hijau hover:custom-d-green"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about-us"
              className="font-medium custom-hijau hover:custom-d-green"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#service"
              className="font-medium custom-hijau hover:custom-d-green"
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="#nutrition"
              className="font-medium custom-hijau hover:custom-d-green"
            >
              Nutrition
            </a>
          </li>
          <li>
            <a
              href="/sign-in"
              className="custom-hijau font-medium py-1 px-4 rounded-md border border-green-500 hover:border-green-600 hover:text-green-600"
            >
              Sign in
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <img src={photo2} alt="" className="w-full" />
      </div>

      <div id="about-us" className="flex justify-stretch px-8">
        <img src={photo} className="photo" alt="" />
        <div>
          <h3 className="font-bold font-hijau-pudar mt-36 text-xl">
            ABOUT US
          </h3>
          <h1 className="font-bold font-hijau text-4xl mt-3">
            Profesional Medical <br/>Care in Full Measure
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
                        <div className=""><Icon icon="maki:doctor" color="#66d37e" width="20" height="20" /></div>
                        <p className="font-medium font-abu ml-3">dr. Jane Cooper</p>
                    </div>
                    <div className="flex mt-2">
                      <div className=""><Icon icon="vaadin:money" color="#66d37e" width="20" height="20" /></div>
                      <p className="font-medium font-abu ml-3">Rp 250.000</p>
                    </div>
                    <div className="flex mt-2">
                      <div className=""><Icon icon="maki:doctor" color="#66d37e" width="20" height="20" /></div>
                      <p className="font-medium font-abu ml-3">19.00</p>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
                <img
                  className="w-full h-667"
                  src={lab}
                  alt="Laboratorium"
                />
                <div className="px-6 py-4">
                  <div className="font-semibold font-hijau text-xl mb-2">
                    Laboratorium
                  </div>
                  <ul>
                    <div className="flex">
                        <div className=""><Icon icon="maki:doctor" color="#66d37e" width="20" height="20" /></div>
                        <p className="font-medium font-abu ml-3">dr. Wade Warren</p>
                    </div>
                    <div className="flex mt-2">
                      <div className=""><Icon icon="vaadin:money" color="#66d37e" width="20" height="20" /></div>
                      <p className="font-medium font-abu ml-3">Rp 250.000</p>
                    </div>
                    <div className="flex mt-2">
                      <div className=""><Icon icon="maki:doctor" color="#66d37e" width="20" height="20" /></div>
                      <p className="font-medium font-abu ml-3">19.00</p>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
                <img
                  className="w-full"
                  src={swab}
                  alt="Swab PCR"
                />
                <div className="px-6 py-4">
                  <div className="font-semibold font-hijau text-xl mb-2">
                    Swab PCR
                  </div>
                  <ul>
                    <div className="flex">
                        <div className=""><Icon icon="maki:doctor" color="#66d37e" width="20" height="20" /></div>
                        <p className="font-medium font-abu ml-3">dr. Esther Howard</p>
                    </div>
                    <div className="flex mt-2">
                      <div className=""><Icon icon="vaadin:money" color="#66d37e" width="20" height="20" /></div>
                      <p className="font-medium font-abu ml-3">Rp 250.000</p>
                    </div>
                    <div className="flex mt-2">
                      <div className=""><Icon icon="maki:doctor" color="#66d37e" width="20" height="20" /></div>
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
                <img
                  className="w-full"
                  src={ambulance}
                  alt="Ambulance"
                />
                <div className="px-6 py-4">
                  <div className="font-hijau font-semibold text-xl mb-2">
                    Ambulance
                  </div>
                  <ul>
                    <div className="flex">
                        <div className=""><Icon icon="maki:doctor" color="#66d37e" width="20" height="20" /></div>
                        <p className="font-medium font-abu ml-3">dr. Wade Warren</p>
                    </div>
                    <div className="flex mt-2">
                      <div className=""><Icon icon="vaadin:money" color="#66d37e" width="20" height="20" /></div>
                      <p className="font-medium font-abu ml-3">Rp 250.000</p>
                    </div>
                    <div className="flex mt-2">
                      <div className=""><Icon icon="maki:doctor" color="#66d37e" width="20" height="20" /></div>
                      <p className="font-medium font-abu ml-3">19.00</p>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-white">
                <img
                  className="w-full"
                  src={fisio}
                  alt="Fisioterapi"
                />
                <div className="px-6 py-4">
                  <div className="font-hijau font-semibold text-xl mb-2">
                    Fisioterapi
                  </div>
                  <ul>
                    <div className="flex">
                        <div className=""><Icon icon="maki:doctor" color="#66d37e" width="20" height="20" /></div>
                        <p className="font-medium font-abu ml-3">dr. Wade Warren</p>
                    </div>
                    <div className="flex mt-2">
                      <div className=""><Icon icon="vaadin:money" color="#66d37e" width="20" height="20" /></div>
                      <p className="font-medium font-abu ml-3">Rp 250.000</p>
                    </div>
                    <div className="flex mt-2">
                      <div className=""><Icon icon="maki:doctor" color="#66d37e" width="20" height="20" /></div>
                      <p className="font-medium font-abu ml-3">19.00</p>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-white">
                <img
                  className="w-full"
                  src={kemo}
                  alt="Kemoterapi"
                />
                <div className="px-6 py-4">
                  <div className="font-hijau font-semibold text-xl mb-2">
                    Kemoterapi
                  </div>
                  <ul>
                    <div className="flex">
                        <div className=""><Icon icon="maki:doctor" color="#66d37e" width="20" height="20" /></div>
                        <p className="font-medium font-abu ml-3">dr. Wade Warren</p>
                    </div>
                    <div className="flex mt-2">
                      <div className=""><Icon icon="vaadin:money" color="#66d37e" width="20" height="20" /></div>
                      <p className="font-medium font-abu ml-3">Rp 250.000</p>
                    </div>
                    <div className="flex mt-2">
                      <div className=""><Icon icon="maki:doctor" color="#66d37e" width="20" height="20" /></div>
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
          <div id="slide-1" className="carousel-item relative w-full">
            <div className="flex mt-8 gap-8">
              <div className="max-w-sm rounded-2xl overflow-hidden bg-whitefc shadow-xl ">
                <img className="w-full" src={photo3} alt=" " />
                <div className="px-6 py-4">
                  <div className="font-medium font-hijau text-xl mb-2">
                    Udang Goreng
                  </div>
                  <div className="gap-4">
                    <div className="flex justify-between rounded-lg bg-blue-custom p-1 font-bold text-white ">
                      <div className=" px-2 ">Energi</div>
                      <div className=" px-2 ">1,68 kj</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-hijau-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Protein</div>
                      <div className=" px-2 ">1,68 g</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-merah-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Lemak</div>
                      <div className=" px-2 ">1,68 g</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-oren-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Karbo</div>
                      <div className=" px-2 ">1,68 kj</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-sm rounded-2xl overflow-hidden bg-whitefc shadow-xl ">
                <img className="w-full" src={wonton} alt=" " />
                <div className="px-6 py-4">
                  <div className="font-medium font-hijau text-xl mb-2">
                    Wonton Goreng
                  </div>
                  <div className="gap-4">
                    <div className="flex justify-between rounded-lg bg-blue-custom p-1 font-bold text-white ">
                      <div className=" px-2 ">Energi</div>
                      <div className=" px-2 ">1,68 kj</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-hijau-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Protein</div>
                      <div className=" px-2 ">1,68 g</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-merah-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Lemak</div>
                      <div className=" px-2 ">1,68 g</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-oren-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Karbo</div>
                      <div className=" px-2 ">1,68 kj</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-sm rounded-2xl overflow-hidden bg-whitefc shadow-xl ">
                <img className="w-full" src={steak} alt=" " />
                <div className="px-6 py-4">
                  <div className="font-medium font-hijau text-xl mb-2">
                    Steak Sapi
                  </div>
                  <div className="gap-4">
                    <div className="flex justify-between rounded-lg bg-blue-custom p-1 font-bold text-white ">
                      <div className=" px-2 ">Energi</div>
                      <div className=" px-2 ">1,68 kj</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-hijau-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Protein</div>
                      <div className=" px-2 ">1,68 g</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-merah-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Lemak</div>
                      <div className=" px-2 ">1,68 g</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-oren-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Karbo</div>
                      <div className=" px-2 ">1,68 kj</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-sm rounded-2xl overflow-hidden bg-whitefc shadow-xl ">
                <img className="w-full" src={ayam} alt=" " />
                <div className="px-6 py-4">
                  <div className="font-medium font-hijau text-xl mb-2">
                    Ayam Bakar
                  </div>
                  <div className="gap-4">
                    <div className="flex justify-between rounded-lg bg-blue-custom p-1 font-bold text-white ">
                      <div className=" px-2 ">Energi</div>
                      <div className=" px-2 ">1,68 kj</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-hijau-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Protein</div>
                      <div className=" px-2 ">1,68 g</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-merah-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Lemak</div>
                      <div className=" px-2 ">1,68 g</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-oren-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Karbo</div>
                      <div className=" px-2 ">1,68 kj</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="slide-2" className="carousel-item relative w-full">
            <div className="flex mt-8 gap-8">
              <div className="max-w-sm rounded-2xl overflow-hidden bg-whitefc shadow-xl ">
                <img className="w-full" src={ayam2} alt=" " />
                <div className="px-6 py-4">
                  <div className="font-medium font-hijau text-xl mb-2">
                    Ayam Goreng Thailand
                  </div>
                  <div className="gap-4">
                    <div className="flex justify-between rounded-lg bg-blue-custom p-1 font-bold text-white ">
                      <div className=" px-2 ">Energi</div>
                      <div className=" px-2 ">1,68 kj</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-hijau-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Protein</div>
                      <div className=" px-2 ">1,68 g</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-merah-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Lemak</div>
                      <div className=" px-2 ">1,68 g</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-oren-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Karbo</div>
                      <div className=" px-2 ">1,68 kj</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-sm rounded-2xl overflow-hidden bg-whitefc shadow-xl ">
                <img className="w-full" src={mie} alt=" " />
                <div className="px-6 py-4">
                  <div className="font-medium font-hijau text-xl mb-2">
                    Spaghetti
                  </div>
                  <div className="gap-4">
                    <div className="flex justify-between rounded-lg bg-blue-custom p-1 font-bold text-white ">
                      <div className=" px-2 ">Energi</div>
                      <div className=" px-2 ">1,68 kj</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-hijau-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Protein</div>
                      <div className=" px-2 ">1,68 g</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-merah-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Lemak</div>
                      <div className=" px-2 ">1,68 g</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-oren-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Karbo</div>
                      <div className=" px-2 ">1,68 kj</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-sm rounded-2xl overflow-hidden bg-whitefc shadow-xl ">
                <img className="w-full" src={mac} alt=" " />
                <div className="px-6 py-4">
                  <div className="font-medium font-hijau text-xl mb-2">
                    Mac and Cheese
                  </div>
                  <div className="gap-4">
                    <div className="flex justify-between rounded-lg bg-blue-custom p-1 font-bold text-white ">
                      <div className=" px-2 ">Energi</div>
                      <div className=" px-2 ">1,68 kj</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-hijau-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Protein</div>
                      <div className=" px-2 ">1,68 g</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-merah-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Lemak</div>
                      <div className=" px-2 ">1,68 g</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-oren-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Karbo</div>
                      <div className=" px-2 ">1,68 kj</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-sm rounded-2xl overflow-hidden bg-whitefc shadow-xl ">
                <img className="w-full" src={photo3} alt=" " />
                <div className="px-6 py-4">
                  <div className="font-medium font-hijau text-xl mb-2">
                    Udang Goreng
                  </div>
                  <div className="gap-4">
                    <div className="flex justify-between rounded-lg bg-blue-custom p-1 font-bold text-white ">
                      <div className=" px-2 ">Energi</div>
                      <div className=" px-2 ">1,68 kj</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-hijau-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Protein</div>
                      <div className=" px-2 ">1,68 g</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-merah-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Lemak</div>
                      <div className=" px-2 ">1,68 g</div>
                    </div>
                    <div className="flex justify-between rounded-lg bg-oren-custom p-1 font-bold text-white mt-2 ">
                      <div className=" px-2 ">Karbo</div>
                      <div className=" px-2 ">1,68 kj</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <footer className="bg-green-500 text-white mt-10" >
        <div className="container mx-auto py-10">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold">Nutri Health</h3>
              <p className="mt-3">Jl. Sunan Kalijaga No. 100, Tansungpinang, Kepulauan Riau</p>
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
