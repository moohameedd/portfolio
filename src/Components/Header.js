import Grid from '@mui/material/Grid';
import { VscSearch } from 'react-icons/vsc';

export default function Header() {
    return (
        <Grid 
            container 
            style={{
                background: "#1A1A2E", 
                margin: 0,
                width: "100%",
                height: "35px",
                display: "flex",
                alignItems: "center" 
            }}
        >
            <Grid size={3} style={{ display: "flex", alignItems: "center", paddingLeft: "12px" }}>
                <div style={{ display: "flex", gap: "8px" }}>
                    <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ff5f56", display: "inline-block" }}></span>
                    <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#ffbd2e", display: "inline-block" }}></span>
                    <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#27c93f", display: "inline-block" }}></span>
                </div>
            </Grid>

            <Grid size={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div 
                    className='searchDiv' 
                    style={{
                        background: "#ffffff0d",
                        width: "320px",
                        height: "22px",
                        borderRadius: "5px",
                        border: "1px solid #3c3c3c",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        cursor: "pointer"
                    }}
                >
                    <VscSearch style={{ color: "#888888", fontSize: "13px" }} />
                    <span style={{ color: "#888888", fontSize: "12px", fontFamily: "monospace" }}>
                        Mohamed-ferchichi : portfolio
                    </span>
                </div>
            </Grid>

            <Grid size={3}></Grid>
        </Grid>
    );
}