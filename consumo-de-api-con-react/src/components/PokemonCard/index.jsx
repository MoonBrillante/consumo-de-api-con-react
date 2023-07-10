import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea,  DialogContent } from '@mui/material';
import {Box} from "@mui/system";
import { Dialog, DialogTitle, DialogActions } from '@mui/material';


export default function PokemonCard({ name, image, types }) {
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const typeHandler = () => {
        if (types[1]) {
            return types[0].type.name + " | " + types[1].type.name;
        }
        return types[0].type.name;
    };


    return (
        <React.Fragment>
            <Card sx={{
                maxWidth: 345, "& :hover": {
                    background: 'linear-gradient(45deg,#AE64F3 20%, #0C00FF 90%)'
                }
            }} >
                <CardActionArea onClick={handleOpenDialog}>
                    <CardMedia component="img" height="200" image={image} alt="green iguana" />
                    <CardContent>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <br />
                            <Typography gutterBottom variant="caption" component="div">
                                {typeHandler()}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Name:{name}</DialogTitle>
                <DialogContent>
                    <Typography>Type: {typeHandler()}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Close</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>

    );
}     
