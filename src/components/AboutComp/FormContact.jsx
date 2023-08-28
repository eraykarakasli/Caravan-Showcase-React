import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

function FormContact() {
    return (
        <div>
            <Formik
                initialValues={{
                    email: "",
                    username: "",
                    content: "",
                    message: "",

                }}

                /* ///////// YUP VALIDATION //////// */
                validationSchema={
                    Yup.object({
                        username: Yup.string().required("Lütfen Adınızı ve Soyadınızı Yazınız."),
                        email: Yup.string().email("Geçersiz E-mail Adresi.").required("E-posta Adresinizi Yazınız."),
                        content: Yup.string().required("Lütfen Konu Yazınız."),
                        message: Yup.string().required("Lütfen Mesaj Yazınız.")
                    })}

                /*  /////////// ON SUBMIT //////////// */
                onSubmit={(values, { resetForm, setSubmitting }) => {
                    console.log(values)
                    setTimeout(() => {
                        resetForm();
                        setSubmitting(false);

                    }, 2000)
                }}
            >

                {({ values, errors, handleSubmit, handleReset, handleChange, dirty, isSubmitting, touched }) => (
                    <form
                        onSubmit={handleSubmit}
                        className='  -mt-8 shadow-xl  '
                    >
                        <div className=' text-xl font-bold pt-7 text-white'>BİZİMLE İLETİŞİME GEÇ</div>
                        <p className='text-gray-400'>Merak ettiklerinizi, görüş ve önerilerinizi aşağıdaki formu doldurarak bize iletebilirsiniz.</p>

                        <div className='flex gap-4 '>
                            <div className='w-1/2'>
                                <input
                                    id='username'
                                    type="text"
                                    placeholder='Ad-Soyad *'
                                    className='border border-gray-500 rounded-sm w-full   h-12 mt-12 bg-transparent shadow-lg p-2 '
                                    value={values.username}
                                    onChange={handleChange}
                                />
                                {
                                    errors.username && touched.username && (
                                        <div className='text-red-500 text-sm p-2 '>{errors.username}</div>
                                    )
                                }
                            </div>


                            <div className='w-1/2 '>
                                <input
                                    id='email'
                                    type="text"
                                    placeholder='E-mail *'
                                    className='border border-gray-500 rounded-sm w-full  h-12 mt-12 bg-transparent shadow-lg p-2 '
                                    value={values.email}
                                    onChange={handleChange}
                                />
                                {
                                    errors.email && touched.email && (
                                        <div className='text-red-500 text-sm p-2 '>{errors.email}</div>
                                    )
                                }
                            </div>
                        </div>
                        <input
                            id='content'
                            type="text"
                            placeholder='Konu *'
                            className='border border-gray-500 rounded-sm w-full h-12 mt-5 bg-transparent shadow-lg p-2 '
                            value={values.content}
                            onChange={handleChange}
                        />
                        {
                            errors.content && touched.content && (
                                <div className='text-red-500 text-sm p-2 '>{errors.content}</div>
                            )
                        }

                        <input
                            id='message'
                            type="text"
                            placeholder='Mesaj *'
                            className='border border-gray-500 placeholder: rounded-sm w-full h-[170px] mt-5 bg-transparent shadow-lg p-2 '
                            value={values.message}
                            onChange={handleChange}
                        />
                         {
                            errors.message && touched.message && (
                                <div className='text-red-500 text-sm p-2 '>{errors.message}</div>
                            )
                        }





                        <button
                            type="submit"
                            className=' z-30 bg-red-600 mt-10  text-[16px] px-9 duration-500  p-4 rounded-full font-semibold hover:bg-transparent text-white hover:text-red-600 border border-red-600 '
                            disabled={!dirty || isSubmitting}

                        >GÖNDER</button>



                    </form>
                )}


            </Formik>


        </div>
    )
}

export default FormContact