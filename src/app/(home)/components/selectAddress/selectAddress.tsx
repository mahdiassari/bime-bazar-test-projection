'use client';

import React, { useEffect } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import UseAddressInformation from '@/store/useAddressInformation';
import AddressDrawer from '../addressesDrawer/addressesDrawer';
import { getMyAddressesApi } from '../../apis';
import styles from "./styles.module.scss";
import { AddressInterface } from '@/typings/addressInterface';


interface SelectAddressInterface { }

const SelectAddress: React.FC<SelectAddressInterface> = ({ }) => {

    const { openDrawer, selectedAddress, addresses, setOpenDrawer, setSelectedAddress, setAddresses } = UseAddressInformation();

    useEffect(() => {
        if (addresses.length === 0) {
            getMyAddressesApi().then((res: AddressInterface[]) => {
                setAddresses(res)
            });
        }
    }, [])

    const onSelectedAddress = (value: AddressInterface | null) => {
        setSelectedAddress(value)
    }

    return (
        <Container component={"section"} className={styles.selectAddressContainer}>
            <Typography component={"h5"} className={styles.selectAddressHeaderTitle}>
                آدرس جهت درج روی بیمه‌نامه
            </Typography>
            <span className={styles.seprator}></span>
            {!!!selectedAddress &&
                <Box component={"div"} className={styles.selectAddressBox}>
                    <Typography component={"p"} className={styles.selectAddressTitle}>
                        لطفا آدرسی را که می‌خواهید روی بیمه‌نامه درج شود، وارد کنید.
                    </Typography>
                    <Button variant="contained" onClick={() => setOpenDrawer(true)} className={styles.selectAddressButton}>
                        انتخاب از آدرس‌های من
                    </Button>
                </Box>}
            {!!selectedAddress &&
                <Typography component={"p"} className={styles.selectedAddressTitle} onClick={() => setOpenDrawer(true)}>
                    {selectedAddress?.name}
                </Typography>
            }
            <AddressDrawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                addresses={addresses}
                onSelect={onSelectedAddress}
                selectedAddress={selectedAddress}
            />
        </Container>
    );
}

export default SelectAddress