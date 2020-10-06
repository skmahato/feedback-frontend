import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';

import { createDealership, updateDealership } from '../../../actions/dealerships';

export default function FormDialog({ dealer }) {
    const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(dealer?.name || '');
  const [location, setLocation] = useState(dealer?.location || '');
  const [description, setDesciption] = useState(dealer?.description || '');
  const [contact, setContact] = useState(dealer?.phone || '');
  const [website, setWebsite] = useState(dealer?.website || '');
  const [email, setEmail] = useState(dealer?.email || '');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      const params = {
          name,
          location,
          description,
          phone: contact,
          website,
          email
      }

        if (isEmpty(dealer)) {
            return dispatch(createDealership(params)).then((res) => {
                if (!res.error) {
                    setOpen(false);
                }
            })
        }

        dispatch(updateDealership(params, dealer.id)).then((res) => {
            if (!res.error) {
                setOpen(false);
            }
        })
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {isEmpty(dealer) ? 'Add Dealership' : 'Edit Dealership'}
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <>
<form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add the following details to register on the platform.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Dealership Name"
            type="text"
            fullWidth
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="location"
            label="Location"
            type="text"
            fullWidth
            required
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            required
            value={description}
            onChange={e => setDesciption(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="contact"
            label="Contact Info"
            type="text"
            fullWidth
            required
            value={contact}
            onChange={e => setContact(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="website"
            label="Website"
            type="text"
            fullWidth
            required
            value={website}
            onChange={e => setWebsite(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </DialogActions>
      </form>
        </>
      </Dialog>
    </div>
  );
}
