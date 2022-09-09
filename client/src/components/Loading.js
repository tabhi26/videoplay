import Loader from "react-js-loader";

const Loading = () => {
    return (
        <div className={"item"}>
              <Loader type="spinner-cub" bgColor={"#FFFFFF"} color={'#FFFFFF'} size={200} />
        </div>
    )
}

export default Loading;