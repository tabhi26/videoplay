import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function PopUp(props) {
    console.log(props)

  const handleClose = () => {
    props.setOpen({...props.open, [`${props.title}`]: false});
  };

  return (
    <div>
      <Dialog
        open={props.open[`${props.title}`]}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          {`video ${props.title}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.children}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
