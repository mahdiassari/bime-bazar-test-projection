"use client"

import { useRouter } from 'next/navigation';
import { Container, Box, Typography, Button } from '@mui/material';
import Header from "@/shared/header/header";
import styles from "./styles.module.scss";


interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {
    const router = useRouter();

    const onReturn = () => {
        router.push("/")
    }

    return (
        <Box component="main" className={styles.main}>
            <Box className={styles.body}>
                <Header title="تکمیل اطلاعات" />
                <Container component="div" className={styles.container}>
                    <Typography component="h6" className={styles.succeccfulMessageText}>
                        اطلاعات شما با موفقیت ثبت شد.
                    </Typography>
                </Container>
            </Box>
            <Button variant="contained" onClick={onReturn} className={styles.returnButton}>
                بازگشت
            </Button>
        </Box>
    );
}

export default Home