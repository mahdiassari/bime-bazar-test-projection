'use client';

import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Button, SwipeableDrawer, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { AddressInterface } from '@/typings/addressInterface';
import CloseIcon from '@/icons/closeIcon';
import styles from "./styles.module.scss";

interface AddressDrawerInterface {
    open: boolean;
    onClose: () => void;
    onOpen: () => void;
    addresses: AddressInterface[]
    onSelect: (selectedAddress: AddressInterface | null) => void;
    selectedAddress: AddressInterface | null;
}

const AddressDrawer: React.FC<AddressDrawerInterface> = ({ open, onClose, onOpen, addresses, onSelect, selectedAddress }) => {
    const [selectedAddressId, setSelectedAddressId] = useState<string>(selectedAddress?.id ? selectedAddress?.id : "")

    // Handle Back Navigation
    useEffect(() => {
        history.pushState(null, '', "/");
        window.addEventListener('popstate', function (event) {
            event.preventDefault()
            onClose()
        });
    }, []);

    const onConfirm = () => {
        let selectedAddress = addresses.find(item => item?.id === selectedAddressId)
        onSelect(selectedAddress ? selectedAddress : null)
    }

    return (
        <SwipeableDrawer
            disableSwipeToOpen={true}
            anchor={"bottom"}
            open={open}
            onClose={onClose}
            onOpen={onOpen}
            className={styles.addressSwipeableDrawer}
        >
            <Container className={styles.addressDrawerContainer} >
                <Box className={styles.addressDrawerHeader}>
                    <Typography component={"h5"} className={styles.addressDrawerHeaderTitle}>
                        انتخاب آدرس
                    </Typography>
                    <Box onClick={onClose}>
                        <CloseIcon />
                    </Box>
                </Box>
                <Box className={styles.addressesContainer}>
                    <FormControl>
                        <RadioGroup
                            name="address-drawer-radio-buttons"
                            value={selectedAddressId}
                            onChange={(e, value) => setSelectedAddressId(value)}
                        >
                            {addresses?.map((item: AddressInterface) => {
                                return (
                                    <Box key={item?.id} className={styles.addressDrawerOptionContainer}>
                                        <FormControlLabel
                                            value={item?.id}
                                            control={<Radio />}
                                            label={item?.name}

                                        />
                                        <Typography className={styles.addressDrawerOptionDetails}>
                                            {item?.details}
                                        </Typography>
                                    </Box>
                                )
                            })}
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box className={styles.addressesConfirmButtonContainer}>
                    <Button variant="contained" onClick={onConfirm} className={styles.addressesConfirmButton}>
                        انتخاب
                    </Button>
                </Box>
            </Container>
        </SwipeableDrawer >
    );
}

export default AddressDrawer