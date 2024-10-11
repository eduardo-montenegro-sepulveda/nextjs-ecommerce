import MuiButton from '@mui/material/Button';

interface Props
{
    color: string;
    variant: 'text' | 'outlined' | 'contained';
}

const Button = ({ color, variant }: Props) =>
{
    return (
        <div>
            <MuiButton
                variant={variant}
                sx={
                {
                    background: color,
                    width: '10rem',
                    padding: '1rem 2rem',
                    borderRadius: 0,
                    fontWeight: 800
                }}
            >
                See Product
            </MuiButton>
        </div>
    );
}

export default Button;
