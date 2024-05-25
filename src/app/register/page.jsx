"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import loading from "@/utils/spinner";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/authAction";

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confPassword, setConfPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateNomor = (e) => {
    const inputValue = e.target.value;

    // membatasi input berupa angka dan simbol +
    const numberValue = inputValue.replace(/[^\d]/g, "");

    // membatasi inputan nomor menjadi 14
    const maxLength = 14;
    const truncateValueNomor = numberValue.slice(0, maxLength);

    setPhone(truncateValueNomor);
  };

  const handleRegsiter = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password, confPassword));
  };

  return (
    <>
      <div className="flex h-full bg-gradient-to-r from-blue-500 to-teal-400 justify-center py-14">
        <div className="w-[100%] lg:w-[60%] flex justify-start items-center mx-[23px] lg:px-[128px] relative">
          <form
            className="w-full border-2 rounded-lg shadow-2xl px-8 py-10 bg-white text-neutral-700"
            onSubmit={handleRegsiter}
          >
            <h1 className="text-[32px] text-[#1E3A5F] font-Montserrat font-bold mb-8">
              Daftar
            </h1>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <label className="font-Poppins text-[14px] mb-[4px]">Nama</label>
                <input
                  type="text"
                  className="border w-full py-3 px-4 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Nama Lengkap"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-Poppins text-[14px] mb-[4px]">Email</label>
                <input
                  type="email"
                  className="border w-full py-3 px-4 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Contoh: johndoe@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="font-Poppins text-[14px] mb-[4px]">Buat Password</label>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="border w-full py-3 px-4 rounded-lg pr-[3.5rem] focus:outline-none focus:border-blue-500"
                    placeholder="Masukkan password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    aria-label="toggle password visibility"
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 px-3 py-1"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff className="text-xl" /> : <FiEye className="text-xl" />}
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <label className="font-Poppins text-[14px] mb-[4px]">Konfirmasi Password</label>
                </div>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="border w-full py-3 px-4 rounded-lg pr-[3.5rem] focus:outline-none focus:border-blue-500"
                    placeholder="Masukkan konfirmasi password"
                    onChange={(e) => setConfPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    aria-label="toggle password visibility"
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 px-3 py-1"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FiEyeOff className="text-xl" /> : <FiEye className="text-xl" />}
                  </button>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center font-Poppins btn btn-primary w-full text-[16px] font-medium bg-green-500 text-white py-[12px] rounded-lg mt-10 hover:bg-green-600"
            >
              Daftar
            </button>
            <div className="flex justify-center items-center gap-2 mt-6">
              <h1 className="font-Poppins text-[14px] font-normal">Sudah punya akun?</h1>
              <Link
                href="/login"
                className="font-Poppins text-[#1E3A5F] text-[14px] font-bold hover:underline hover:border-[#1E3A5F]"
              >
                Masuk di sini
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
