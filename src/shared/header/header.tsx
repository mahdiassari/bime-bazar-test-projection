import Typography from "@mui/material/Typography";
import styles from "./styles.module.scss";

interface HeaderInterface {
    title: string;
}

const Header: React.FC<HeaderInterface> = ({ title }) => {
    return (
        <Typography variant="h5" className={styles.headerContainer}>
            {title}
        </Typography>
    )
}

export default Header