import React, { useEffect, useState } from "react";
import InputField from "../../../../assets/Components/PurchaseProcessCart/CustomElem/InputFiled/InputField";
import TextAreaField from "../../../../assets/Components/PurchaseProcessCart/CustomElem/TextAreaField/TextAreaField";
import SelectFiled from "../../../../assets/Components/PurchaseProcessCart/CustomElem/SelectFiled/SelectFiled";
import provincesData from "./../../../../provincesData.json";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function DetailsBoxUserForOrders({
  setDetailsBoxUserForOrders,
  isDetailsBoxUserForOrders,
  detailUserInLocalStorage
}) {
  const [selectedProvince, setsSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [allCitiesProvinces, setAllCitiesProvinces] = useState([]);


  const formFields = [
    {
      type: "input",
      label: "نام تحویل گیرنده",
      required: true,
      placeholder: "احسان...",
      nameFormik: "firstname",
      requaired: true,
    },
    {
      type: "input",
      label: "نام خانوادگی تحویل گیرنده",
      required: true,
      placeholder: "رمضانی...",
      nameFormik: "lastname",
      requaired: true,
    },
    {
      type: "input",
      label: "شماره موبایل",
      required: true,
      placeholder: "09*********",
      nameFormik: "phone",
      requaired: true,
    },
    {
      type: "input",
      label: "شماره ملی",
      placeholder: "*********",
      nameFormik: "nationalcode",
    },
    {
      type: "select",
      label: "استان",
      name: "provinces",
      required: true,
      nameFormik: "",
      requaired: true,
    },
    {
      type: "select",
      label: "شهر",
      name: "city",
      required: true,
      nameFormik: "",
      requaired: true,
    },
    {
      type: "textarea",
      label: "آدرس پستی",
      required: true,
      placeholder: "آدرس دقیق محل سکونت ....",
      nameFormik: "postaladdress",
      requaired: true,
    },
    {
      type: "input",
      label: "کد پستی",
      required: true,
      placeholder: "*******",
      nameFormik: "postalcode",
      requaired: true,
    },
    { type: "input", label: "شماره تلفن ثابت", nameFormik: "landlinenumber" },
  ];

  const validationsForm = Yup.object({
    firstname: Yup.string()
      .required("نام الزامی میبابشد")
      .min(2, "نام باید حداقل 2 حرف باشد"),
    postaladdress: Yup.string()
      .required("آدرس پستی را وارد کنید")
      .min(10, "آدرس پستی باید حداقل ۱۰ کاراکتر باشد")
      .matches(
        /^[آ-ی0-9\s\-\/،.,\-()]+$/,
        "آدرس پستی شامل کاراکترهای غیرمجاز است"
      ),
    lastname: Yup.string()
      .required(" نام خانوادگی الزامی میبابشد")
      .min(3, "نام خانوادگی باید حداقل 2 حرف باشد"),
    phone: Yup.string()
      .required("شماره موبایل الزامی میباشد")
      .matches(/^09\d{9}$/, "شماره موبایل باید با 09 شروع شده و 11 رقم باشد"),
    postalcode: Yup.string()
      .required("کد پستی الزامی است")
      .matches(/^\d{10}$/, "کد پستی باید ۱۰ رقم باشد"),

    landlinenumber: Yup.string()
      .notRequired()
      .matches(/^0\d{10}$/, "شماره تلفن ثابت باید با 0 شروع شده و 11 رقم باشد")
      .nullable(),
    province: Yup.string().required("استان الزامی است"),
    city: Yup.string().required("شهر الزامی است"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
      nationalcode: "",
      postaladdress: "",
      postalcode: "",
      landlinenumber: "",
      province: "",
      city: "",
    },
    validationSchema: validationsForm,

    onSubmit() {},
  });

  const handleChangeProvinces = (e) => {
    const provinceName = e.target.value;
    formik.setFieldValue("province", provinceName);

    setsSelectedProvince(provinceName);
    setSelectedCity("");

    const foundCitis = provincesData.find((item) => item.name == provinceName);
    if (foundCitis) {
      const arrayCitis = foundCitis.cities.map((item) => item);
      setAllCitiesProvinces(arrayCitis);
    } else {
      setAllCitiesProvinces([]);
    }
  };

  const cityHandlerChange = (value) => {
    setSelectedCity(value);
    formik.setFieldValue("city", value);
  };

  const handelDetailsUser = () => {
    const forLocaleStorage = {
      firstname: formik.values.firstname,
      lastname: formik.values.lastname,
      city: formik.values.city,
      province: formik.values.province,
      postaladdress: formik.values.postaladdress,
      postalcode: formik.values.postalcode,
      phone : formik.values.phone,
    };
    localStorage.setItem("userOrders", JSON.stringify(forLocaleStorage));

    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            setDetailsBoxUserForOrders(false);
            resolve();
          } catch (error) {
            reject();
          }
        }, 2000);
      }),
      {
        pending: "در حال ثبت اطلاعات...",
        success: "اطلاعات با موفقیت ثبت شد ✅",
        error: "خطا در ثبت اطلاعات ❌",
      }
    );
  };

  return (
    <div
      className={`fixed ${
        isDetailsBoxUserForOrders
          ? "opacity-100 visible transition-Custom"
          : "opacity-0 invisible"
      } transition-all overflow-y-scroll pb-5 bg-white
      w-full h-full top-0 z-20 `}
    >
      <div className="flex items-center justify-between p-5 text-xs border-b-slate-300 border-solid border-b-1">
        <span className="text-sm">افزودن آدرس جدید</span>
        <div onClick={() => setDetailsBoxUserForOrders(false)} className="">
          <svg className="w-6 h-6">
            <use href="#x-marks"></use>
          </svg>
        </div>
      </div>
      <form
        action="#"
        onSubmit={formik.handleSubmit}
        className="p-5 flex flex-col gap-5"
      >
        {formFields.map((item, index) => {
          if (item.type === "input") {
            return (
              <InputField
                validationSchema={formik}
                formik={formik.initialValues}
                handleChangeFormik={formik.handleChange}
                item={item}
                error={
                  formik.touched[item.nameFormik] &&
                  formik.errors[item.nameFormik]
                }
                key={index + 1}
              />
            );
          } else if (item.type === "select") {
            if (item.name === "provinces") {
              return (
                <>
                  <label key={item.label} htmlFor="#">
                    {item.label}
                  </label>
                  <select
                    key={index + 1}
                    className="border-1 border-slate-300 border-solid rounded-sm"
                    onChange={handleChangeProvinces}
                    value={formik.values.province}
                    name="province"
                    id="province"
                  >
                    <option value="">انتخاب استان</option>
                    {provincesData.map((item, index) => (
                      <option key={item.value} value={item.name}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                  {formik.touched.province && formik.errors.province && (
                    <span className="text-red-700 text-xs font-Morabba">
                      {formik.errors.province}
                    </span>
                  )}
                </>
              );
            } else if (item.name === "city") {
              return (
                <>
                  <label htmlFor="#">{item.label}</label>
                  <select
                    key={item.label}
                    className="border-1 border-slate-300 border-solid rounded-sm"
                    name="city"
                    onChange={(e) => cityHandlerChange(e.target.value)}
                    id="city"
                    value={formik.values.city}
                  >
                    <option value="">انتخاب شهر</option>
                    {allCitiesProvinces.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {formik.touched.city && formik.errors.city && (
                    <span className="text-red-700 text-xs font-Morabba">
                      {formik.errors.city}
                    </span>
                  )}
                </>
              );
            }
          } else {
            return (
              <>
                <TextAreaField
                  item={item}
                  error={
                    formik.touched[item.nameFormik] &&
                    formik.errors[item.nameFormik]
                  }
                  handleChangeFormik={formik.handleChange}
                  formik={formik.initialValues}
                />
              </>
            );
          }
        })}
        <div
          onClick={() => handelDetailsUser(false)}
          className=" text-white font-Dana flex justify-end"
        >
          <button
            type="submit"
            className="bg-[#ef3f56] pt-1 pb-1 rounded-sm pr-3 pl-3"
          >
            ثبت آدرس
          </button>
        </div>
      </form>
    </div>
  );
}
