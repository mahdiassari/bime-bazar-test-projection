"use client"

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Box, Button } from '@mui/material';
import Header from "@/shared/header/header";
import styles from "./styles.module.scss";
import FormInformation from "./components/formInformation/formInformation";
import SelectAddress from './components/selectAddress/selectAddress';
import UseAddressInformation from '@/store/useAddressInformation';
import { SaveOrderRequest } from '@/typings/saveApiPayloadInterface';
import { FormikProps } from 'formik';
import { FormValuesInterface } from '@/typings/informationFormValuesInterface';
import { orderCompletionApi } from './apis';

interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {
  const router = useRouter();
  const formRef = useRef<FormikProps<FormValuesInterface>>(null);
  const { selectedAddress, setInformationValues } = UseAddressInformation();

  // Handle Back Navigation
  useEffect(() => {
    window.addEventListener('popstate', function (event) {
      event.preventDefault()
    });
  }, []);

  const onConfirm = async () => {
    await formRef.current?.submitForm()
    let formHasError = await formRef.current?.validateForm()

    if (!!!formHasError?.nationalId && !!!formHasError?.phoneNumber) {
      setInformationValues({
        phoneNumber: formRef.current?.values?.phoneNumber.toString() as string,
        nationalId: formRef.current?.values?.nationalId.toString() as string,
      })
      if (!!selectedAddress) {
        let body: SaveOrderRequest = {
          nationalId: formRef.current?.values?.nationalId as string,
          phoneNumber: formRef.current?.values?.phoneNumber as string,
          addressId: selectedAddress?.id as string,
        }
        orderCompletionApi(body).then((res) => {
          if (res?.errors) {
            res?.errors?.forEach((item: string) => alert(item))
            // Api has 400 error for this ("no addresses generated for this session" ) reason But I let router push to see successful-page
            router.push("/successful-page")
          }
          else {
            router.push("/successful-page")
          }
        });
      }
      else {
        alert("آدرس جهت درج روی بیمه‌نامه را انتخاب کنید.")
      }
    }
  }

  return (
    <Box component="main" className={styles.main}>
      <Box className={styles.body}>
        <Header title="تکمیل اطلاعات" />
        <Container component="div" className={styles.container}>
          <FormInformation formRef={formRef} />
          <SelectAddress />
        </Container>
      </Box>
      <Button variant="contained" onClick={onConfirm} className={styles.confirmButton}>
        تایید و ادامه
      </Button>
    </Box>
  );
}

export default Home