import Loader from "react-js-loader";

const Loading = () => {
    return (
        <div style={{ marginTop: "50vh"}}>
              <Loader type="spinner-cub" bgColor={"darkGrey"} color={'#FFFFFF'} size={200} />
        </div>
    )
}

export default Loading;