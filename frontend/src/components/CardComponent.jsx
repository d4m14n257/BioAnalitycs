import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import styles from '@/styles/card.module.css';

export default function CardComponent (props) {
    const { title, subtitle, children } = props;

    return (
        <Card className={styles.border}>
            <CardHeader
                title={title}
                subheader={subtitle}
            />
            {children}
        </Card>
    );
}