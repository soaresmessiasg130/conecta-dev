import React, { useRef, useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
  SvgIcon,
  IconButton,
  Popover
} from '@material-ui/core';
import {
  Bell as BellIcon,
  Star as StarIcon,
  MessageCircle as MessageIcon,
  Heart as HeartIcon,
  Users as ConnectionIcon
} from 'react-feather';
// import { makeStyles } from '@material-ui/core/styles';

import { GetNotifications } from '../../../../../store/actions/NotificationAction';

// const useStyles = makeStyles((theme) => ({
//   root: {

//   }
// }));


function Notification () {
  const account = useSelector(state => state.account);
  const notifications = useSelector(state => state.notifications);

  console.log(notifications);

  const dispatch = useDispatch();
  const isAuthenticated = !!account.user;
  const ref = useRef(null);
  // const styles = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen () {
    setIsOpen(true);
  }

  function handleClose () {
    setIsOpen(false);
  }

  useEffect(() => {
    dispatch(GetNotifications());
  }, [dispatch]);

  return (
    isAuthenticated && (
      <>
        <IconButton ref={ref} onClick={handleOpen}>
          <SvgIcon>
            <Bell />
          </SvgIcon>
        </IconButton>

        <Popover
          onClose={handleClose}
          open={isOpen}
          anchorEl={ref.current}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          The content of the Popover.
        </Popover>
      </>
    )
  );
}

export default Notification;
