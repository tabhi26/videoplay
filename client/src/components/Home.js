import { Button } from "@mui/material";
import SideNav from "./SideNav"
import BasicTable from "./BasicTable";
import axios from "axios";
import { useEffect, useState } from "react";
import UploadVideo from "./UploadVideo";
import PlayVideo from "./PlayVideo";
import PopUp from "./PopUp";
import Loading from "./Loading";
import "./Home.css"

const Home = (props) => {
    const [video, setVideo] = useState([]);
    const [show, setShow] = useState({ upload: false, play: false });

    const handleClick = () => {
        setShow({...show, upload: !show.upload});
    }
    
    const fetchData = async () => {
        props.setLoader(true);
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/video/getAll`);
        props.setLoader(false);
        setVideo(response.data);
        return;
    }

    useEffect(()=> {
        fetchData();
    },[show.upload]);

    return (
        <div>
        {props.loader ? (<Loading/>) : (
        <>
        <SideNav/>
        <h1>Learn</h1>
        <Button variant="contained" sx={{ backgroundColor: "crimson", marginLeft: "75%", "&:hover": {backgroundColor: 'crimson'}}} onClick={handleClick}>Upload Video</Button>
        <div className="container">
           <BasicTable data={video} show={show} setShow={setShow}/>
        </div>
        <div className="container">
            <PopUp title="upload" open={show} setOpen={setShow}>
                <UploadVideo show={show} setShow={setShow} loader={props.loader} setLoader={props.setLoader} />
            </PopUp>
        </div>
        <div className="container">
            <PopUp title="play" open={show} setOpen={setShow}>
                <PlayVideo video={video} show={show} setShow={setShow} />
            </PopUp>
        </div>
        </>
        )}
        </div>
    )
}

export default Home;