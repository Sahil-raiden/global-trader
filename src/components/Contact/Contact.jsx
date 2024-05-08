import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import './Contact.css';

const ContactForm = () => {
    let {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    function handleFormSubmit(contact) {
        console.log(contact)
    }
    return (
        <div className='contact-bg'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="border p-3 mx-auto bg-light rounded-4 m-5" style={{ width: '75vmin' }}>
                        <h1 className="display-3 fs-1 text-center mb-3">Contact Us</h1>
                        <form className="mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control shadow-sm"
                                    {...register("name", {
                                        required: true,
                                    })}
                                />
                                {errors.name?.type === "required" && (
                                    <p className="text-danger">Name is required</p>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control shadow-sm"
                                    {...register("email", {
                                        required: true,
                                    })}
                                />
                                {errors.email?.type === "required" && (
                                    <p className="text-danger">Email is required</p>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contactno" className="form-label">
                                    Contact Number
                                </label>
                                <input
                                    type="text"
                                    id="contactno"
                                    className="form-control shadow-sm"
                                    {...register("contactno", {
                                        required: true,
                                    })}
                                />
                                {errors.contactno?.type === "required" && (
                                    <p className="text-danger">Contact Number is required</p>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="companyname" className="form-label">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="companyname"
                                    className="form-control shadow-sm"
                                    {...register("companyname", {
                                        required: true,
                                    })}
                                />
                                {errors.companyname?.type === "required" && (
                                    <p className="text-danger">Company Name is required</p>
                                )}
                            </div>
                            <div className="mb-3">
                                <div>
                                    <label className='form-label'>Services Required :</label>
                                    <select className='form-control'
                                        {...register("servicesrequired", {
                                            required: true
                                        })}
                                    >
                                        <option value="promotion-events">Promotion Events</option>
                                        <option value="shop-opening-branding">Shop Opening & Branding</option>
                                        <option value="cantervan-indoor-outdoor">Cantervan Indoor / Outdoor</option>
                                        <option value="manpower">Manpower</option>
                                        <option value="brand-installation">Brand Installation</option>
                                    </select>
                                </div>
                                {errors.email?.type === "required" && (
                                    <p className="text-danger">Email is required</p>
                                )}
                            </div>
                            <button className="btn btn-success d-block mb-3">Submit</button>
                        </form>
                    </div>
                    <div>
                        <div className="row row-cols-3 mx-auto" style={{ width: '50%' }}>
                            <a className='col' href="mailto:globaltrader19@gmail.com">
                                <IoIosMail style={{ fontSize: '5vw' }} />
                            </a>
                            <a className='col' href="tel:8939169177">
                                <FaPhoneAlt style={{ fontSize: '5vw' }} />
                            </a>
                            <a className='col' href="https://www.google.com/maps/place/...">
                                <FaLocationDot style={{ fontSize: '5vw' }} />
                            </a>
                        </div>
                    </div>
                    <div className="contact-about text-white">
                        <p>Have questions or need assistance? Reach out to our dedicated team for expert event planning guidance and support. Contact us today to turn your event dreams into reality!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
