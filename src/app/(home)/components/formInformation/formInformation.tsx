'use client';

import * as React from 'react';
import { Formik, FormikProps } from 'formik';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Input } from '@/shared/input/input';
import { InformationFormValidations } from '@/utils/validations';
import { FormValuesInterface } from '@/typings/informationFormValuesInterface';
import styles from "./styles.module.scss";
import UseAddressInformation from '@/store/useAddressInformation';

interface FormInformationInterface {
    formRef: React.Ref<FormikProps<FormValuesInterface>>;
}

const FormInformation: React.FC<FormInformationInterface> = ({ formRef }) => {
    const { informationValues } = UseAddressInformation();

    const initialValues: FormValuesInterface = { nationalId: informationValues.nationalId, phoneNumber: informationValues.phoneNumber, }

    const handleSubmit = (values: FormValuesInterface) => {
        // onSubmit()
    };


    return (
        <Box className={styles.container} >
            <Box component="div" className={styles.title}>
                <Typography component="p">
                    لطفا اطلاعات شخصی مالک خودرو را وارد کنید:
                </Typography>
                <span className={styles.seprator}></span>
            </Box>
            <Formik
                initialValues={initialValues}
                validationSchema={InformationFormValidations}
                onSubmit={handleSubmit}
                innerRef={formRef}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleSubmit,
                    setFieldValue
                }) => (
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }} className={styles.formContainer}>
                        <Input
                            margin='normal'
                            fullWidth
                            id="nationalId"
                            name="nationalId"
                            placeholder="کد ملی"
                            type='number'
                            inputMode='numeric'
                            onChange={(e) => setFieldValue("nationalId", e.target.value.toString())}
                            onBlur={handleBlur}
                            value={values.nationalId}
                            error={(errors.nationalId && touched.nationalId && errors.nationalId) ? true : false}
                            helperText={errors.nationalId && touched.nationalId && errors.nationalId}
                        />
                        <Input
                            margin='normal'
                            fullWidth
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="شماره تلفن همراه"
                            type='number'
                            inputMode='numeric'
                            onChange={(e) => setFieldValue("phoneNumber", e.target.value.toString())}
                            onBlur={handleBlur}
                            value={values.phoneNumber}
                            error={(errors.phoneNumber && touched.phoneNumber && errors.phoneNumber) ? true : false}
                            helperText={errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                        />
                    </Box>
                )}
            </Formik>
        </Box>
    );
}

export default FormInformation